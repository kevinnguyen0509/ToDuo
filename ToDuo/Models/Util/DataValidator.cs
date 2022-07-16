using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDuo.Models.Util
{
    public class DataValidator
    {
        public List<string> FormatTagArray(List<string> TagArrayFilter)
        {
            for(int i = 0; i < 5; i++)
            {
                if (TagArrayFilter.Count < 5)
                {
                    TagArrayFilter.Add(null);

                }
            }

            return TagArrayFilter;
        }
    }
}