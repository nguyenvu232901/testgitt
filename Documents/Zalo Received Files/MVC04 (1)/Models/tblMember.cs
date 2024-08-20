using System.ComponentModel.DataAnnotations;

namespace MVC04.Models
{
    public class tblMember
    {
        [Key]
        public string MemberName { get; set; } // Primary Key
        public string sTaiKhoan { get; set; }
        public string sMatKhau { get; set; }
        public List<tblNhanXet> tblNhanXets { get; set; } = [];
    }
}
