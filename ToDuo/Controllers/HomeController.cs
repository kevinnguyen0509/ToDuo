﻿using System;
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
            return View(IndexPath);
        }

        public ActionResult Login()
        {
            return View(LoginViewPath);
        }

    }
}