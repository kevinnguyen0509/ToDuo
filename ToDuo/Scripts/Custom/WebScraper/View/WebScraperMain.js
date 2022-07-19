import { WebScraper } from '../Model/WebScrapeModel.js';


const WebScraperOptions = new WebScraper();

let WebScrapeBtn = document.getElementById('WebScrapeBtn');


WebScrapeBtn.addEventListener('click', scrapeWebsite)


function scrapeWebsite() {
    let websiteInputtxt = document.getElementById('websiteInputtxt');
    WebScraperOptions.ScrapeYelp(websiteInputtxt.value).then(function (Content) {
        console.log(Content);
    });
}

