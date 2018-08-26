using System;
using CoreLAB.Models;

namespace CoreLAB.ViewsModels
{
    public class MovieViewModel
    {
        public Movie Movie { get; set; }
        public Comment NewComment { get; set; }

        public MovieViewModel()
        {
        }

        public MovieViewModel(Movie movie)
        {
            Movie = movie;
            NewComment = new Comment
            {
                MovieID = Movie.ID,
                Created = DateTime.Now
            };
        }
    }
}
