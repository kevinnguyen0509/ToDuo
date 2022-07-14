import { AdventureModel } from '../Model/AdventureModel.js'
import { AddRecentlyAddedListener } from '../Views/AddAdventureModel.js'


let baseUrl = document.getElementById('HiddenCurrentUrl').value;
let AdventureModelOptions = new AdventureModel();

export class CardModel {
    constructor() {

    }

    RenderCardBeforeEnd(Card, cardInfoHolder) {
        let CardToInsert = CreateCard(Card);
        cardInfoHolder.insertAdjacentHTML('beforeend', CardToInsert);
    }

    RenderCardAfterBegin(Card, cardInfoHolder) {
        let CardToInsert = CreateCard(Card);
        cardInfoHolder.insertAdjacentHTML('afterbegin', CardToInsert);
    }

    attachFrontAndBackCards(CardElementList) {
        for (let i = 0; i < CardElementList.length; i++) {
            if (i == 0)
                CardElementList[i].classList.add('FrontCard');
            else {
                CardElementList[i].classList.add('BackCard');
            }
            
        }
    }

    rightSwipeAnimation(CardList) {
        let ID = CardList[0].getAttribute('cardid') * 1;
        
        AdventureModelOptions.saveSwipeAdventure(ID).then(function (ResultMessage) {
            if (ResultMessage.NewId != -2) { //-2 means its been added before so we don't need to refresh
                //Refresh Recently Added
                $("#RecentlyAddedContainer").load(baseUrl + 'Home/_LeftSideRecentlyAdded', function () {
                    AddRecentlyAddedListener();
                });
            }
            
        });

        CardList[0].classList.remove('FrontCard');
        CardList[0].classList.add('SwipeRightAnimation');
        setTimeout(function () { CardList[0].remove() }, 500);
       
        CardList[1].classList.remove('BackCard');
        CardList[1].classList.add('FrontCard');
    }

    LeftSwipeAnimation(CardList) {

        CardList[0].classList.remove('FrontCard');
        CardList[0].classList.add('SwipeLeftAnimation');
        setTimeout(function () { CardList[0].remove() }, 500);

        CardList[1].classList.remove('BackCard');
        CardList[1].classList.add('FrontCard');
    }

    UndoSwipeAnimation(CardList) {
        for (let i = 0; i < CardList.length; i++) {
            CardList[i].remove();
        }
/*        CardList[1].classList.remove('FrontCard');
        CardList[1].classList.add('SwipeLeftAnimation');
        setTimeout(function () { CardList[1].remove() }, 500);
        CardList[0].classList.add('FrontCard');*/
    }




}


function CreateCard(Card) {
    let CardModel = CreateCardModel(Card);

    let HtmlCardString = `<div class="card" cardid="${CardModel.ID}" cardImage="${CardModel.ImageURL}" cardtitle="${CardModel.Title}" 
                                            carddescription="${CardModel.Description}" cardlocation="${CardModel.Location}" cardwebsite="${CardModel.WebsiteUrl}"
                                            cardtag="${CardModel.Tags}">
                        <img src="${Card.ImageURL}" class="BannerImages swipeImage" />
                        <div id="SwipeTitleContainer" class="SwipeTitleContainer">
                            <h5 id="SwipeTitle" class="noMargins">${CardModel.Title}</h5>
                        </div>

                        <div id="SwipeDetailsContainer" class="SwipeDetailsContainer">
                            <i class="fa fa-map-marker SwipeIcons"> ${CardModel.Location}</i>
                        </div>
                    </div>`

    return HtmlCardString;
}

function CreateCardModel(Card) {
    let CardModel = {
        ID: Card.ID,
        ImageURL: Card.ImageURL,
        Location: Card.Location,
        Description: Card.Description,
        OwnerID: Card.OwnerID,
        Tags: Card.Tags,
        Title: Card.Title,
        WebsiteUrl: Card.WebsiteUrl,

    };
    return CardModel;
}
