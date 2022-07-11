let baseUrl = document.getElementById('HiddenCurrentUrl').value;

export class CardModel {
    constructor() {

    }

    RenderCard(Card, cardInfoHolder) {
        let CardToInsert = CreateCard(Card);
        cardInfoHolder.insertAdjacentHTML('beforeend', CardToInsert);
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

        CardList[0].classList.remove('FrontCard');
        CardList[0].classList.add('SwipeRightAnimation');
        setTimeout(function () { CardList[0].remove() }, 500);
       
        CardList[1].classList.remove('BackCard');
        CardList[1].classList.add('FrontCard');
    }



}

function removeCard(CardToRemove) {
    CardToRemove.remove();
}

function CreateCard(Card) {
    let CardModel = CreateCardModel(Card);
 
    let HtmlCardString = `<div class="card">
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
        OwnerID: Card.OwnerID,
        Tags: Card.Tags,
        Title: Card.Title,
        WebsiteUrl: Card.WebsiteUrl,

    };
    return CardModel;
}