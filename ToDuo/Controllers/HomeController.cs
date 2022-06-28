using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ToDuo.Controllers
{
    public class HomeController : Controller
    {
        public static string LoginViewPath = "~/Views/Login/Login.cshtml";
        public static string IndexPath = "~/Views/Home/Dashboard/Index.cshtml";
        public ActionResult Index()
        {
            HttpCookie CurrentUserCookie = Request.Cookies["ToDuoUserCookie"];


            if (CurrentUserCookie == null)
                return RedirectToAction("Login");

            return View(IndexPath);
        }

        public ActionResult Login()
        {
            return View(LoginViewPath);
        }

    }
}