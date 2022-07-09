import { AdventureModel } from '../Model/AdventureModel.js'
import { CardModel } from '../Model/CardModel.js'

//Classes
let AdventureModelOptions = new AdventureModel();
let CardModelOptions = new CardModel();

//Elements
let cardInfoHolder = document.getElementById('cardInfoHolder')

$(document).ready(function () {


    RenderShuffledAdventureCards();
});


/*********************Functions*******************************/
function RenderShuffledAdventureCards(){
    AdventureModelOptions.GetShuffledAdventures().then(function (ShuffledAdventures) {
        for (let i = 0; i < ShuffledAdventures.length; i++) {
            CardModelOptions.RenderCard(ShuffledAdventures[i], cardInfoHolder);
        }
        let CardList = document.querySelectorAll('.card');
        CardModelOptions.attachFrontAndBackCards(CardList);

        console.log(ShuffledAdventures);
    });
}




/*********************Helpers*******************************/