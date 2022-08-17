import { MyRightSwipesModel } from '../Model/MyRightSwipes.js'
import { StringFormatter } from '../../Validation/StringFormatter.js'
import { AddRecentlyAddedListener } from '../../DashBoard/Modals/Views/AddAdventureModel.js'
import { AdventureModel } from '../../DashBoard/Modals/Model/AdventureModel.js'
import { FormValidation } from '../../Validation/FormValidation.js'

let MyRightSwipesModelOptions = new MyRightSwipesModel();
let StringFormatterOptions = new StringFormatter();
const AdventureModelOptions = new AdventureModel();
const FormValidationOptions = new FormValidation();

let baseUrl = document.getElementById('HiddenCurrentUrl').value;
let LikedSwipeLeftMenutChoice = document.getElementById('LikedSwipeLeftMenutChoice')

let AdventureCardsBeingShown = 20;

$(document).ready(function () {
    AttachMyLikedSwipeListener();
    attachEditAdventureListener();

});



function AttachMyLikedSwipeListener() {
    LikedSwipeLeftMenutChoice.addEventListener('click', LikedSwipeListenerAction);
}


//Listeners
function LikedSwipeListenerAction() {
    //Change the MiddleSectionContent to Show All User's Liked Swipes
    $('#MiddleSectionContent').load(baseUrl + 'Home/MyLikedSwipes', null, function () {
        GetUsersRightSwipeAdventures();
    });
    
}

function GetUsersRightSwipeAdventures() {
    let GetRightSwipes = MyRightSwipesModelOptions.GetUsersRightSwipeAdventures();
    let LikeSwipeContainer = document.getElementById('LikeSwipeContainer');
    GetRightSwipes.then(function (Adventures) {
        for (let i = 0; i < AdventureCardsBeingShown; i++) {
            LikeSwipeContainer.insertAdjacentHTML('beforeend', CreateCard(Adventures[i]));
        }

        LikeSwipeContainer.onscroll = function (ev) {

            if ((LikeSwipeContainer.scrollHeight - LikeSwipeContainer.scrollTop) <= LikeSwipeContainer.clientHeight + 5) {
                let CardMaxIndex = AdventureCardsBeingShown + 20 < Adventures.length ? AdventureCardsBeingShown + 20 : Adventures.length;
                for (let i = AdventureCardsBeingShown; i < CardMaxIndex; i++) {
                    LikeSwipeContainer.insertAdjacentHTML('beforeend', CreateCard(Adventures[i]));
                }

                AdventureCardsBeingShown = CardMaxIndex;
                AddRecentlyAddedListener();
            }
        }

        AddRecentlyAddedListener();

    })
}

//Card
function CreateCard(CurrentAdventure) {


    let Seconds = StringFormatterOptions.GetSecondsFromJavascriptDateFormat(CurrentAdventure.CreatedDate);
    let NormalDate = StringFormatterOptions.ConvertSecondsIntoNormalDate(Seconds);
    let Date = StringFormatterOptions.SplitNormalDateIntoJustDate(NormalDate);

    let CurrentAdventureCard = `<div class="xs-col-12 sm-col-6 col-md-3 defaultBoxShadow AllMyAdventureCards RecentlyAddedItem" itemid="${CurrentAdventure.ID}" ownerid="${CurrentAdventure.OwnerID}" title="${CurrentAdventure.Title}" Imageurl="${CurrentAdventure.ImageURL}"
         description="${CurrentAdventure.Description}" websiteurl="${CurrentAdventure.WebsiteUrl}" createdDate="${Date}" location="${CurrentAdventure.Location}"
         tags ="${CurrentAdventure.Tags}" data-toggle="modal" data-target="#DetailsAdventureModal">
        <img class="card-img-top BannerImages" src="${CurrentAdventure.ImageURL}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-text">${CurrentAdventure.Title}</h5>
            <h6 class="card-text-Time"><i class="fa fa-calendar calendarIcon"></i>${Date}</h6>
        </div>
    </div>`

    return CurrentAdventureCard;
}


//Creates a Save listener to save to new adventure to the database
function attachEditAdventureListener() {

    //Button Elements
    let DetailsAdventureForm = document.getElementById('DetailsAdventureForm');

    DetailsAdventureForm.addEventListener('submit', function (e) {
        e.preventDefault();

        //Get Model Text Box Elements that shouldn't be blank
        let ItemID = document.getElementById('DetailSaveAdventuresBtn').getAttribute('itemid');
        let AddAdventureTitleTxt = document.getElementById('DetailAddAdventureTitleTxt');
        let AddAdventureLocationTxt = document.getElementById('DetailAddAdventureLocationTxt');
        let AddAdventureImageTxt = document.getElementById('DetailAddAdventureImageTxt');
        let AddAdventureTagsTxt = document.getElementById('DetailAddAdventureTagsTxt');
        let tags = document.querySelectorAll('.DetailTagItemIcon');
        let TagsArray = [];

        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureTitleTxt);
        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureImageTxt);
        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureLocationTxt);

        let TitleEmpty = FormValidationOptions.TextBoxIsEmpty(AddAdventureTitleTxt);
        let LocationEmpty = FormValidationOptions.TextBoxIsEmpty(AddAdventureLocationTxt);
        let AdventureImageEmpty = FormValidationOptions.TextBoxIsEmpty(AddAdventureLocationTxt);

        tags.forEach(tag => TagsArray.push(tag.getAttribute('tagcontent')))

        if (!TitleEmpty && !LocationEmpty && !AdventureImageEmpty) {
            let tagString = '';
            for (let i = 0; i < TagsArray.length; i++) {
                if (TagsArray[i] != null && TagsArray[i] != '') {
                    tagString = tagString + ',' + TagsArray[i]
                }
            }
            AddAdventureTagsTxt.value = tagString;
            AdventureModelOptions.UpdateAdventure(DetailsAdventureForm, ItemID).then(function (resultMessage) {
                if (resultMessage.ReturnStatus == 'Success') {                
                    $('#DetailsAdventureModal').modal('hide');
                    LikedSwipeListenerAction();
                    tagString = ''; //Erases tags stored in string that was sent off
                    TagsArray = [];//Erases old tags from last save
                }
            });

        }
    });
}