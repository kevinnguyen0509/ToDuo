export class FormValidation{
    constructor() {

    }

    TextBoxIsEmpty(TextBoxElement) {
        let textBoxValue = TextBoxElement.value;
        if (textBoxValue == null || textBoxValue == '') {
            return true;
        } else {
            return false;
        }
    }

    CheckIfTextboxIsEmpty(TextBoxElement) {
        if (this.TextBoxIsEmpty(TextBoxElement)) {
            this.AddEmptyBoxError(TextBoxElement);
        } else {
            this.RemoveEmptyBoxError(TextBoxElement);
        }
    }

    AddEmptyBoxError(TextBoxElement) {
        TextBoxElement.classList.add('ErrorEmptyTxt');
    }

    RemoveEmptyBoxError(TextBoxElement) {
        TextBoxElement.classList.remove('ErrorEmptyTxt');
    }

}