using System;
using System.ComponentModel.DataAnnotations;
namespace CoreLAB.Models
{
    public class Movie
    {
        public int ID { get; set; }
        public string Title { get; set; }
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime Published { get; set; }
        public decimal Price { get; set; }
    }
}
