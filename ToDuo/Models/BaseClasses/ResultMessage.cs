using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDuo.Models.BaseClasses
{
    public class ResultMessage
    {
        public string ReturnMessage { get; set; }
        public string ReturnStatus { get; set; }
        public int NewId { get; set; }
    }
}