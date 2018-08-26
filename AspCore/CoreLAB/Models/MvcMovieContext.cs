using Microsoft.EntityFrameworkCore;

namespace CoreLAB.Models
{
    //https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app-mac/adding-model?view=aspnetcore-2.1
    public class MvcMovieContext : DbContext
    {
        public MvcMovieContext(DbContextOptions<MvcMovieContext> options)
            : base(options)
        {
        }

        public DbSet<CoreLAB.Models.Movie> Movie { get; set; }
        public DbSet<CoreLAB.Models.Comment> Comments { get; set; }
    }
}
