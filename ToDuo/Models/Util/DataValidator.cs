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
                if(TagArrayFilter == null)
                {
                    TagArrayFilter = new List<string>();
                    TagArrayFilter.Add(null);
                    TagArrayFilter.Add(null);
                    TagArrayFilter.Add(null);
                    TagArrayFilter.Add(null);
                    TagArrayFilter.Add(null);
                    return TagArrayFilter;
                }
                else if (TagArrayFilter.Count < 5)
                {
                    TagArrayFilter.Add(null);

                }
                else
                {
                    TagArrayFilter.Add(null);
                }
            }

            return TagArrayFilter;
        }
    }
}