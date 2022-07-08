using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ToDuo.Models.Models.TableModels;
using ToDuo.Models.ViewModels;

namespace ToDuo.Controllers
{
    public class HomeController : Controller
    {
        public static string LoginViewPath = "~/Views/Authentication/Login/Login.cshtml";
        public static string SignupViewPath = "~/Views/Authentication/Signup/Signup.cshtml";
        public static string IndexPath = "~/Views/Home/Dashboard/Index.cshtml";
        public ActionResult Index()
        {
            //Models
            HttpCookie CurrentUserCookie = Request.Cookies["ToDuoUserCookie"];
            AdventureModel adventureModel = new AdventureModel();

            if (CurrentUserCookie == null)
                return RedirectToAction("Login");
            //Cookie Info
            int OwnerID = Int32.Parse(CurrentUserCookie.Values["ID"]);

            IndexVM IndexVM = new IndexVM
            {
                AdventureList = adventureModel.GetList(OwnerID)
            };

            return View(IndexPath, IndexVM);
        }

        /****************Authentication********************/
        public ActionResult Login()
        {
            return View(LoginViewPath);
        }

        public ActionResult Signup()
        {
            return View(SignupViewPath);
        }

    }
}