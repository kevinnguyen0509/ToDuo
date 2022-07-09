using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDuo.Models.BaseClasses;

namespace ToDuo.Models.Interfaces
{
    interface IForm<T>
    {
        ResultMessage SaveAdventure(T FormModel);
        ResultMessage UpdateItem(T FormModel);
        List<T> GetList(int OwnerID);
        List<T> GetShuffledList();
    }
}
