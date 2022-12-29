using confirm_finance.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace confirm_finance.Controllers
{
    public class PaymentGatewayController : Controller
    {
        // GET: PaymentGateway
      

        [HttpPost]
        public JsonResult CreateOrder(PaymentInitiateModel _requestData)
        {
  

            Razorpay.Api.RazorpayClient client = new Razorpay.Api.RazorpayClient("rzp_live_ev8z1QwsGlqw9a", "PdlpZToExoe7XoXl9Zkk6Lky");
            Dictionary<string, object> options = new Dictionary<string, object>();
            options.Add("amount", _requestData.amount*100);  // Amount will in paise
            options.Add("currency", "INR");
            options.Add("receipt", _requestData.receipt);

            /*options.Add("payment_capture", "0"); */// 1 - automatic  , 0 - manual
                                                     //options.Add("notes", "-- You can put any notes here --");
            Razorpay.Api.Order orderResponse = client.Order.Create(options);
            //string orderId = orderResponse["id"].ToString();

            // Create order model for return on view
            OrderModel orderModel = new OrderModel
            {
                orderId = orderResponse.Attributes["id"],
                razorpayKey = "rzp_live_ev8z1QwsGlqw9a",
                amount = _requestData.amount,
                currency = "INR",
                //name = _requestData.name,
                //email = _requestData.email,
                //contactNumber = _requestData.contactNumber,
                //address = _requestData.address,
                //description = "Testing description"
            };

            // Return on PaymentPage with Order data
           
            return Json(orderModel, JsonRequestBehavior.AllowGet);
        }

        public class OrderModel
        {
            public string orderId { get; set; }
            public string razorpayKey { get; set; }
            public decimal amount { get; set; }
            public string currency { get; set; }
            //public string name { get; set; }
            //public string email { get; set; }
            //public string contactNumber { get; set; }
            //public string address { get; set; }
            //public string description { get; set; }
        }



    }
}