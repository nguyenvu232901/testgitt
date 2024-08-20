using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace MVC04.Models
{
    public class tblProducts
    {
        [Key]
        public int ProductID { get; set; }
        [Required(ErrorMessage = "Tên sản phẩm là bắt buộc.")]
        public string ProductName { get; set; }

        [Url(ErrorMessage = "Định dạng URL không hợp lệ.")]
        public string ImageURL { get; set; }

        [Range(0, int.MaxValue, ErrorMessage = "Giá sản phẩm phải là số dương.")]
        public int ProductPrice { get; set; }

        public string Description { get; set; }
        public List<tblNhanXet> tblNhanXets { get; set; } = [];
    }
}
