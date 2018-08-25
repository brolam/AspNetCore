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
        public string Content { get; set; }
        [Display(Name = "Comment Date")]
        [DataType(DataType.Date)]
        public DateTime Created { get; set; }
    }
}
