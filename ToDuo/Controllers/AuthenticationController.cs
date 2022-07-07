using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using ToDuo.Models.Users;

namespace ToDuo.Controllers
{
    public class AuthenticationController : Controller
    {
        // GET: Authentication
        // GET: Authentication
        public JsonResult LoginVerification(string Email, string Password)
        {
            User UserFromDatabase = new User(); //Creates a user model to store User inforamation
            UserFromDatabase = UserFromDatabase.GetUserIfExists(Email);
            bool PasswordIsCorrect = Crypto.VerifyHashedPassword(UserFromDatabase.Password, Password);

            if (PasswordIsCorrect)
            {
                UserFromDatabase.PartnerID = UserFromDatabase.PartnerID.Trim();
                UserFromDatabase.CreateCookie90Days(UserFromDatabase);
                return Json("Success", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Failed", JsonRequestBehavior.AllowGet);
            }

        }

        //Checks and creates new user if no user exists with email
        public JsonResult SignUserUp(User user)
        {
            User UserModel = new User();
            return Json(UserModel.CreateUser(user), JsonRequestBehavior.AllowGet);
        }
    }
}