using Kafe.Data;
using Kafe.Data.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace Kafe.Controllers
{
    public class MenuController : Controller
    {
        private ProductsData _products;
        
        public MenuController()
        {
            _products = new ProductsData();
        }

        [HttpGet("/")]
        public IActionResult Index()
        {
            return View(_products);
        }
    }
}
