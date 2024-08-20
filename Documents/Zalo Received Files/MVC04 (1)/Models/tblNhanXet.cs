using System.ComponentModel.DataAnnotations;

namespace MVC04.Models
{
    public class tblNhanXet
    {
        [Key]
        public int PK_iNhanxetID { get; set; } // Primary Key
        public string sNoidung { get; set; } 
        public DateTime tThoigianGhinhan { get; set; } 
        public int FK_iProductID { get; set; } 
        public tblProducts tblProducts { get; set; } 

        public string FK_MemberName { get; set; } 
        public tblMember tblMember { get; set; } 
    }
}
