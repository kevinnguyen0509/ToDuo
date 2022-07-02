import { SignupModel } from '../Model/SignupModel.js'

//Classes
let SignUpOptions = new SignupModel();

//Elements
let SignupForm = document.getElementById('SignupForm');

$(document).ready(function () {

    CreateUserListener();
});


function CreateUserListener() {
   
    SignupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        SignUpOptions.CreateUser(SignupForm).then(function (ResultMessage) {
            if (ResultMessage.ReturnStatus == 'Success') {
                location.href = '/';
            }
            else {
                alert(ResultMessage.ReturnMessage);
            }
        });
    });

}