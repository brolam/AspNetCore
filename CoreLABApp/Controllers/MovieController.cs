using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
// http://ankitsharmablogs.com/asp-net-core-crud-with-react-js-and-entity-framework-core/
using CoreLABApp.Models;

namespace CoreLABApp.Controllers
{
    [Route("api/movies")]
    public class MovieController : Controller
    {
        private readonly MovieContext _context;

        public MovieController(MovieContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet("[action]/{*q}")]
        public IEnumerable<Movie> Search(String q)
        {
            var moveis = from move in _context.Movie select move;
            if (!String.IsNullOrEmpty(q))
            {
                moveis = moveis.Where(move => move.Title.Contains(q));
            }
            return moveis;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Movie Get(int id)
        {
            return _context.Movie.FindAsync(id).Result;
        }

        // POST api/values
        [HttpPost("[action]")]
        public void New(Movie movie)
        {
            _context.Add(movie);
            _context.SaveChangesAsync();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public Movie Put(int id, Movie movie)
        {
            if(id != movie.ID)
            {
                return null;
            }

            if (ModelState.IsValid)
            {
                    _context.Update(movie);
                    _context.SaveChangesAsync();
                return null ;
            }
            return movie;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
