let baseUrl = document.getElementById('HiddenCurrentUrl').value;

export class LoginModel {
    constructor() {

    }

    //Logs user in if password and email is correct
   async AuthenticateUser(Email, Password) {
       const result =
           await $.ajax({
                type: 'POST',
                url: baseUrl + 'Authentication/LoginVerification',
                data: { Email, Password },
                success: function (successMessage) {
                    return successMessage;
                }
            });
       return result;
    }
}