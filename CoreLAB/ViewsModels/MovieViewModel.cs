using System;
using CoreLAB.Models;

namespace CoreLAB.ViewsModels
{
    public class MovieViewModel
    {
        public Movie Movie { get; set; }
        public Comment Comment { get; set; }

        public MovieViewModel()
        {
        }

        public MovieViewModel(Movie movie)
        {
            Movie = movie;
            Comment = new Comment
            {
                MovieID = Movie.ID
            };
        }
    }
}
