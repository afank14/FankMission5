using FankMission5.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace FankMission5.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        // Index action in the controller
        public IActionResult Index()
        {
            return View();
        }

        // Pricing action to go to pricing page
        public IActionResult Pricing()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
