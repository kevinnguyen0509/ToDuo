using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ToDuo.Models.Users;

namespace ToDuo.Models.ViewModels
{
    public class MyProfileVM
    {
        public List<User> TopTwentyUsers { get; set; }
        public List<User> InnerCircle { get; set; }
    }
}