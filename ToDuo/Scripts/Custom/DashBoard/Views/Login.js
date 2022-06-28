import { LoginModel } from '../Model/LoginModel.js'

//classes
let LoginModelOptions = new LoginModel();

let LoginForm = document.getElementById('LoginForm');

LoginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let EmailInputTxt = document.getElementById('EmailInputTxt');
    let PasswordInputTxt = document.getElementById('PasswordInputTxt');

    LoginModelOptions.AuthenticateUser(EmailInputTxt.value, PasswordInputTxt.value).then(function(message) {
        if (message == 'Success') {
            location.href = '/';
        }
        else {
            alert('That\'s a big nopes from me dawg')
        }
    });
});