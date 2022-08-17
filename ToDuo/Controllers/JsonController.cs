using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using ToDuo.Models.BaseClasses;
using ToDuo.Models.Models.TableModels;
using ToDuo.Models.Models.Users;
using ToDuo.Models.Users;
using ToDuo.Models.Util;

namespace ToDuo.Controllers
{
    public class JsonController : Controller
    {
        User user = new User();
        // GET: Json
        public JsonResult AddAdventure(AdventureModel AdventureModel)
        {
            User currentUser = user.GetLoggedInUserCookie();
            AdventureModel.OwnerID = currentUser.ID;
            ResultMessage resultMessage = AdventureModel.SaveAdventure(AdventureModel);
            
            return Json(resultMessage, JsonRequestBehavior.AllowGet);
        }
        //This is used only for webscrapes
        public JsonResult AddAdventureScraper(AdventureModel AdventureModel)
        {
            AdventureModel.OwnerID = AdventureModel.OwnerID;
            ResultMessage resultMessage = AdventureModel.SaveAdventure(AdventureModel);

            return Json(resultMessage, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AddSwipeAdventure(int ID)
        {
            AdventureModel AdventureModel = new AdventureModel();            
            ResultMessage resultMessage = AdventureModel.SaveSwipeAdventure(ID);

            return Json(resultMessage, JsonRequestBehavior.AllowGet);
        }

        public JsonResult UpdateAdventure(AdventureModel AdventureModel, int AdventureID)
        {
            AdventureModel.ID = AdventureID;
            ResultMessage resultMessage = AdventureModel.UpdateItem(AdventureModel);

            return Json(resultMessage, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetAdventure()
        {
            AdventureModel adventureModel = new AdventureModel();
            User currentUser = user.GetLoggedInUserCookie();
            int OwnerID = currentUser.ID;
            List<AdventureModel> Adventures = adventureModel.GetList(OwnerID);

            return Json(Adventures, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetShuffledAdventure()
        {
            AdventureModel adventureModel = new AdventureModel();
            List<AdventureModel> Adventures = adventureModel.GetShuffledList();

            return Json(Adventures, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetFilteredList(List<string> TagArray)
        {
            AdventureModel adventureModel = new AdventureModel();
            DataValidator dataValidator = new DataValidator();
            TagArray = dataValidator.FormatTagArray(TagArray);
            List<AdventureModel> AdventureFilterResults = adventureModel.GetFilteredList(TagArray);

            return Json(AdventureFilterResults, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetFilteredListWithLocation(List<string> TagArray, string Location)
        {
            AdventureModel adventureModel = new AdventureModel();
            DataValidator dataValidator = new DataValidator();
            TagArray = dataValidator.FormatTagArray(TagArray);

            List<AdventureModel> AdventureFilterResults = adventureModel.GetFilteredListWithLocation(TagArray, Location);

            return Json(AdventureFilterResults, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AddFriendToSlot(string[] FriendsArray)
        {
            User user = new User();
            ResultMessage resultMessage = user.UpdateFriendSlots(FriendsArray);
            return Json(resultMessage, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetInnerCircleAdventureMatches(int AdventureID)
        {
            UserMatchAdventures matchAdventures = new UserMatchAdventures();
            List <UserMatchAdventures> InnerCircleMatches = matchAdventures.GetInnerCircleAdventureMatches(AdventureID);
            return Json(InnerCircleMatches, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetInnerCircleAdventureUserMatches(int AdventureID)
        {
            UserMatchAdventures matchAdventures = new UserMatchAdventures();
            List<UserMatchAdventures> InnerCircleMatches = matchAdventures.GetInnerCircleAdventureUserMatches(AdventureID);
            return Json(InnerCircleMatches, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetUsersRightSwipeAdventures()
        {
            AdventureModel AdventureModel = new AdventureModel();
            List<AdventureModel> AdventureModelSwipeList = AdventureModel.GetUsersRightSwipeAdventures();
            return Json(AdventureModelSwipeList, JsonRequestBehavior.AllowGet);
        }

        //Gets the match Adventures
        public JsonResult GETInnerCirlceAdventureMatches()
        {
            AdventureModel AdventureModel = new AdventureModel();
            List<AdventureModel> AdventureModelSwipeList = AdventureModel.GETInnerCirlceAdventureMatches();
            return Json(AdventureModelSwipeList, JsonRequestBehavior.AllowGet);
        }

        /***************Web Scraper******************/


        /*        private async Task<JsonResult> GetYelpPage(string WebsiteAddress)
                {

                }*/
    }
}