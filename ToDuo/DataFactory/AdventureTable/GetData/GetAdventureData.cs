using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using ToDuo.Models.Models.TableModels;

namespace ToDuo.DataFactory.AdventureTable.GetData
{
    public class GetAdventureData
    {
        public List<AdventureModel> GetAdventures(int OwnerID)
        {

            List<AdventureModel> Adventures = new List<AdventureModel>();

            SqlConnection SQLConn = new SqlConnection();
            SqlCommand SQLComm = new SqlCommand();
            SqlDataReader SQLRec;

            // Configure the ConnectionString to access the database content
            SQLConn.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ToDuoConnection"].ConnectionString;
            SQLConn.Open();


            /*string SQL = "SELECT * FROM dbo.GeneralLiabilityClaims";*/
            string SQL = "[dbo.ssp_BudgetSheet_GetAllAdventures]";
            SQLComm = new SqlCommand(SQL, SQLConn);
            SQLComm.CommandType = CommandType.StoredProcedure;
            SQLComm.Parameters.AddWithValue("@OwnerID", OwnerID);

            SQLRec = SQLComm.ExecuteReader();

            if (SQLRec.HasRows)
            {
                while (SQLRec.Read())
                {
                    Adventures.Add(new AdventureModel
                    {
                        ID = SQLRec.GetInt32(SQLRec.GetOrdinal("ID")),
                        OwnerID = SQLRec.GetInt32(SQLRec.GetOrdinal("OwnerID")),
                        Title = SQLRec.IsDBNull(SQLRec.GetOrdinal("Title")) ? "" : SQLRec.GetString(SQLRec.GetOrdinal("Title")),
                        ImageURL = SQLRec.IsDBNull(SQLRec.GetOrdinal("ImageURL")) ? "" : SQLRec.GetString(SQLRec.GetOrdinal("ImageURL")),
                        Description = SQLRec.IsDBNull(SQLRec.GetOrdinal("Description")) ? "" : SQLRec.GetString(SQLRec.GetOrdinal("Description")),
                        WebsiteUrl = SQLRec.IsDBNull(SQLRec.GetOrdinal("WebsiteUrl")) ? "#" : SQLRec.GetString(SQLRec.GetOrdinal("WebsiteUrl")),
                        CreatedDate = SQLRec.IsDBNull(SQLRec.GetOrdinal("CreatedDate")) ? new DateTime() : SQLRec.GetDateTime(SQLRec.GetOrdinal("CreatedDate")),
                        Location = SQLRec.IsDBNull(SQLRec.GetOrdinal("Location")) ? "N/A" : SQLRec.GetString(SQLRec.GetOrdinal("Location")),
                        Tags = SQLRec.IsDBNull(SQLRec.GetOrdinal("Tags")) ? "" : SQLRec.GetString(SQLRec.GetOrdinal("Tags")),
                    });

                }
            }
            SQLRec.Close();
            SQLConn.Close();

            return Adventures;
        }
    }
}