import { AdventureModel } from '../Model/AdventureModel.js'
import { CardModel } from '../Model/CardModel.js'

//GlobalVariables
let CardDeckLimit = 100; //Amount of Cards first dealt out. It will increase every time this limit gets hit
const DrawMoreCards = 100; //Amount to increase by when Card DeckLimit is hit
let CurrentCard = 0;//Current Index in card deck

//Classes
let AdventureModelOptions = new AdventureModel();
let CardModelOptions = new CardModel();

//Elements
let cardInfoHolder = document.getElementById('cardInfoHolder')

//Buttons
let RightSwipe = document.getElementById('RightSwipe');

$(document).ready(function () {
    RenderShuffledAdventureCards();

});


/*********************Functions*******************************/
function RenderShuffledAdventureCards(){
   AdventureModelOptions.GetShuffledAdventures().then(function (ShuffledAdventures) {

       DealOutCards(CurrentCard, CardDeckLimit, ShuffledAdventures);//Deals out a set of cards.
       CurrentCard++; //After rendering you HAVE to change the global current Card position by 1 otherwise the first click won't move to the next card
       AddRightSwipe(CurrentCard, CardDeckLimit, ShuffledAdventures);
       console.log(ShuffledAdventures);
        
    });
}

/*********************Helpers*******************************/

function AddRightSwipe(CurrentCard, CardDeckLimit, Cardlist) {
    //Right Swipe Feature
    RightSwipe.addEventListener('click', function () {
        //If CurrentCard hit the end of the current deck AND current cardIndex + 100 less than the cards availiable then draw 100 more
        if ((CurrentCard >= CardDeckLimit) && ((CurrentCard + DrawMoreCards) < Cardlist.length)) {
            CardDeckLimit = CardDeckLimit + DrawMoreCards;
            DealOutCards(CurrentCard, CardDeckLimit, Cardlist)

            //Remove current card element and move the class FrontCard to the next card in the list
            console.log(Cardlist[CurrentCard]);
            console.log("Current Card Index: ", CurrentCard);
            CurrentCard++;
        }

        else {//Make the limit the amount of cards available cause this is all we can deal out

            if (CurrentCard >= Cardlist.length) {//Tell the user thats all the results
                console.log("Its the very end");
            }

            else if (CurrentCard >= CardDeckLimit) {//Last amounts we can deal out. 
                CardDeckLimit = Cardlist.length;
                DealOutCards(CurrentCard, CardDeckLimit, Cardlist);

                //Remove current card element and move the class FrontCard to the next card in the list
                console.log(Cardlist[CurrentCard]);
                console.log(CurrentCard);
                CurrentCard++;
            }
            else {
                //Remove current card element and move the class FrontCard to the next card in the list
                console.log(Cardlist[CurrentCard]);
                console.log(CurrentCard);

                CurrentCard++;
            }

        }

    })
}

function DealOutCards(CurrentCard, CardDeckLimit, CardDeckList) {
    //Shuffling the cards and Dealing them out
    if (CardDeckLimit < CardDeckList.length) {//Deal out till CardDeckLimit is hit
        for (let i = CurrentCard; i < CardDeckLimit; i++) {
            CardModelOptions.RenderCard(CardDeckList[i], cardInfoHolder);
        }
    }
    else {//Means Card limit is less than CardDeckLimit so ether there isn't a lot of cards, or we are near the end of the deck
        for (let i = CurrentCard; i < CardDeckList.length; i++) {
            CardModelOptions.RenderCard(CardDeckList[i], cardInfoHolder);
        }
    }

    //Attach Front and Back Cards so that only one card is shown
    let CardList = document.querySelectorAll('.card');
    CardModelOptions.attachFrontAndBackCards(CardList);
    
}