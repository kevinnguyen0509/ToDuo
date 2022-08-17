let baseUrl = document.getElementById('HiddenCurrentUrl').value;

export class MyRightSwipesModel {
    constructor() {

    }

    async GetUsersRightSwipeAdventures() {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/GetUsersRightSwipeAdventures',
            success: function (Adventures) {
                return Adventures;
            }
        });
        return result;
    }

    async GETInnerCirlceAdventureMatches() {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/GETInnerCirlceAdventureMatches',
            success: function (Adventures) {
                return Adventures;
            }
        });
        return result;
    }

    async GetInnerCircleAdventureUserMatches(AdventureID) {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/GetInnerCircleAdventureUserMatches',
            data: { AdventureID },
            success: function (User) {
                return User;
            }
        });
        return result;
    }
}