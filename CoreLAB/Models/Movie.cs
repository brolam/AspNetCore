using System;
using System.ComponentModel.DataAnnotations;

namespace CoreLAB.Models
{
    public class Movie
    {
        public int ID { get; set; }
        public string Title { get; set; }
        [Display(Name = "Published Date")]
        [DataType(DataType.Date)]
        public DateTime Published { get; set; }
        public decimal Price { get; set; }
    }
}
