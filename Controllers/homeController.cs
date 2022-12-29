using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Data;
using System.Net.Http;
using System.Net.Http.Headers;
using confirm_finance.Models;

namespace confirm_finance.Controllers
{
    public class homeController : Controller
    {
        // GET: home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult CustomerInfo()
        {
            return View();
        }
        public ActionResult Great()
        {
            return View();
        }
        public ActionResult ItWorks()
        {
            return View(); 
        }

        public ActionResult Paments()
        {
            return View();
        }
        public ActionResult Checkout()
        {
            return View();
        }
        public ActionResult PaymentSuccess()
        {
            return View();
        }
        public ActionResult Log()
        {
            return View();
        }
        public ActionResult Terms()
        {
            return View();
        }
        public ActionResult Privacy()
        {
            return View();
        }
        //[HttpPost]
        //public async Task<ActionResult> SaveLoanInfo(HttpPostedFileBase display_pic_file, LoanInfoModel requestObj)
        //{
        //    DBResponse dbResponse = new DBResponse();
        //    try
        //    {
        //        if (display_pic_file != null)
        //        {
        //            if (display_pic_file.ContentLength > 0)
        //            {
        //                Random random = new Random();
        //                //string randomName = random.Next(1, 999).ToString()+ random.Next(1, 999).ToString();
        //                string fileName = Path.GetFileName(display_pic_file.FileName);
        //                string bannerFile = Path.Combine(this.Server.MapPath("~/FILE-SYSTEM"), fileName);

        //                string dbImageFileUrl = ConfigurationManager.AppSettings["storage_url"] + "/FILE-SYSTEM" + fileName;
        //                requestObj.file = dbImageFileUrl;
        //                loan_document.SaveAs(bannerFile);
        //            }
        //        }
        //        using (var client = new HttpClient())
        //        {
        //            if (requestObj.file == null)
        //            {
        //                requestObj.file = "noimage.jpg";
        //            }

        //            client.BaseAddress = new Uri(ConfigurationManager.AppSettings["api_url"]);
        //            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        //            HttpResponseMessage response = new HttpResponseMessage();
        //            response = await client.PostAsJsonAsync("", requestObj).ConfigureAwait(false);
        //            if (response.IsSuccessStatusCode)
        //            {
        //                string result = response.Content.ReadAsStringAsync().Result;
        //                DBResponse entity = new JavaScriptSerializer().Deserialize<DBResponse>(result);
        //                if (entity.status)
        //                {
        //                    dbResponse.status = entity.status;
        //                    dbResponse.message = entity.message;
        //                }
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        dbResponse.status = false;
        //        dbResponse.message = ex.Message;
        //    }
        //    if (dbResponse.status == true)
        //    {
        //        TempData["CallBackPacket-Cat-status"] = "Success";
        //    }
        //    else
        //    {
        //        TempData["CallBackPacket-Cat-status"] = "Fail";
        //    }
        //    TempData["CallBackPacket-Cat-message"] = dbResponse.message;
        //    return (ActionResult)this.RedirectToAction("categories", "appsettings");
        //}

    }
}