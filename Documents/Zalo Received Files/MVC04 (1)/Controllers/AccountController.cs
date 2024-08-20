using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using MVC04.Models;
using Microsoft.Extensions.Logging;

namespace MVC04.Controllers
{
    public class AccountController: Controller
    {
        private readonly DbContextProduct _context;
        private readonly ILogger<ProductController> _logger;
        public AccountController(DbContextProduct context,ILogger<ProductController> logger)
        {
            _context = context;
            _logger = logger;
        }

        public IActionResult Login() => View();

        [HttpPost]
        public async Task<IActionResult> Login(string username, string password)
        {
            var user = _context.tblMember.FirstOrDefault(m => m.sTaiKhoan == username && m.sMatKhau == password);
            if (user != null)
            {
                var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.sTaiKhoan)
            };

                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                var authProperties = new AuthenticationProperties
                {
                    IsPersistent = true
                };

                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity), authProperties);
                return RedirectToAction("ProductMgr", "Product");
            }

            ViewBag.ErrorMessage = "Tên tài khoản hoặc mật khẩu không đúng.";
            return View();
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("ProductMgr", "Product");
        }
    }
}
