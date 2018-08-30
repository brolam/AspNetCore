using System;
using System.ComponentModel.DataAnnotations;
namespace CoreLABApp.Models
{
    public class Movie
    {
        public int ID { get; set; }
        [Required]
        [StringLength(40)]
        public string Title { get; set; }
        [Display(Name = "Published Date")]
        [Required]
        public DateTime Published { get; set; }
        [Required]
        public float Price { get; set; }

    }
}
