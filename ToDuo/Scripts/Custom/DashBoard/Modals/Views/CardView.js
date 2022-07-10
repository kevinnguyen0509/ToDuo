import { AdventureModel } from '../Model/AdventureModel.js'
import { CardModel } from '../Model/CardModel.js'

//GlobalVariables
let CardDeckLimit = 5; //Amount of Cards first dealt out. It will increase every time this limit gets hit
const DrawMoreCards = 100; //Amount to increase by when Card DeckLimit is hit
let CurrentCard = 1;//Current Index in card deck

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

       DealOutCards(CardDeckLimit, ShuffledAdventures);//Deals out a set of cards.
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
        }
/*        else if (CurrentCard >= CardDeckLimit) {
            consol.
        }*/
        else {//Make the limit the amount of cards available

            if (CurrentCard >= Cardlist.length) {
                console.log("Its the very end");
            }

            else if (CurrentCard >= CardDeckLimit) {
                CardDeckLimit = Cardlist.length;
                DealOutCards(CurrentCard, CardDeckLimit, Cardlist);

                
                console.log(Cardlist[CurrentCard]);
                console.log(CurrentCard);
                CurrentCard++;
            }
            else {
                console.log(Cardlist[CurrentCard]);
                console.log(CurrentCard);
                //console.log(CardDeckLimit);
                CurrentCard++;
            }

        }

    })
}

function DealOutCards(CardDeckLimit, CardDeckList) {
    //Shuffling the cards and Dealing them out
    if (CardDeckLimit < CardDeckList.length) {//Deal out till CardDeckLimit is hit
        for (let i = 0; i < CardDeckLimit; i++) {
            CardModelOptions.RenderCard(CardDeckList[i], cardInfoHolder);
        }
    }
    else {//Means Card limit is less than CardDeckLimit so ether there isn't a lot of cards, or we are near the end of the deck
        for (let i = 0; i < CardDeckList.length; i++) {
            CardModelOptions.RenderCard(CardDeckList[i], cardInfoHolder);
        }
    }

    //Attach Front and Back Cards so that only one card is shown
    let CardList = document.querySelectorAll('.card');
    CardModelOptions.attachFrontAndBackCards(CardList);
}