﻿import { AdventureModel } from '../Model/AdventureModel.js'
import { CardModel } from '../Model/CardModel.js'

//GlobalVariables
let CardDeckLimit = 50; //Amount of Cards first dealt out. It will increase every time this limit gets hit
const DrawMoreCards = 50; //Amount to increase by when Card DeckLimit is hit
let CurrentCardGlobal = 0;//Current Index in card deck. 0 is the starting point

//Classes
let AdventureModelOptions = new AdventureModel();
let CardModelOptions = new CardModel();

//Elements
let cardInfoHolder = document.getElementById('cardInfoHolder')

//Buttons
let RightSwipe = document.getElementById('RightSwipe');
let LeftSwipe = document.getElementById('LeftSwipe');
let RedoSwipe = document.getElementById('RedoSwipe');
let InfoButton = document.getElementById('InfoButton');
let RightArrow = 39;
let LeftArrow = 37;
let DownArrow = 40;
let UpArrow = 38;
let EnterButton = 13

$(document).ready(function () {
    RenderShuffledAdventureCards();
    RenderSearchAdventureCards();

});


/*********************Functions*******************************/
function RenderShuffledAdventureCards(){
   AdventureModelOptions.GetShuffledAdventures().then(function (ShuffledAdventures) {

       //Set up Cards to swipe
       DealOutCards(CardDeckLimit, ShuffledAdventures);//Deals out a set of cards.
       //CurrentCardGlobal++; //After rendering you HAVE to change the global current Card position by 1 otherwise the first click won't move to the next card

       //Add Listeners
       RightClickAndSwipeListeners(ShuffledAdventures);
       LeftClickAndSwipeListeners(ShuffledAdventures);
       UndoSwipeActionListener(ShuffledAdventures);
       MoreInfoActionSwipeListener(ShuffledAdventures)
       console.log(ShuffledAdventures);
       
        
    });
}

function RenderSearchAdventureCards() {
    let TypingTimer;
    let LeftSearchTxt = document.getElementById('LeftSearchTxt');
    let LeftSearchTagWrapper = document.getElementById('LeftSearchTagWrapper');
    let categoryChoice = document.querySelectorAll('.categoryChoice');

    categoryChoice.forEach(categoryChoice => {
        let categoryContent = categoryChoice.getAttribute('categoryContent');
        categoryChoice.addEventListener('click', function () {
            let LeftSearchTag = document.querySelectorAll('.LeftSearchTag');
            let tagSearchValue = `<li class="tagItemContainer tagTitle DetailTagItemIcon LeftSearchTag" tagcontent=" ${categoryContent}">
                                    ${categoryContent} <i class="fa fa-tags   SearchTagIcon"></i>
                              </li>`
            if (LeftSearchTag.length >= 5)
            {
                alert('You have a limit of 5 tags')
                clearTimeout(TypingTimer);
                TypingTimer = setTimeout(doneTypingSearch, 3500);
            }
            else
            {
                LeftSearchTagWrapper.insertAdjacentHTML('beforeend', tagSearchValue);
                clearTimeout(TypingTimer);
                TypingTimer = setTimeout(doneTypingSearch, 3500);
            }

        });
    })

    LeftSearchTxt.addEventListener('keyup', function (e) {
        
        let LeftSearchTag = document.querySelectorAll('.LeftSearchTag');
        let tagSearchValue = `<li class="tagItemContainer tagTitle DetailTagItemIcon LeftSearchTag" tagcontent="${LeftSearchTxt.value}">
                                    ${LeftSearchTxt.value} <i class="fa fa-tags   SearchTagIcon"></i>
                              </li>`

        //If Enter is pressed and we are focused on search add the tag
        if (LeftSearchTxt.focus && e.keyCode == EnterButton) {
            if (LeftSearchTag.length >= 5) {
                alert('You have a limit of 5 tags')
                clearTimeout(TypingTimer);
                TypingTimer = setTimeout(doneTypingSearch, 3500);
            }
            else {
                LeftSearchTagWrapper.insertAdjacentHTML('beforeend', tagSearchValue)
                TypingTimer = setTimeout(doneTypingSearch, 3500);
            }

            //Clear search bar and refocus on it
            LeftSearchTxt.value = '';
            LeftSearchTxt.focus();
        }
    });

    
    //if not done typing restart timer
    LeftSearchTxt.addEventListener('keydown', function (e) {
        clearTimeout(TypingTimer);
    });
}

/**************This will filter the search************** */
function doneTypingSearch() {
    let LeftSearchTagElementArray = document.querySelectorAll('.LeftSearchTag');
    let SearchTagArray = [];

    for (let i = 0; i < LeftSearchTagElementArray.length; i++) {
        if (LeftSearchTagElementArray[i] != null) {
            SearchTagArray.push(LeftSearchTagElementArray[i].getAttribute('tagcontent'));
        }
        else {
            SearchTagArray.push(null);
        }
    }

    AdventureModelOptions.GetFilteredList(SearchTagArray).then(function (Adventures) {
        console.log(Adventures);
    });
   

}

function RightClickAndSwipeListeners(Cardlist) {

    //Listens to Add Button Click
    RightSwipe.addEventListener('click', function () {
        RightSwipeAction(Cardlist);
        setTimeout(function () {  }, 500);
    });

    //Listens to Right Arrow Swipe
    document.addEventListener('keyup', function (e) {
        if (e.keyCode == RightArrow) { //If Right Arrow is pressed
            RightSwipeAction(Cardlist);
        }
    });
}

function LeftClickAndSwipeListeners(Cardlist) {
    LeftSwipe.addEventListener('click', function () {
        LeftSwipeAction(Cardlist);
    });

    //Listens to Right Arrow Swipe
    document.addEventListener('keyup', function (e) {
        if (e.keyCode == LeftArrow) { //If Right Arrow is pressed
            LeftSwipeAction(Cardlist);
        }
    });
}

function UndoSwipeActionListener(Cardlist) {
    RedoSwipe.addEventListener('click', function () {
        UndowSwipeAction(Cardlist)
    });

    //Listens to Right Arrow Swipe
    document.addEventListener('keyup', function (e) {
        if (e.keyCode == DownArrow) { //If Right Arrow is pressed
            UndowSwipeAction(Cardlist)

        }
    });
}

function MoreInfoActionSwipeListener(Cardlist) {
    InfoButton.addEventListener('click', function () {
        MoreInfoAcions(Cardlist);
    });

    //Listens to Right Arrow Swipe
    document.addEventListener('keyup', function (e) {
        if (e.keyCode == UpArrow) { //If Right Arrow is pressed
            e.preventDefault();
            MoreInfoAcions(Cardlist);

        }
    });
    
}


/*********************Helpers*******************************/
function MoreInfoAcions() {
    let frontCard = document.querySelector('.FrontCard');
    let cardImage = frontCard.getAttribute('cardImage');
    let cardtitle = frontCard.getAttribute('cardtitle');
    let carddescription = frontCard.getAttribute('carddescription');
    let cardlocation = frontCard.getAttribute('cardlocation');
    let cardwebsite = frontCard.getAttribute('cardwebsite');
    let cardtags = frontCard.getAttribute('cardtag').split(',');

    let infoImage = document.getElementById('infoImage');
    let InfoAdventureTitleLbl = document.getElementById('InfoAdventureTitleLbl');
    let infoDescriptionContainer = document.getElementById('infoDescriptionContainer');
    let InfoLocations = document.getElementById('InfoLocations');
    let infoLink = document.getElementById('infoLink');
    let DetailTagWrapper = document.getElementById('InfoDetailTagWrapper');

    infoImage.src = cardImage;
    InfoAdventureTitleLbl.innerHTML = cardtitle;
    infoDescriptionContainer.innerHTML = carddescription;
    InfoLocations.innerHTML = cardlocation;
    infoLink.href = cardwebsite;
    DetailTagWrapper.innerHTML = '';

    for (let i = 0; i < cardtags.length; i++) {
        if (cardtags[i] != null && cardtags[i] != '') {

            let tag = `<li class="tagItemContainer tagTitle DetailTagItemIcon" tagcontent="${cardtags[i]}">${cardtags[i]}<i class="fa fa-tags CategoryListIcons TagItemIcon"></i></li>`
            DetailTagWrapper.insertAdjacentHTML('afterbegin', tag);
        }
    }

    


    $('#InfoAdventureModal').modal('show');
   

}

function RightSwipeAction(Cardlist) {
    //If CurrentCard hit the end of the current deck AND current cardIndex + 100 less than the cards availiable then draw 100 more
    if ((CurrentCardGlobal >= CardDeckLimit) && ((CurrentCardGlobal + DrawMoreCards) < Cardlist.length)) {
        CardDeckLimit = CardDeckLimit + DrawMoreCards;
        DealOutCards(CardDeckLimit, Cardlist)

        //Remove current card element and move the class FrontCard to the next card in the list
/*        console.log(Cardlist[CurrentCardGlobal]);
        console.log("Current Card Index: ", CurrentCardGlobal);*/
        AddAndSwitchToNextCard();
        CurrentCardGlobal++;
       

    }

    else {//Make the limit the amount of cards available cause this is all we can deal out

        if (CurrentCardGlobal == Cardlist.length) {//Tell the user thats all the results
           
            try {
                console.log("Its the very end");
                AddAndSwitchToNextCard();
            } catch (error) {
                console.log("Its the very end");
            }
        }

        else if (CurrentCardGlobal >= CardDeckLimit) {//Last amounts we can deal out.
            CardDeckLimit = Cardlist.length;
            DealOutCards(CardDeckLimit, Cardlist);

            //Remove current card element and move the class FrontCard to the next card in the list
/*            console.log(Cardlist[CurrentCardGlobal]);
            console.log(CurrentCardGlobal);*/
            AddAndSwitchToNextCard();
            CurrentCardGlobal++;
            

        }
        else {
          
/*            console.log(Cardlist[CurrentCardGlobal]);
            console.log(CurrentCardGlobal);*/
              //Remove current card element and move the class FrontCard to the next card in the list
            AddAndSwitchToNextCard();
            CurrentCardGlobal++;
            

        }

    }
}

function AddAndSwitchToNextCard() {
    let CardList = document.querySelectorAll('.card');
    CardModelOptions.rightSwipeAnimation(CardList);

}

function LeftSwipeAction(Cardlist) {
    //If CurrentCard hit the end of the current deck AND current cardIndex + 100 less than the cards availiable then draw 100 more
    if ((CurrentCardGlobal >= CardDeckLimit) && ((CurrentCardGlobal + DrawMoreCards) < Cardlist.length)) {
        CardDeckLimit = CardDeckLimit + DrawMoreCards;
        DealOutCards(CardDeckLimit, Cardlist)

        //Remove current card element and move the class FrontCard to the next card in the list
        /*        console.log(Cardlist[CurrentCardGlobal]);
                console.log("Current Card Index: ", CurrentCardGlobal);*/
        SwitchToNextCard();
        CurrentCardGlobal++;

    }

    else {//Make the limit the amount of cards available cause this is all we can deal out

        if (CurrentCardGlobal == Cardlist.length) {//Tell the user thats all the results

            try {
                console.log("Its the very end");
                SwitchToNextCard();
            } catch (error) {
                console.log("Its the very end");
            }



        }

        else if (CurrentCardGlobal >= CardDeckLimit) {//Last amounts we can deal out.
            CardDeckLimit = Cardlist.length;
            DealOutCards(CardDeckLimit, Cardlist);

            //Remove current card element and move the class FrontCard to the next card in the list
            /*            console.log(Cardlist[CurrentCardGlobal]);
                        console.log(CurrentCardGlobal);*/
            SwitchToNextCard();
            CurrentCardGlobal++;

        }
        else {

            /*            console.log(Cardlist[CurrentCardGlobal]);
                        console.log(CurrentCardGlobal);*/
            //Remove current card element and move the class FrontCard to the next card in the list
            SwitchToNextCard();
            CurrentCardGlobal++;

        }

    }
}

function SwitchToNextCard() {
    let CardList = document.querySelectorAll('.card');
    CardModelOptions.LeftSwipeAnimation(CardList);

}

function UndowSwipeAction(Cardlist) {
    if (CurrentCardGlobal <= 0) {//Its the beginning

        try {
            console.log("Its the very Beginning");
            CurrentCardGlobal = 0;

        } catch (error) {
            CurrentCardGlobal = 0;
            console.log("Its the very Beginning");
        }

    }
    else {
        //Remove current card element and move the class FrontCard to the next card in the list
        CurrentCardGlobal =  CurrentCardGlobal - 1;
        //CardModelOptions.RenderCardAfterBegin(Cardlist[CurrentCardGlobal - 1], cardInfoHolder);
        let CardList = document.querySelectorAll('.card');
        CardModelOptions.UndoSwipeAnimation(CardList);
        DealOutCards(CardDeckLimit, Cardlist)
    }
}






function DealOutCards(CardDeckLimit, CardDeckList) {
    //Shuffling the cards and Dealing them out
    if (CardDeckLimit < CardDeckList.length) {//Deal out till CardDeckLimit is hit
        for (let i = CurrentCardGlobal; i < CardDeckLimit; i++) {
            CardModelOptions.RenderCardBeforeEnd(CardDeckList[i], cardInfoHolder);
        }
    }
    else {//Means Card limit is less than CardDeckLimit so ether there isn't a lot of cards, or we are near the end of the deck
        for (let i = CurrentCardGlobal; i < CardDeckList.length; i++) {
            CardModelOptions.RenderCardBeforeEnd(CardDeckList[i], cardInfoHolder);
        }
    }

    //Attach Front and Back Cards so that only one card is shown
    let CardList = document.querySelectorAll('.card');
    CardModelOptions.attachFrontAndBackCards(CardList);
    
}