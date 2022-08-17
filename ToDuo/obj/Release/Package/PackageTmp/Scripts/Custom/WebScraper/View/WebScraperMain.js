import { WebScraper } from '../Model/WebScrapeModel.js';
import { AdventureModel } from '../../DashBoard/Modals/Model/AdventureModel.js';


const WebScraperOptions = new WebScraper();
const AdventureModelOptions = new AdventureModel();

let passButton = document.getElementById('passButton');
let failedButton = document.getElementById('failedButton');

let ScraperTags = document.getElementById('ScraperTags')
let ScraperTitle = document.getElementById('ScraperTitle')
let ScraperWebsite = document.getElementById('ScraperWebsite')
let ScraperDescription = document.getElementById('ScraperDescription')
let ScraperLocation = document.getElementById('ScraperLocation')
let ScraperImage = document.getElementById('ScraperImage')
let websiteImageTxt = document.getElementById('websiteImageTxt')
let CurrentIndex = 0;

let AdventureArray = WebScraperOptions.getAdventureList();

$(document).ready(function () {


   
    ScraperTitle.value = AdventureArray[CurrentIndex].Title;
    ScraperWebsite.value = AdventureArray[CurrentIndex].WebsiteUrl;
    ScraperWebsite.value = AdventureArray[CurrentIndex].WebsiteUrl;
    ScraperImage.src = AdventureArray[CurrentIndex].ImageURL;
    websiteImageTxt.value = AdventureArray[CurrentIndex].ImageURL;
    ScraperDescription.value = 'No Description'

    passButton.addEventListener('click', addToAdventures)
    failedButton.addEventListener('click', failAdventure)

    console.log(AdventureArray);
});

function addToAdventures() {
    
    if (CurrentIndex > AdventureArray.length + 1) {
        alert('End of the line...')
    }
    else{//Save current
        let AdventureModel = {
            OwnerID: 3,
            Title: document.getElementById('ScraperTitle').value,
            ImageURL: document.getElementById('websiteImageTxt').value,
            Description: document.getElementById('ScraperDescription').value,
            WebsiteUrl: AdventureArray[CurrentIndex].WebsiteUrl,
            Location: document.getElementById('ScraperLocation').value,
            Tags: document.getElementById('ScraperTags').value
        }

        if ((document.getElementById('ScraperTags').value != '') && (document.getElementById('ScraperLocation').value != '')) {

            AdventureModelOptions.saveAdventureScraperModel(AdventureModel)
            CurrentIndex++; //Move to the next one      
            DisplayNextAdventure();
        }
        else {
            alert('Empty Location or tag field')
        }
    }

    
}

function failAdventure() {
    if (CurrentIndex > AdventureArray.length + 1) {
        alert('End of the line...')
    } else {
        CurrentIndex++;
        DisplayNextAdventure();
    }

}

/***************Helpers*********************/
function DisplayNextAdventure() {
    ScraperTitle.value = AdventureArray[CurrentIndex].Title;
    ScraperWebsite.value = AdventureArray[CurrentIndex].WebsiteUrl;
    ScraperWebsite.value = AdventureArray[CurrentIndex].WebsiteUrl;
    ScraperImage.src = AdventureArray[CurrentIndex].ImageURL;
    websiteImageTxt.value = AdventureArray[CurrentIndex].ImageURL;
}