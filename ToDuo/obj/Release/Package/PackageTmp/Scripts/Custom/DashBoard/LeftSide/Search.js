import { doneTypingSearch, doneTypingSearchWithLocation } from '../Modals/Views/CardView.js'

let AllAdventureLbl = document.getElementById('AllAdventureLbl');
let LeftLocationLbl = document.getElementById('LeftLocationLbl');
let LeftLocationIcon = document.getElementById('LeftLocationIcon');
let LeftLocationTextBox = document.getElementById('LeftLocationTextBox');

AllAdventureLbl.addEventListener('click', resetDashboard);
LeftLocationLbl.addEventListener('click', showLocationInputBox);
LeftLocationIcon.addEventListener('click', ResetLocationToNone);
LeftLocationTextBox.addEventListener('keydown', AddOrClearLocation);

function AddOrClearLocation(e) {
    if (e.keyCode == 13) {
        let LeftLocationTextBox = document.getElementById('LeftLocationTextBox');
        if (LeftLocationTextBox.value == '' || LeftLocationTextBox == null) {
            ResetLocationToNone();
        }
        else {
            SetLocationToInput(LeftLocationTextBox.value);
        }
    }

}

function showLocationInputBox() {
    let LeftLocationTextBox = document.getElementById('LeftLocationTextBox');
    LeftLocationTextBox.classList.remove('hide');
    LeftLocationTextBox.focus();
    LeftLocationLbl.classList.add('hide');
}

//Reset the location to default then searches
function ResetLocationToNone() {
    LeftLocationTextBox.value = '';
    LeftLocationTextBox.classList.add('hide');
    LeftLocationLbl.innerText = 'Location';
    LeftLocationLbl.classList.remove('hide');
    doneTypingSearch();
}

function resetDashboard() {
    location.reload();
}


/******************Helpers**********************/
function SetLocationToInput(LocationInput) {
    LeftLocationTextBox.value = '';
    LeftLocationTextBox.classList.add('hide');
    LeftLocationLbl.innerText = LocationInput;
    LeftLocationLbl.classList.remove('hide');
    doneTypingSearchWithLocation();
}