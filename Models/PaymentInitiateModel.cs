using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace confirm_finance.Models
{
    public class PaymentInitiateModel
    {

        public decimal amount { get; set; }
        public string currency { get; set; }
        public string receipt { get; set; }
    }
}