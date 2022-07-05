export class FormValidation{
    constructor() {

    }
    //Returns true if empty, else returns false
    TextBoxIsEmpty(TextBoxElement) {
        let textBoxValue = TextBoxElement.value;
        if (textBoxValue == null || textBoxValue == '') {
            return true;
        } else {
            return false;
        }
    }

    //If textbox is empty then it will outline the text box in red, else it removes the red outline
    CheckIfTextboxIsEmpty(TextBoxElement) {
        if (this.TextBoxIsEmpty(TextBoxElement)) {
            this.AddEmptyBoxError(TextBoxElement);
        } else {
            this.RemoveEmptyBoxError(TextBoxElement);
        }
    }

    //Adds Red boarder to inputbox by adding the css '.ErrorEmptyTxt' class
    AddEmptyBoxError(TextBoxElement) {
        TextBoxElement.classList.add('ErrorEmptyTxt');
    }

    //Removes Red boarder to inputbox by adding the css '.ErrorEmptyTxt' class
    RemoveEmptyBoxError(TextBoxElement) {
        TextBoxElement.classList.remove('ErrorEmptyTxt');
    }

}