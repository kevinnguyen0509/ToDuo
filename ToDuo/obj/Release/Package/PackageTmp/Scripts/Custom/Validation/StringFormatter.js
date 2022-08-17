
export class StringFormatter {
    constructor() {

    }
    GetSecondsFromJavascriptDateFormat(JavascriptDateString) {
        let TempSplitDate = JavascriptDateString.split('(');
        let splitDate = TempSplitDate[1].split(')')
        let Seconds = splitDate[0]
        return Seconds;
    }

    ConvertSecondsIntoNormalDate(Seconds) {
        let sec = Seconds * 1;
        let normalDate = new Date(sec).toLocaleString('en-US', { timeZone: 'UTC' })
        return normalDate;
    }

    SplitNormalDateIntoJustDate(DateTime) {
        let DateTimeSplit = DateTime.split(',');
        let Date = DateTimeSplit[0];
        return Date;
    }
}