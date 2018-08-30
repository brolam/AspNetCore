using System;
using System.ComponentModel.DataAnnotations;
namespace CoreLABApp.Models
{
    public class Comment
    {
        public int ID { get; set; }
        [Required]
        [StringLength(23)]
        public string Content { get; set; }
        [Display(Name = "Comment Date")]
        [Required]
        public DateTime Created { get; set; }
    }
}
