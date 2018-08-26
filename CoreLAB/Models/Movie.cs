using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace CoreLAB.Models
{
    public class Movie
    {
        public int ID { get; set; }
        [StringLength(40)]
        [Required]
        public string Title { get; set; }
        [Display(Name = "Published Date")]
        [DataType(DataType.Date)]
        [Required]
        public DateTime Published { get; set; }
        [Required]
        public decimal Price { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
