import { FormValidation } from '../../../Validation/FormValidation.js'
import { AdventureModel } from '../Model/AdventureModel.js'

//<img src="https://hidden-spire-05318.herokuapp.com/img/assets/cooking.jpg" class="BannerImages"/>
/*let AddAdventureDescriptionTxt = document.getElementById('AddAdventureDescriptionTxt');
let AddAdventureTagsTxt = document.getElementById('AddAdventureTagsTxt');
let AddAdventureWebsiteTxt = document.getElementById('AddAdventureWebsiteTxt');*/
window.alert = function () { };
let baseUrl = document.getElementById('HiddenCurrentUrl').value;

//Classes
const FormValidationOptions = new FormValidation();
const AdventureModelOptions = new AdventureModel();


//Image Uploader Elements
//var uploadedImageURI = null; Used Later for the drag and drop
const ImageDropArea = document.getElementById('ModalDragAndDropImageContainer')
const DetailImageDropArea = document.getElementById('ModalDetailDragAndDropImageContainer')
let TagsArray = [];


/***********Main Class**************/
$(document).ready(function () {
    AddRecentlyAddedListener();
    attachSaveAddAdventureListener();//When save button is clicked
    attachEditAdventureListener();    
    attachDragAndDropModalIconListener();
    attachImageUrlListener();
    CreateTagFeedback();
    CreateNewAdventureBtnListener();

    //attachDragAndDropAddAdventureListener();
    
});



/*********************Functions***************************/

//Creates a Save listener to save to new adventure to the database
function attachSaveAddAdventureListener() {

    //Button Elements
    let AdventureForm = document.getElementById('AdventureForm');

    AdventureForm.addEventListener('submit', function (e) {
        e.preventDefault();

        //Get Model Text Box Elements that shouldn't be blank
        let AddAdventureTitleTxt = document.getElementById('AddAdventureTitleTxt');     
        let AddAdventureLocationTxt = document.getElementById('AddAdventureLocationTxt');
        let AddAdventureImageTxt = document.getElementById('AddAdventureImageTxt');
        let AddAdventureTagsTxt = document.getElementById('AddAdventureTagsTxt');

        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureTitleTxt);
        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureImageTxt);
        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureLocationTxt);

        let TitleEmpty = FormValidationOptions.TextBoxIsEmpty(AddAdventureTitleTxt);
        let LocationEmpty = FormValidationOptions.TextBoxIsEmpty(AddAdventureLocationTxt);
        let AdventureImageEmpty = FormValidationOptions.TextBoxIsEmpty(AddAdventureLocationTxt);

        if (!TitleEmpty && !LocationEmpty && !AdventureImageEmpty) {
            let tagString = '';
            for (let i = 0; i < TagsArray.length; i++) {
                if (TagsArray[i] != null && TagsArray[i] != '') {
                    tagString = tagString + ',' + TagsArray[i]
                }         
            }
            AddAdventureTagsTxt.value = tagString;
            AdventureModelOptions.saveAdventure(AdventureForm).then(function (resultMessage) {
                if (resultMessage.ReturnStatus == 'Success') {
                    //Update Recently Added List
                    $("#RecentlyAddedContainer").load(baseUrl + 'Home/_LeftSideRecentlyAdded', function () {
                        AddRecentlyAddedListener();
                    });
                    AdventureModelOptions.resetAdventureForm();
                    $('#AddAdventureModal').modal('toggle');
                    tagString = ''; //Erases tags stored in string that was sent off
                    TagsArray = [];//Erases old tags from last save
                }
            });

        }
    });
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

        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureTitleTxt);
        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureImageTxt);
        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureLocationTxt);

        let TitleEmpty = FormValidationOptions.TextBoxIsEmpty(AddAdventureTitleTxt);
        let LocationEmpty = FormValidationOptions.TextBoxIsEmpty(AddAdventureLocationTxt);
        let AdventureImageEmpty = FormValidationOptions.TextBoxIsEmpty(AddAdventureLocationTxt);

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
                    //Update Recently Added List
                    $("#RecentlyAddedContainer").load(baseUrl + 'Home/_LeftSideRecentlyAdded', function () {
                        AddRecentlyAddedListener();
                    });

                    $('#DetailsAdventureModal').modal('toggle');
                    tagString = ''; //Erases tags stored in string that was sent off
                    TagsArray = [];//Erases old tags from last save
                }
            });

        }
    });
}



export function AddRecentlyAddedListener() {
    let RecentlyAddedImgContainer = document.querySelectorAll('.RecentlyAddedItem');
    for (let i = 0; i < RecentlyAddedImgContainer.length; i++) {
        RecentlyAddedImgContainer[i].addEventListener('click', function () {
            TagsArray = [];
            
            let DetailSaveAdventuresBtn = document.getElementById('DetailSaveAdventuresBtn');
            let ItemID = RecentlyAddedImgContainer[i].getAttribute('itemid');      
            let ownerid = RecentlyAddedImgContainer[i].getAttribute('ownerid');
            let title = RecentlyAddedImgContainer[i].getAttribute('title');
            let Imageurl = RecentlyAddedImgContainer[i].getAttribute('Imageurl');
            let description = RecentlyAddedImgContainer[i].getAttribute('description');
            let websiteurl = RecentlyAddedImgContainer[i].getAttribute('websiteurl');
            let createdDate = RecentlyAddedImgContainer[i].getAttribute('createdDate');
            let location = RecentlyAddedImgContainer[i].getAttribute('location');
            let tags = RecentlyAddedImgContainer[i].getAttribute('tags').split(',');

            //Set Save button to itemID so we can grab it when saving the edit
            DetailSaveAdventuresBtn.setAttribute('itemid', ItemID)

            for (let i = 1; i < tags.length; i++) {
                TagsArray.push(tags[i]);
            }

            document.getElementById('DetailAddAdventureImageTxt').value = Imageurl;
            document.getElementById('DetailAddAdventureTitleTxt').value = title;
            document.getElementById('DetailAddAdventureDescriptionTxt').value = description;
            document.getElementById('DetailAddAdventureWebsiteTxt').value = websiteurl;
            document.getElementById('DetailAddAdventureLocationTxt').value = location;
            document.getElementById('DetailAddAdventureLocationTxt').value = location;
            document.getElementById('DetailAddAdventureTagsTxt').value = '';

            document.getElementById('adventureLink').href = websiteurl;

            ReplaceDetailImageListener(Imageurl);
            AttachDetailsImageURLListener();
            ReCreateDetailTagFeedback();

            let TagIcons = document.querySelectorAll('.DetailTagItemIcon');
            attachTagElementRemover(TagIcons)
        });
    }
}

function CreateNewAdventureBtnListener() {
    let RecentlyAddedDiamond = document.getElementById('RecentlyAddedDiamond');
    RecentlyAddedDiamond.addEventListener('click', function () {
        TagsArray = [];
    });
}

export function attachTagElementRemover(TagElementList) {
    for (let i = 0; i < TagElementList.length; i++) {
        TagElementList[i].addEventListener('click', function () {
            let elementBeingDeleted = TagElementList[i].getAttribute('tagcontent');
            TagsArray.splice(TagsArray.indexOf(elementBeingDeleted), 1)
            TagElementList[i].remove();          
        });
    }
}

function CreateTagFeedback() {
    let AddAdventureTagsTxt = document.getElementById('AddAdventureTagsTxt');
    let TagWrapperContainer = document.getElementById('TagWrapper');

    //Listens to Enter key being pressed and adds a tag to the TagArray[] to be saved
    AddAdventureTagsTxt.addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            TagsArray.push(AddAdventureTagsTxt.value);
            RecreateTagFeedBack(TagWrapperContainer, AddAdventureTagsTxt); //Rerenders tags feedback when adding tags    
            let TagIcons = document.querySelectorAll('.NewAdventureTagItemIcon');
            attachTagElementRemover(TagIcons);
            
        }
    })
}

export function ReCreateDetailTagFeedback() {
    let DetailAddAdventureTagsTxt = document.getElementById('DetailAddAdventureTagsTxt');
    let DetailTagWrapperContainer = document.getElementById('DetailTagWrapper');
    RecreateDetailsTags(DetailTagWrapperContainer, DetailAddAdventureTagsTxt); //Rerenders tags feedback when adding tags

    //Listens to Enter key being pressed and adds a tag to the TagArray[] to be saved
    DetailAddAdventureTagsTxt.addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            TagsArray.push(DetailAddAdventureTagsTxt.value);
            RecreateDetailsTags(DetailTagWrapperContainer, DetailAddAdventureTagsTxt); //Rerenders tags feedback when adding tags

            let TagIcons = document.querySelectorAll('.DetailTagItemIcon');
            attachTagElementRemover(TagIcons);
            
        }
    })
};

//clicking on photo image will focus the imagetxt
function attachDragAndDropModalIconListener() {
    let DragAndDropModalIcon = document.getElementById('DragAndDropModalIcon');
    let AddAdventureImageTxt = document.getElementById('AddAdventureImageTxt');
    DragAndDropModalIcon.addEventListener('click', function () {
        AddAdventureImageTxt.focus();
    });
}

//Listens for image url to be pasted in to display then displays image on the screen
function attachImageUrlListener() {
    let AddAdventureImageTxt = document.getElementById('AddAdventureImageTxt');
    AddAdventureImageTxt.addEventListener('keyup', function () {
        ImageDropArea.innerHTML = '';
        //document.querySelector("#ModalDragAndDropImageContainer").style.backgroundImage = ``;
        let imageFromAnotherWebsite = `<img src="${AddAdventureImageTxt.value}" class="BannerImages"/>`
        ImageDropArea.insertAdjacentHTML('afterbegin', imageFromAnotherWebsite);
    });
}

export function AttachDetailsImageURLListener() {
    let DetailAddAdventureImageTxt = document.getElementById('DetailAddAdventureImageTxt');
    DetailAddAdventureImageTxt.addEventListener('keyup', function () {
        DetailImageDropArea.innerHTML = '';
        //document.querySelector("#ModalDragAndDropImageContainer").style.backgroundImage = ``;
        let imageFromAnotherWebsite = `<img src="${DetailAddAdventureImageTxt.value}" class="BannerImages"/>`
        DetailImageDropArea.insertAdjacentHTML('afterbegin', imageFromAnotherWebsite);
    });
}

export function ReplaceDetailImageListener(imageurl) {
    DetailImageDropArea.innerHTML = '';
    let imageFromAnotherWebsite = `<img src="${imageurl}" class="BannerImages"/>`
    DetailImageDropArea.insertAdjacentHTML('afterbegin', imageFromAnotherWebsite);

}



/***********Helper Functions***********/

/**
 * This takes the user's entered tag input and renders the tag element as feedback for the user
 * @param {any} TagWrapperContainer - Container that holds all the tag elements/ the Ul
 * @param {any} AddAdventureTagsTxt - The input field users enter the tags
 * Method type: Void
 */
function RecreateTagFeedBack(TagWrapperContainer, AddAdventureTagsTxt) {
    TagWrapperContainer.innerHTML = '';
    AddAdventureTagsTxt.value = '';
    for (let i = 0; i < TagsArray.length; i++) {
        let tag = `<li class="tagItemContainer tagTitle NewAdventureTagItemIcon" tagcontent ="${TagsArray[i]}">${TagsArray[i]}  <i class="fa fa-tags CategoryListIcons TagItemIcon"></i></li>`;
        if (TagsArray[i] != '')
            TagWrapperContainer.insertAdjacentHTML('beforeend', tag);
    }
}


/**
 * This takes the user's entered tag input and renders the tag element as feedback for the user
 * @param {any} TagWrapperContainer - Container that holds all the tag elements/ the Ul
 * @param {any} AddAdventureTagsTxt - The input field users enter the tags
 * Method type: Void
 */
function RecreateDetailsTags(TagWrapperContainer, AddAdventureTagsTxt) {
    TagWrapperContainer.innerHTML = '';
    AddAdventureTagsTxt.value = '';
    for (let i = 0; i < TagsArray.length; i++) {
        let tag = `<li class="tagItemContainer tagTitle DetailTagItemIcon" tagcontent ="${TagsArray[i]}">${TagsArray[i]}  <i class="fa fa-tags CategoryListIcons TagItemIcon"></i></li>`;
        if (TagsArray[i] != '')
            TagWrapperContainer.insertAdjacentHTML('beforeend', tag);
    }
}

/*
 * Used for later. This is the Drag and drop method
 * 
 * function attachDragAndDropAddAdventureListener() {
    ImageDropArea.addEventListener('dragover', function (e) {
        ImageDropArea.innerHTML = '';
        e.stopPropagation();
        e.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    });

    ImageDropArea.addEventListener('drop', function (e) {

        e.stopPropagation();
        e.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
        let AddAdventureImageTxt = document.getElementById('AddAdventureImageTxt');
        AddAdventureImageTxt.value = '';
        const fileList = event.dataTransfer.files;
        *//*document.querySelector("#AddAdventureImageTxt").value = fileList[0].name;*//*
        readImage(fileList[0]);
    });
}


//Reads results as URI
function readImage(file){
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        uploadedImageURI = event.target.result;
        document.querySelector("#ModalDragAndDropImageContainer").style.backgroundImage = `url(${uploadedImageURI})`;
    });
    reader.readAsDataURL(file);
}

*/