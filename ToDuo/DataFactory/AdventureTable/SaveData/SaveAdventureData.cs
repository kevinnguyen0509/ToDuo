using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using ToDuo.Models.BaseClasses;
using ToDuo.Models.Models.TableModels;

namespace ToDuo.DataFactory.SaveData
{
    public class SaveAdventureData
    {

        public  ResultMessage SaveAdventure(AdventureModel adventureModel)
        {
            ResultMessage resultMessage = new ResultMessage();

            SqlConnection SQLConn = new SqlConnection();
            SqlCommand SQLComm = new SqlCommand();
            SqlDataReader SQLRec;

            SQLConn.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ToDuoConnection"].ConnectionString;
            SQLConn.Open();

            string SQLSSP = "[dbo].[ssp_ToDuo_SaveAdventure]";
            SQLComm = new SqlCommand(SQLSSP, SQLConn);
            SQLComm.CommandType = CommandType.StoredProcedure;

            SQLComm.Parameters.AddWithValue("@OwnerID", adventureModel.OwnerID);
            SQLComm.Parameters.AddWithValue("@Title", adventureModel.Title);
            SQLComm.Parameters.AddWithValue("@ImageURL", adventureModel.ImageURL);
            SQLComm.Parameters.AddWithValue("@Description", adventureModel.Description);
            SQLComm.Parameters.AddWithValue("@WebsiteUrl", adventureModel.WebsiteUrl);
            SQLComm.Parameters.AddWithValue("@Location", adventureModel.Location);
            SQLComm.Parameters.AddWithValue("@Tags", adventureModel.Tags);

            try
            {

                SQLRec = SQLComm.ExecuteReader();
                if (SQLRec.Read())
                {
                    resultMessage.ReturnMessage = SQLRec.GetString(SQLRec.GetOrdinal("ReturnMessage"));
                    resultMessage.ReturnStatus = SQLRec.GetString(SQLRec.GetOrdinal("ReturnStatus"));
                    resultMessage.NewId = SQLRec.GetInt32(SQLRec.GetOrdinal("NewId"));
                }
                else
                {
                    resultMessage.ReturnMessage = SQLRec.GetString(SQLRec.GetOrdinal("ReturnMessage"));
                    resultMessage.ReturnStatus = SQLRec.GetString(SQLRec.GetOrdinal("ReturnStatus"));
                    resultMessage.NewId = SQLRec.GetInt32(SQLRec.GetOrdinal("NewId"));
                }
                SQLRec.Close();
            }
            catch(Exception e)
            {
                resultMessage.ReturnMessage = e.Message;
                resultMessage.ReturnStatus = "Failed";
                resultMessage.NewId = -1;

            }
            finally
            {     
                SQLConn.Close();
            }

            return resultMessage;
        }

        public ResultMessage UpdateAdventure(AdventureModel adventureModel)
        {
            ResultMessage resultMessage = new ResultMessage();

            SqlConnection SQLConn = new SqlConnection();
            SqlCommand SQLComm = new SqlCommand();
            SqlDataReader SQLRec;

            SQLConn.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ToDuoConnection"].ConnectionString;
            SQLConn.Open();

            string SQLSSP = "[dbo].[ssp_ToDuo_UpdateAdventure]";
            SQLComm = new SqlCommand(SQLSSP, SQLConn);
            SQLComm.CommandType = CommandType.StoredProcedure;

            SQLComm.Parameters.AddWithValue("@ID", adventureModel.ID);
            SQLComm.Parameters.AddWithValue("@Title", adventureModel.Title);
            SQLComm.Parameters.AddWithValue("@ImageURL", adventureModel.ImageURL);
            SQLComm.Parameters.AddWithValue("@Description", adventureModel.Description);
            SQLComm.Parameters.AddWithValue("@WebsiteUrl", adventureModel.WebsiteUrl);
            SQLComm.Parameters.AddWithValue("@Location", adventureModel.Location);
            SQLComm.Parameters.AddWithValue("@Tags", adventureModel.Tags);

            try
            {

                SQLRec = SQLComm.ExecuteReader();
                if (SQLRec.Read())
                {
                    resultMessage.ReturnMessage = SQLRec.GetString(SQLRec.GetOrdinal("ReturnMessage"));
                    resultMessage.ReturnStatus = SQLRec.GetString(SQLRec.GetOrdinal("ReturnStatus"));
                    resultMessage.NewId = SQLRec.GetInt32(SQLRec.GetOrdinal("NewId"));
                }
                else
                {
                    resultMessage.ReturnMessage = SQLRec.GetString(SQLRec.GetOrdinal("ReturnMessage"));
                    resultMessage.ReturnStatus = SQLRec.GetString(SQLRec.GetOrdinal("ReturnStatus"));
                    resultMessage.NewId = SQLRec.GetInt32(SQLRec.GetOrdinal("NewId"));
                }
                SQLRec.Close();
            }
            catch (Exception e)
            {
                resultMessage.ReturnMessage = e.Message;
                resultMessage.ReturnStatus = "Failed";
                resultMessage.NewId = -1;

            }
            finally
            {
                SQLConn.Close();
            }

            return resultMessage;
        }
    }
}