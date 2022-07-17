using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ToDuo.DataFactory.AdventureTable.GetData;
using ToDuo.DataFactory.SaveData;
using ToDuo.Models.BaseClasses;
using ToDuo.Models.Interfaces;
using ToDuo.Models.Models.Components;
using ToDuo.Models.Users;

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

        public List<AdventureModel> GetFilteredList(List<string> TagArray)
        {
            List<AdventureModel> AdventureFilterResults = getData.GetTagSearchAdventure(TagArray);
            AdventureFilterResults = this.Shuffle(AdventureFilterResults);
            return AdventureFilterResults;
        }

        public List<AdventureModel> GetFilteredListWithLocation(List<string> TagArray, string Location)
        {
            List<AdventureModel> AdventureFilterResults = getData.GetTagSearchAdventureWithLocation(TagArray, Location);
            AdventureFilterResults = this.Shuffle(AdventureFilterResults);
            return AdventureFilterResults;
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

        public ResultMessage SaveSwipeAdventure(int ID)
        {
            User CurrentUser = new User();
            CurrentUser = CurrentUser.GetLoggedInUserCookie();
            int OwnerID = CurrentUser.ID;

            ResultMessage resultMessage = saveData.SaveSwipeAdventure(ID, OwnerID);
            return resultMessage;
        }

        public ResultMessage UpdateItem(AdventureModel FormModel)
        {
            ResultMessage resultMessage = saveData.UpdateAdventure(FormModel);
            return resultMessage;           
        }

        /// <summary>
        /// Shuffles an Array list
        /// </summary>
        /// <param name="AdventureList">Takes in a List of Adventure Models</param>
        /// <returns>A Shuffled List Adventure models that was passed in</returns>
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