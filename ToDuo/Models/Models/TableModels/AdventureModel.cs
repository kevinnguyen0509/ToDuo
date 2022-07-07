using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ToDuo.DataFactory.SaveData;
using ToDuo.Models.BaseClasses;
using ToDuo.Models.Interfaces;

namespace ToDuo.Models.Models.TableModels
{
    public class AdventureModel : ActivityBaseModel, IForm<AdventureModel>
    {
        SaveAdventureData saveData = new SaveAdventureData();
        public ResultMessage SaveAdventure(AdventureModel FormModel)
        {
            ResultMessage resultMessage = saveData.SaveAdventure(FormModel);
            return resultMessage;
        }
    }
}