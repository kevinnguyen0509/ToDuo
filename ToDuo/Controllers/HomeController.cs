using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ToDuo.Controllers
{
    public class HomeController : Controller
    {
        public static string LoginViewPath = "~/Views/Authentication/Login/Login.cshtml";
        public static string SignupViewPath = "~/Views/Authentication/Signup/Signup.cshtml";
        public static string IndexPath = "~/Views/Home/Dashboard/Index.cshtml";
        public ActionResult Index()
        {
            HttpCookie CurrentUserCookie = Request.Cookies["ToDuoUserCookie"];


            if (CurrentUserCookie == null)
                return RedirectToAction("Login");

            return View(IndexPath);
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