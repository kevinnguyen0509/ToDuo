
//Button Elements
let SaveAdventuresBtn = document.getElementById('SaveAdventuresBtn');

//Image Uploader Elements
const ImageDropArea = document.getElementById('ModalDragAndDropImageContainer')
var uploadedImageURI = null;


$(document).ready(function () {
    attachSaveAddAdventureListener();//When save button is clicked
    attachDragAndDropAddAdventureListener();
});

function attachSaveAddAdventureListener() {
    SaveAdventuresBtn.addEventListener('click', function () {

        //Get Model Text Box Elemetns 
        let AddAdventureTitleTxt = document.getElementById('AddAdventureTitleTxt');
        let AddAdventureDescriptionTxt = document.getElementById('AddAdventureDescriptionTxt');
        let AddAdventureLocationTxt = document.getElementById('AddAdventureLocationTxt');
        let AddAdventureTagsTxt = document.getElementById('AddAdventureTagsTxt');
        

        if ((AddAdventureImageTxt.value.trim() == '' || AddAdventureImageTxt.value.trim() == null) && (uploadedImageURI == '' || uploadedImageURI == null)) {//User did not upload an image
            alert('You need to upload an image.')
        }
        else if (uploadedImageURI == '' || uploadedImageURI == null) {//User tried to upload an img URL link use AddAdventureImageTxt as the image location to save
            let AddAdventureImageTxt = document.getElementById('AddAdventureImageTxt');
            console.log(AddAdventureTitleTxt.value, AddAdventureDescriptionTxt.value, AddAdventureLocationTxt.value,
                AddAdventureTagsTxt.value, AddAdventureImageTxt.value);
        }
        else {//User dragged and dropped use the uploadedImageURI variable as the image location to save
            console.log(AddAdventureTitleTxt.value, AddAdventureDescriptionTxt.value, AddAdventureLocationTxt.value,
                AddAdventureTagsTxt.value, uploadedImageURI);
        }

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
        let AddAdventureImageTxt = document.getElementById('AddAdventureImageTxt');
        AddAdventureImageTxt.value = '';
        const fileList = event.dataTransfer.files;
        /*document.querySelector("#AddAdventureImageTxt").value = fileList[0].name;*/
        readImage(fileList[0]);
    });
}



function readImage(file){
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        uploadedImageURI = event.target.result;
        document.querySelector("#ModalDragAndDropImageContainer").style.backgroundImage = `url(${uploadedImageURI})`;
    });
    reader.readAsDataURL(file);
}