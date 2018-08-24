using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoreLAB.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreLAB.Controllers
{
    public class MoviesController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        // GET: /<controller>/
        public IActionResult New()
        {
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult New(int id, [Bind("Title,Published,Price")] Movie movie)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    //_context.Update(movie);
                    //await _context.SaveChangesAsync();
                }
                catch
                {
                    return NotFound();
                   
                }
                return RedirectToAction("Index");
            }
            return View(movie);
        }
    }
}
