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

    async saveAdventureScraperModel(Model) {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/AddAdventureScraper',
            data: Model,
            success: function (ResultMessage) {
                return ResultMessage;
            }
        });
        return result;
    }

    async saveSwipeAdventure(ID) {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/AddSwipeAdventure',
            data: { ID },
            success: function (ResultMessage) {
                return ResultMessage;
            }
        });
        return result;
    }

    async UpdateAdventure(form, ItemID) {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/UpdateAdventure',
            data: $(form).serialize() + `&AdventureID=${ItemID}`,
            success: function (ResultMessage) {
                return ResultMessage;
            }
        });
        return result;
    }

    async GetShuffledAdventures() {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/GetShuffledAdventure',
            success: function (Adventures) {
                return Adventures;
            }
        });
        return result;
    }

    async GetFilteredList(TagArray) {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/GetFilteredList',
            data: { TagArray },
            success: function (Adventures) {
                return Adventures;
            }
        });
        return result;
    }

    async GetFilteredListWithLocation(TagArray, Location) {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/GetFilteredListWithLocation',
            data: { TagArray, Location },
            success: function (Adventures) {
                return Adventures;
            }
        });
        return result;
    }

    async GetInnerCircleAdventureMatches(AdventureID) {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/GetInnerCircleAdventureMatches',
            data: { AdventureID },
            success: function (UserMatchAdventuresModelList) {
                return UserMatchAdventuresModelList;
            }
        });
        return result;
    }

    async GetAdventures() {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/GetAdventure',
            success: function (Adventures) {
                return Adventures;
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