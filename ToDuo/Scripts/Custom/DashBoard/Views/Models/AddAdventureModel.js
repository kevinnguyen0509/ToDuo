
//Button Elements
let SaveAdventuresBtn = document.getElementById('SaveAdventuresBtn');

//Image Uploader Elements
const ImageDropArea = document.getElementById('ModalDragAndDropImageContainer')
var uploadedImage;


$(document).ready(function () {
    attachSaveAddAdventureListener();
    attachDragAndDropAddAdventureListener();
});

function attachSaveAddAdventureListener() {
    SaveAdventuresBtn.addEventListener('click', function () {

        //Get Model Text Box Elemetns 
        let AddAdventureTitleTxt = document.getElementById('AddAdventureTitleTxt');
        let AddAdventureDescriptionTxt = document.getElementById('AddAdventureDescriptionTxt');
        let AddAdventureLocationTxt = document.getElementById('AddAdventureLocationTxt');
        let AddAdventureTagsTxt = document.getElementById('AddAdventureTagsTxt');
        let AddAdventureImageTxt = document.getElementById('AddAdventureImageTxt');


        console.log(AddAdventureTitleTxt.value, AddAdventureDescriptionTxt.value, AddAdventureLocationTxt.value,
            AddAdventureTagsTxt.value, AddAdventureImageTxt.value);
    });
}


function attachDragAndDropAddAdventureListener() {
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

        const fileList = event.dataTransfer.files;
        /*document.querySelector("#AddAdventureImageTxt").value = fileList[0].name;*/
        readImage(fileList[0]);
    });
}



function readImage(file){
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        uploadedImage = event.target.result;
        document.querySelector("#ModalDragAndDropImageContainer").style.backgroundImage = `url(${uploadedImage})`;
        console.log(uploadedImage)
    });
    reader.readAsDataURL(file);
}