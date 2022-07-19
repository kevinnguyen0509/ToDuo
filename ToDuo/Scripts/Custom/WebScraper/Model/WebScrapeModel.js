let baseUrl = document.getElementById('HiddenCurrentUrl').value;


export class WebScraper {
    constructor() {

    }

    async ScrapeYelp(WebsiteAddress) {
        const result = await $.ajax({
            method: 'POST',
            url: baseUrl + 'Json/GetYelpContent',
            data: { WebsiteAddress },
            success: function (WebsiteContent) {
                return WebsiteContent;
            }
        });
        return result;
    }
}