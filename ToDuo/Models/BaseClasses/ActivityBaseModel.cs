using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDuo.Models.BaseClasses
{
    public class ActivityBaseModel : ResultMessage
    {
        public int ID { get; set; }
        public int OwnerID { get; set; }
        public string Title { get; set; }
        public string ImageURL { get; set; }
        public string Description { get; set; }
        public string WebsiteUrl { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Location { get; set; }
        public string Tags { get; set; }

    }
}