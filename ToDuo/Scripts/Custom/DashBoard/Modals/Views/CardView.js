import { AdventureModel } from '../Model/AdventureModel.js'
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
let RightArrow = 39;
let LeftArrow = 37;
let DownArrow = 40;
let UpArrow = 38;

$(document).ready(function () {
    RenderShuffledAdventureCards();

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

       console.log(ShuffledAdventures);

        
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




/*********************Helpers*******************************/

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