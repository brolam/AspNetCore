using System;
using System.ComponentModel.DataAnnotations;

namespace CoreLAB.Models
{
    public class Comment
    {
        public int ID { get; set; }
        public int MovieID { get; set; }
        [Display(Name = "Comment")]
        [StringLength(50)]
        [Required]
        public string Content { get; set; }
        [Display(Name = "Comment Date")]
        [DataType(DataType.Date)]
        [Required]
        public DateTime Created { get; set; }
    }
}
