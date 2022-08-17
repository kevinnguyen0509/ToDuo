let baseUrl = document.getElementById('HiddenCurrentUrl').value;

export class FriendsModel {
    constructor() {

    }

    async AddFriendToSlot(FriendsArray) {
        const result = await
            $.ajax({
                method: 'POST',
                url: baseUrl + 'Json/AddFriendToSlot',
                data: { FriendsArray },
                success: function (ResultMessage) {
                    return ResultMessage;
                }
            })
        return result

    }
}