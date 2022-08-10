using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using ToDuo.Models.BaseClasses;
using ToDuo.Models.Users;

namespace ToDuo.DataFactory.SaveData
{
    public class SaveUserData 
    {
        public ResultMessage CreateNewUser(User User)
        {

            ResultMessage resultMessage = new ResultMessage();

            SqlConnection SQLConn = new SqlConnection();
            SqlCommand SQLComm = new SqlCommand();
            SqlDataReader SQLRec;

            // Configure the ConnectionString to access the database content
            SQLConn.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ToDuoConnection"].ConnectionString;
            SQLConn.Open();


            /*string SQL = "SELECT * FROM dbo.GeneralLiabilityClaims";*/
            string SQL = "[dbo].[dbo.ssp_ToDuo_SignUserUp]";
            SQLComm = new SqlCommand(SQL, SQLConn);
            SQLComm.CommandType = CommandType.StoredProcedure;
            SQLComm.Parameters.AddWithValue("@Email", User.Email);
            SQLComm.Parameters.AddWithValue("@Password", User.Password);
            SQLComm.Parameters.AddWithValue("@FirstName", User.Firstname);
            SQLComm.Parameters.AddWithValue("@LastName", User.LastName);

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

        public ResultMessage UpdateFriendSlots(string[] FriendsArray, int UserID)
        {

            ResultMessage resultMessage = new ResultMessage();

            SqlConnection SQLConn = new SqlConnection();
            SqlCommand SQLComm = new SqlCommand();
            SqlDataReader SQLRec;

            // Configure the ConnectionString to access the database content
            SQLConn.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ToDuoConnection"].ConnectionString;
            SQLConn.Open();


            /*string SQL = "SELECT * FROM dbo.GeneralLiabilityClaims";*/
            string SQL = "[dbo].[ssp_ToDuo_UpdateFriendSlots]";
            SQLComm = new SqlCommand(SQL, SQLConn);
            SQLComm.CommandType = CommandType.StoredProcedure;
            SQLComm.Parameters.AddWithValue("@UserID", UserID);
            SQLComm.Parameters.AddWithValue("@PartnerID", FriendsArray[0] == "-1" ? FriendsArray[0] = null : FriendsArray[0]);
            SQLComm.Parameters.AddWithValue("@FriendOne", FriendsArray[1] == "-1" ? FriendsArray[1] = null : FriendsArray[1]);
            SQLComm.Parameters.AddWithValue("@FriendTwo", FriendsArray[2] == "-1" ? FriendsArray[2] = null : FriendsArray[2]);
            SQLComm.Parameters.AddWithValue("@FriendThree", FriendsArray[3] == "-1" ? FriendsArray[3] = null : FriendsArray[3]);
            SQLComm.Parameters.AddWithValue("@FriendFour", FriendsArray[4] == "-1" ? FriendsArray[4] = null : FriendsArray[4]);
            SQLComm.Parameters.AddWithValue("@FriendFive", FriendsArray[5] == "-1" ? FriendsArray[5] = null : FriendsArray[5]);
            SQLComm.Parameters.AddWithValue("@FriendSix", FriendsArray[6] == "-1" ? FriendsArray[6] = null : FriendsArray[6]);
            SQLComm.Parameters.AddWithValue("@FriendSeven", FriendsArray[7] == "-1" ? FriendsArray[7] = null : FriendsArray[7]);
            SQLComm.Parameters.AddWithValue("@FriendEight", FriendsArray[8] == "-1" ? FriendsArray[8] = null : FriendsArray[8]);
            SQLComm.Parameters.AddWithValue("@FriendNine", FriendsArray[9] == "-1" ? FriendsArray[9] = null : FriendsArray[9]);
            SQLComm.Parameters.AddWithValue("@FriendTen", FriendsArray[10] == "-1" ? FriendsArray[0] = null : FriendsArray[10]);

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