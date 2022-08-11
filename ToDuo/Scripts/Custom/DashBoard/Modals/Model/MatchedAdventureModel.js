
export class MatchedAdventureModel {
    constructor() {

    }
    ShowMatchedAdventure(UserMatchAdventuresModelList) {
        let MatchBannerContainer = document.getElementById('MatchBannerContainer');
        let MatchAdventurePicture = document.getElementById('MatchAdventurePicture');
        let MatchTitleLbl = document.getElementById('MatchTitleLbl');
        let MatchFriendContainer = document.getElementById('MatchFriendContainer');

        MatchAdventurePicture.src = UserMatchAdventuresModelList[0].Image;
        MatchTitleLbl.innerText = UserMatchAdventuresModelList[0].AdventureTitle
        CreateMatchFriendContainer(UserMatchAdventuresModelList, MatchFriendContainer);
        MatchBannerContainer.classList.remove('hide');
    }
}


function CreateMatchFriendContainer(UserMatchAdventuresModelList, MatchFriendContainer) {
    MatchFriendContainer.innerHTML = ''
    for (let i = 0; i < UserMatchAdventuresModelList.length; i++) {
        let FriendCard = `<div class="ImgHeaderContainer ProfilePictureContainer MatchPictureContainer MatchFriendImageContainer" data-toggle="tooltip" data-placement="top" title="${UserMatchAdventuresModelList[i].Firstname} ${UserMatchAdventuresModelList[i].LastName}">
                            <img src="/Content/Images/AppImages/NoProfilePicture.jpg" class="BannerImages ProfilePicture" />
                        </div>`;
        MatchFriendContainer.insertAdjacentHTML('afterbegin', FriendCard)
    }
}