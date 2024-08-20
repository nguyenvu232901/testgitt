using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MVC04.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace MVC04.Controllers
{
    public class ProductController : Controller
    {
        private readonly DbContextProduct _context;
        private readonly ILogger<ProductController> _logger;

        public ProductController(DbContextProduct context, ILogger<ProductController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult NewProduct()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(int ProductID, string ProductName, string ImageUrl, int ProductPrice, string Description)
        {
            try
            {
                await _context.AddProductAsync(ProductID, ProductName, ImageUrl, ProductPrice, Description);
                await _context.SaveChangesAsync();
                return RedirectToAction("ProductMgr");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error adding product");
                ModelState.AddModelError("", "Thêm sản phẩm không thành công.");
                return View("NewProduct");
            }
        }

        public IActionResult ProductMgr()
        {
            var products = _context.tblProducts.ToList();
            
            return View(products);
        }
        public IActionResult ProductDetail(int id)
        {
            var product = _context.tblProducts.FirstOrDefault(x => x.ProductID == id);
            if (product == null)
            {
                return NotFound();
            }
            if (User.Identity.IsAuthenticated)
            {
                var comments = _context.tblNhanXet
                .Where(c => c.FK_iProductID == id)
                .Include(c => c.tblMember)
                .ToList();
                ViewData["Comments"] = comments;
            }

            ViewData["Product"] = product;
            return View();
        }
        [Authorize]
        [HttpPost]
        public IActionResult AddComment(int ProductID, string Content)
        {
            if(User.Identity.IsAuthenticated)
    {
                var member = _context.tblMember.FirstOrDefault(m => m.sTaiKhoan == User.Identity.Name);

                if (member == null)
                {
                    return RedirectToAction("ProductDetail", new { id = ProductID });
                }

                var comment = new tblNhanXet
                {
                    FK_iProductID = ProductID,
                    sNoidung = Content,
                    FK_MemberName = member.MemberName, // ID của member
                    tThoigianGhinhan = DateTime.Now
                };

                _context.tblNhanXet.Add(comment);
                _context.SaveChanges();
            }

            return RedirectToAction("ProductDetail", new { id = ProductID });
        }
        [HttpGet]

        public IActionResult DeleteProduct(int ID)
        {
            var product = _context.tblProducts.FirstOrDefault(x => x.ProductID == ID);
            if (product == null)
            {
                return NotFound(new { success = false, message = "Sản phẩm không tồn tại." });
            }

            try
            {
                _context.tblProducts.Remove(product);
                _context.SaveChanges();
                return Json(new { success = true, message = "Xóa sản phẩm thành công." });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Lỗi khi xóa sản phẩm");
                return Json(new { success = false, message = "Đã xảy ra lỗi khi xóa sản phẩm." });
            }
        }
        [HttpPost]
        public IActionResult GiamGia(int ID)
        {
            var product = _context.tblProducts.FirstOrDefault(x => x.ProductID == ID);
            if (product == null)
            {
                return Json(new { success = false, message = "Sản phẩm không tồn tại." });
            }

            if (product.ProductPrice >= 100000)
            {
                product.ProductPrice = (int)(product.ProductPrice * 0.9);
                try
                {
                    _context.tblProducts.Update(product);
                    _context.SaveChanges();
                    return Json(new { success = true, newPrice = product.ProductPrice, message = "Giảm giá thành công." });
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Lỗi khi giảm giá sản phẩm");
                    return Json(new { success = false, message = "Đã xảy ra lỗi khi giảm giá sản phẩm." });
                }
            }
            else
            {
                return Json(new { success = false, message = "Sản phẩm có giá dưới 100000 không được giảm giá." });
            }
        }
    }
}