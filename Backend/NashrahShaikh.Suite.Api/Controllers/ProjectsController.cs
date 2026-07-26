using Microsoft.AspNetCore.Mvc;

namespace NashrahShaikh.Suite.Api.Controllers
{
    public class ProjectsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
