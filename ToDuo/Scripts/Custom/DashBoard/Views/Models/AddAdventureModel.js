﻿import { FormValidation } from '../../../Validation/FormValidation.js'

//<img src="https://hidden-spire-05318.herokuapp.com/img/assets/cooking.jpg" class="BannerImages"/>

//Classes
const FormValidationOptions = new FormValidation();

//Button Elements
let SaveAdventuresBtn = document.getElementById('SaveAdventuresBtn');

//Image Uploader Elements
//var uploadedImageURI = null; Used Later for the drag and drop
const ImageDropArea = document.getElementById('ModalDragAndDropImageContainer')



/***********Main Class**************/
$(document).ready(function () {
    attachSaveAddAdventureListener();//When save button is clicked
    //attachDragAndDropAddAdventureListener();
    attachDragAndDropModalIconListener();
    attachImageUrlListener();
});



/*********************Functions***************************/

//Creates a Save listener to save to new adventure to the database
function attachSaveAddAdventureListener() {
    SaveAdventuresBtn.addEventListener('click', function () {

        //Get Model Text Box Elemetns 
        let AddAdventureTitleTxt = document.getElementById('AddAdventureTitleTxt');
        let AddAdventureDescriptionTxt = document.getElementById('AddAdventureDescriptionTxt');
        let AddAdventureLocationTxt = document.getElementById('AddAdventureLocationTxt');
        let AddAdventureTagsTxt = document.getElementById('AddAdventureTagsTxt');
        let AddAdventureWebsiteTxt = document.getElementById('AddAdventureWebsiteTxt');
        let AddAdventureImageTxt = document.getElementById('AddAdventureImageTxt');

        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureTitleTxt);
        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureImageTxt);
        FormValidationOptions.CheckIfTextboxIsEmpty(AddAdventureLocationTxt);

    });
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