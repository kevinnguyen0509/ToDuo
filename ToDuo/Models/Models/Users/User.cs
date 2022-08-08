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
        public string Image { get; set; }
        public string FriendPosition { get; set; }
        public int SortOrder { get; set; }
        public string PartnerID { get; set; }
        public string Firstname { get; set; }
        public string LastName { get; set; }
        public string FriendOne { get; set; }
        public string FriendTwo { get; set; }
        public string FriendThree { get; set; }
        public string FriendFour { get; set; }
        public string FriendFive { get; set; }
        public string FriendSix { get; set; }
        public string FriendSeven { get; set; }
        public string FriendEight { get; set; }
        public string FriendNine { get; set; }
        public string FriendTen { get; set; }



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

        public List<User> GetTopTwentyUsers()
        {
            List<User> listOfTopTwentyUsers = GetData.GetTopTwentyUsers();
            return listOfTopTwentyUsers;
        }

        public List<User> GetInnerCircle()
        {
            User user = GetLoggedInUserCookie();
            int UserID = user.ID;

            List<User> CompletCircleList = CreateInnerCircleList(UserID);
            return CompletCircleList;
        }

        public void CreateCookie90Days(User User)
        {
            HttpCookie CurrentUserCookie = new HttpCookie("ToDuoUserCookie");
            CurrentUserCookie.Values.Add("ID", User.ID.ToString());
            CurrentUserCookie.Values.Add("PartnerID", User.PartnerID == null? "0" : User.PartnerID);
            CurrentUserCookie.Expires = DateTime.Now.AddDays(90);
            HttpContext.Current.Response.Cookies.Add(CurrentUserCookie);
        }

        private List<User> CreateInnerCircleList(int UserID)
        {
            List<User> InnerCircleList = GetData.GetMyInnerCircle(UserID);
            List<User> CompletCircleList = new List<User>();
            User[] tempInnerCircleArray = new User[11];


            //Add innercirclefriends from Database to proper temp array slots
            for (int i = 0; i < InnerCircleList.Count; i++)
            {
                tempInnerCircleArray[InnerCircleList[i].SortOrder] = InnerCircleList[i];
            }

            //Add completed list into the array
            for (int i = 0; i < tempInnerCircleArray.Length; i++)
            {
                if(tempInnerCircleArray[i] == null)
                {
                    CompletCircleList.Add(new User
                    {
                        ID = -1,
                        Firstname = "Slot",
                        LastName = "Open",
                        SortOrder = i

                    });
                }
                else
                {
                    CompletCircleList.Add(tempInnerCircleArray[i]);
                }       
            }
            return CompletCircleList;

        }
    }
}