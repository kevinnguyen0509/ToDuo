using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ToDuo.Models.BaseClasses;
using ToDuo.Models.Models.TableModels;
using ToDuo.Models.Users;

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
    }
}