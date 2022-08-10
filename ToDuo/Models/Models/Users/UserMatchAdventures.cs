using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ToDuo.DataFactory.GetData;
using ToDuo.Models.Users;

namespace ToDuo.Models.Models.Users
{
    public class UserMatchAdventures : User
    {
        public string AdventureTitle { get; set; }
        public string AdventureImageUrl { get; set; }

        public List<UserMatchAdventures> GetInnerCircleAdventureMatches(int AdventureID)
        {      
            GetUserData getUserData = new GetUserData();
            User user = this.GetLoggedInUserCookie();
            List<UserMatchAdventures> InnerCircleMatches = getUserData.GetInnerCircleMatches(user.ID, AdventureID);
            
            return InnerCircleMatches;
        }
    }
}