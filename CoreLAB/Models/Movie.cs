using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace CoreLAB.Models
{
    public class Movie
    {
        public int ID { get; set; }
        [StringLength(40)]
        public string Title { get; set; }
        [Display(Name = "Published Date")]
        [DataType(DataType.Date)]
        public DateTime Published { get; set; }
        public decimal Price { get; set; }
        ICollection<Comment> Comments { get; set; }
    }
}
