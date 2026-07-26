using Microsoft.AspNetCore.Mvc;

namespace NashrahShaikh.Suite.Api.Controllers
{
    public class ThemeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
