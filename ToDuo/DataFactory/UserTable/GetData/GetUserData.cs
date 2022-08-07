using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using ToDuo.Models.Users;

namespace ToDuo.DataFactory.GetData
{
    public class GetUserData
    {
        public User GetUser(string email)
        {

            User userData = new User();

            SqlConnection SQLConn = new SqlConnection();
            SqlCommand SQLComm = new SqlCommand();
            SqlDataReader SQLRec;

            // Configure the ConnectionString to access the database content
            SQLConn.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ToDuoConnection"].ConnectionString;
            SQLConn.Open();


            /*string SQL = "SELECT * FROM dbo.GeneralLiabilityClaims";*/
            string SQL = "[dbo].[dbo.ssp_BudgetSheet_GetUser]";
            SQLComm = new SqlCommand(SQL, SQLConn);
            SQLComm.CommandType = CommandType.StoredProcedure;
            SQLComm.Parameters.AddWithValue("@Email", email);

            SQLRec = SQLComm.ExecuteReader();

            if (SQLRec.HasRows)
            {
                while (SQLRec.Read())
                {
                    userData = new User
                    {
                        ID = SQLRec.GetInt32(SQLRec.GetOrdinal("ID")),
                        Email = SQLRec.GetString(SQLRec.GetOrdinal("Email")),
                        Password = SQLRec.GetString(SQLRec.GetOrdinal("password")),
                        PartnerID = SQLRec.IsDBNull(SQLRec.GetOrdinal("PartnerID")) == true ? null : SQLRec.GetString(SQLRec.GetOrdinal("PartnerID"))

                    };
                }
            }
            else
            {

            }
            SQLRec.Close();
            SQLConn.Close();

            return userData;
        }


        public List<User> GetTopTwentyUsers()
        {

            List<User> userList= new List<User>();

            SqlConnection SQLConn = new SqlConnection();
            SqlCommand SQLComm = new SqlCommand();
            SqlDataReader SQLRec;

            // Configure the ConnectionString to access the database content
            SQLConn.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ToDuoConnection"].ConnectionString;
            SQLConn.Open();


            /*string SQL = "SELECT * FROM dbo.GeneralLiabilityClaims";*/
            string SQL = "[dbo].[ssp_ToDuo_GetTopTwentyUsers]";
            SQLComm = new SqlCommand(SQL, SQLConn);
            SQLComm.CommandType = CommandType.StoredProcedure;

            SQLRec = SQLComm.ExecuteReader();

            if (SQLRec.HasRows)
            {
                while (SQLRec.Read())
                {
                    userList.Add(new User
                    {
                        ID = SQLRec.GetInt32(SQLRec.GetOrdinal("ID")),
                        Firstname = SQLRec.IsDBNull(SQLRec.GetOrdinal("FirstName")) ? "Anonymous" : SQLRec.GetString(SQLRec.GetOrdinal("FirstName")),
                        LastName =  SQLRec.IsDBNull(SQLRec.GetOrdinal("LastName")) ? "" : SQLRec.GetString(SQLRec.GetOrdinal("LastName")),
                    });
                }
            }
            SQLRec.Close();
            SQLConn.Close();

            return userList;
        }
    }
}