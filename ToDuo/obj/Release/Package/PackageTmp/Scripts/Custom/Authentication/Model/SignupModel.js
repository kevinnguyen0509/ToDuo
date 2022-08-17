let baseUrl = document.getElementById('HiddenCurrentUrl').value;

export class SignupModel {
    constructor() {

    }

    //Logs user in if password and email is correct
    async CreateUser(form) {
        const result =
            await $.ajax({
                type: 'POST',
                url: baseUrl + 'Authentication/SignUserUp',
                data: $(form).serialize(),
                success: function (successMessage) {
                    return successMessage;
                }
            });
        return result;
    }
}