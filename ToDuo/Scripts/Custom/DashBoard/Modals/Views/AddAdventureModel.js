import { FormValidation } from '../../../Validation/FormValidation.js'
import { AdventureModel } from '../Model/AdventureModel.js'

//<img src="https://hidden-spire-05318.herokuapp.com/img/assets/cooking.jpg" class="BannerImages"/>
/*let AddAdventureDescriptionTxt = document.getElementById('AddAdventureDescriptionTxt');
let AddAdventureTagsTxt = document.getElementById('AddAdventureTagsTxt');
let AddAdventureWebsiteTxt = document.getElementById('AddAdventureWebsiteTxt');*/
//Classes
const FormValidationOptions = new FormValidation();
const AdventureModelOptions = new AdventureModel();


//Image Uploader Elements
//var uploadedImageURI = null; Used Later for the drag and drop
const ImageDropArea = document.getElementById('ModalDragAndDropImageContainer')
let TagsArray = [];


/***********Main Class**************/
$(document).ready(function () {
    attachSaveAddAdventureListener();//When save button is clicked
    //attachDragAndDropAddAdventureListener();
    attachDragAndDropModalIconListener();
    attachImageUrlListener();
    CreateTagFeedback();
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
                    AdventureModelOptions.resetAdventureForm();
                    $('#AddAdventureModal').modal('toggle');
                    tagString = '';
                    TagsArray = [];
                }
            })
            //Clear Adventure Form

        }
    });
}

function CreateTagFeedback() {
    let AddAdventureTagsTxt = document.getElementById('AddAdventureTagsTxt');
    let TagWrapperContainer = document.getElementById('TagWrapper');
    
    
    AddAdventureTagsTxt.addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            TagsArray.push(AddAdventureTagsTxt.value);
            TagWrapperContainer.innerHTML = '';
            AddAdventureTagsTxt.value = '';
            for (let i = 0; i < TagsArray.length; i++) {
                let tag = `<li class="tagItemContainer tagTitle">${TagsArray[i]}  <i class="fa fa-tags CategoryListIcons TagItemIcon"></i></li>`;
                if (TagsArray[i] != '')
                    TagWrapperContainer.insertAdjacentHTML('beforeend', tag);
            }
            


        }
        
        

    })
}

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