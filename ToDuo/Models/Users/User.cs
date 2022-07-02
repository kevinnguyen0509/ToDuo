using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using ToDuo.DataFactory.GetData;
using ToDuo.DataFactory.SaveData;
using ToDuo.Models.BaseClasses;

namespace ToDuo.Models.Users
{
    public class User : ResultMessage
    {
        GetUserData GetData = new GetUserData();
        SaveUserData SaveUserData = new SaveUserData();
        public int ID { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PartnerID { get; set; }
        public string Firstname { get; set; }
        public string LastName { get; set; }

        public User GetUserIfExists(string Email)
        {
            return GetData.GetUser(Email);
        }

        public User GetLoggedInUserCookie()
        {
            HttpCookie CurrentUserCookie = HttpContext.Current.Request.Cookies["ToDuoUserCookie"];
            this.ID = Int32.Parse(CurrentUserCookie.Values["ID"]);
            this.PartnerID = CurrentUserCookie.Values["PartnerID"].ToString();

            return this;
        }

        /// <summary>
        /// This will create a User and check if they already exist USING SQL. If it doesn't exists the user will be
        /// created and a cookie will be created. If it does exists an error message will display in the result message
        /// </summary>
        /// <param name="User">Takes in the user's input and stores it in the User model</param>
        /// <returns>A result message stating if it passed or failed and why it failed or if it succeeded.</returns>
        public ResultMessage CreateUser(User User)
        {
            User.Password = Crypto.HashPassword(User.Password);//Hash Password before saving it
            ResultMessage resultMessage = SaveUserData.CreateNewUser(User);
            if(resultMessage.ReturnStatus == "Success")
            {
                User.ID = resultMessage.NewId;
                User.CreateCookie90Days(User);
            }
            
            return resultMessage;
        }

        public void CreateCookie90Days(User User)
        {
            HttpCookie CurrentUserCookie = new HttpCookie("ToDuoUserCookie");
            CurrentUserCookie.Values.Add("ID", User.NewId.ToString());
            CurrentUserCookie.Values.Add("PartnerID", null);
            CurrentUserCookie.Expires = DateTime.Now.AddDays(90);
            HttpContext.Current.Response.Cookies.Add(CurrentUserCookie);
        }
    }
}