using System;
using Microsoft.EntityFrameworkCore;
namespace CoreLABApp.Models
{
    public class MovieContext: DbContext
    {
        public MovieContext(DbContextOptions<MovieContext> options)
            : base(options)
        {
        }

        public DbSet<Models.Movie> Movie { get; set; }
        public DbSet<Models.Comment> Comments { get; set; }
    }
}
