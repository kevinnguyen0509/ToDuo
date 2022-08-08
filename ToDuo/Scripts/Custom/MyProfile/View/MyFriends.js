
let AddSomeoneSlotClicked;
let friendidclicked;

$(document).ready(function () {
    attachAddSomeoneListeners();
    attachModalListeners();
});

//This Attaches the slot clicked on listener
function attachAddSomeoneListeners() {
    let friendAddBtns = $('.friendAddBtn');
    for (let i = 0; i < friendAddBtns.length; i++) {
        friendAddBtns[i].addEventListener('click', function () {
            AddSomeoneSlotClicked = friendAddBtns[i].getAttribute('currentfriendPostion');
            console.log('Slot Position', AddSomeoneSlotClicked);
        })       
    }
    
}

//This figures out which slot you are adding a friend to.
function attachModalListeners() {
    let ModalFriendAddBtn = $('.ModalFriendAddBtn');
    for (let i = 0; i < ModalFriendAddBtn.length; i++) {
        ModalFriendAddBtn[i].addEventListener('click', function () {
            friendidclicked = ModalFriendAddBtn[i].getAttribute('friendid');
            let friendAddBtns = $('.friendAddBtn');
            let NewFriendArray = [];

            for (let i = 0; i < friendAddBtns.length; i++) {
                if (friendAddBtns[i].getAttribute('friendid') == -1) {
                    NewFriendArray.push(null);
                }
                else {
                    NewFriendArray.push(friendAddBtns[i].getAttribute('friendid'))
                }
                
            }

            for (let i = 0; i < friendAddBtns.length; i++) {               
                if (i == AddSomeoneSlotClicked) {
                    NewFriendArray[i] = friendidclicked;
                }
            }
            console.log(NewFriendArray)

            


        });       
    }

    
}