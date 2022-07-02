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

            SQLRec = SQLComm.ExecuteReader();

            if (SQLRec.Read())
            {
                resultMessage.ReturnMessage = SQLRec.GetString(SQLRec.GetOrdinal("ReturnMessage"));
                resultMessage.ReturnStatus = SQLRec.GetString(SQLRec.GetOrdinal("ReturnStatus"));
                resultMessage.NewId = SQLRec.GetInt32(SQLRec.GetOrdinal("NewId"));
            }
            else
            {

            }
            SQLRec.Close();
            SQLConn.Close();

            return resultMessage;
        }
    }
}