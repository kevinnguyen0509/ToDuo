let baseUrl = document.getElementById('HiddenCurrentUrl').value;

export class AdventureModel {
    constructor() {
      
    }
    async saveAdventure(form) {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/AddAdventure',
            data: $(form).serialize(),
            success: function (ResultMessage) {
                return ResultMessage;
            }
        });
        return result;
    }

    resetAdventureForm() {
        let AddAdventureTitleTxt = document.getElementById('AddAdventureTitleTxt');
        let AddAdventureDescriptionTxt = document.getElementById('AddAdventureDescriptionTxt');
        let AddAdventureLocationTxt = document.getElementById('AddAdventureLocationTxt');
        let AddAdventureTagsTxt = document.getElementById('AddAdventureTagsTxt');
        let AddAdventureWebsiteTxt = document.getElementById('AddAdventureWebsiteTxt');
        let AddAdventureImageTxt = document.getElementById('AddAdventureImageTxt');
        let ModalDragAndDropImageContainer = document.getElementById('ModalDragAndDropImageContainer');
        let resetImageDropArea = `<i class="fa fa-camera-retro " id="DragAndDropModalIcon" title="Adventure Place Holder"></i>
                                <h4 id="uploadText">Paste Image Address Below!</h4>`
        let TagWrapperContainer = document.getElementById('TagWrapper');
        TagWrapperContainer.innerHTML = '';
        AddAdventureTitleTxt.value = '';
        AddAdventureDescriptionTxt.value = '';
        AddAdventureLocationTxt.value = '';
        AddAdventureTagsTxt.value = '';
        AddAdventureWebsiteTxt.value = '';
        AddAdventureImageTxt.value = '';
        ModalDragAndDropImageContainer.innerHTML = '';
        ModalDragAndDropImageContainer.insertAdjacentHTML('afterbegin', resetImageDropArea);


    }


}