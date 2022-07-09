using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ToDuo.DataFactory.AdventureTable.GetData;
using ToDuo.DataFactory.SaveData;
using ToDuo.Models.BaseClasses;
using ToDuo.Models.Interfaces;

namespace ToDuo.Models.Models.TableModels
{
    public class AdventureModel : ActivityBaseModel, IForm<AdventureModel>
    {
        SaveAdventureData saveData = new SaveAdventureData();
        GetAdventureData getData = new GetAdventureData();

        public List<AdventureModel> GetList(int OwnerID)
        {
            
            List<AdventureModel> Adventures = getData.GetAdventures(OwnerID);
            return Adventures;
        }

        public List<AdventureModel> GetShuffledList()
        {
            List<AdventureModel> AdventureList = getData.GetShuffledAdventure();
            AdventureList = this.Shuffle(AdventureList);
            return AdventureList;
        }

        public ResultMessage SaveAdventure(AdventureModel FormModel)
        {
            ResultMessage resultMessage = saveData.SaveAdventure(FormModel);
            return resultMessage;
        }

        public ResultMessage UpdateItem(AdventureModel FormModel)
        {
            ResultMessage resultMessage = saveData.UpdateAdventure(FormModel);
            return resultMessage;           
        }

        private List<AdventureModel> Shuffle(List<AdventureModel> AdventureList)
        {
            Random rng = new Random();  
            int n = AdventureList.Count;
            while (n > 1)
            {
                n--;
                int k = rng.Next(n + 1);
                AdventureModel value = AdventureList[k];
                AdventureList[k] = AdventureList[n];
                AdventureList[n] = value;
            }
            return AdventureList;
        }
    }
}