
var IsActive = false;

 $(document).ready(function () {
     getLoanProvider();
     if (localStorage.getItem('razorpay_payment_id') != undefined) {
        
         let today = new Date().toISOString().slice(0, 10)


             var payment_id = 0;
             var customer_id = localStorage.getItem("customer_id");
             var loan_information_id = localStorage.getItem("loan_information_id");

             var amount = localStorage.getItem("amount");
             var payment_mode = localStorage.getItem("payment_mode");
         var payment_references = localStorage.getItem('razorpay_payment_id');


             var isValidationPassed = true;

             if (isValidationPassed == true) {
                 var requestData =
                 {
                     "payment_id": payment_id,
                     "customer_id": customer_id,
                     "loan_information_id": loan_information_id,
                     "payment_date": today,
                     "amount": amount,
                     "payment_mode": "razorpay",
                     "payment_references": payment_references,

                 };
                 var jsonData = JSON.stringify(requestData);
                 $.ajax({
                     url: 'http://confirmfinance-api.alongx.com/api/SubscriptionPayment',
                     type: 'POST',
                     dataType: 'json',
                     data: jsonData,
                     contentType: "application/json; charset=utf-8",
                     beforeSend: function () {
                     },
                     success: function (result) {
                        localStorage.removeItem('razorpay_payment_id');
    
                         $("#" + loan_information_id + " ").attr('disabled', 'disabled');
                     },
                     error: function (XMLHttpRequest, textStatus, errorThrown) {
                         alert("Error on saving Loan Information. Please try again.");
                     },
                     complete: function () {
                     },
                 });
             }
  
     }
    //if (localStorage.getItem('LoginStatus')==="true") { 
    //    $("#name").text(localStorage.getItem('custName'));
    //    custId = localStorage.getItem('custId');
      
    //}
     editEntry();

    //var query = window.location.search.substring(1);
    //var vars = query.split('&');
    //for (var i = 0; i < vars.length; i++) {
    //    var pair = vars[i].split('=');

    //    customer_id = pair[1];
    //}
   
    //api_url = $("#hfApiUrl").val();
    //$("#btnRegister").click(function () {
    //    saveItem(); 

    //});
    //$("#btnReset").click(function () {
    //    debugger;
    //    resetPassword();
    //});
    $("#btnLogin").click(function () {
        Login();
    }); 
    $("#btnCustomerInfo").click(function () {
        saveCustomerInfo();
    });
    
    // $("#btnLoanInfo").click(function () {
    //     debugger;
    //    saveLoanInfo();
    //});
});



function saveItem() {
    var validation_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    var validation_pincode = /(^\d{6}$)/;
    //var validation_adhar = /^ [2 - 9]{ 1}[0 - 9]{ 3 } \\s[0 - 9]{ 4 } \\s[0 - 9]{ 4 } $ /;
    var adharminlen = 12;
    var validation_pancard = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    var customer_id = $("#customer_id").val();
    var name = $("#cname").val();
    var mobile_number = $("#contact_number").val();
    var email = $("#email").val();
    var your_earning_per_month = $("#your_earning_per_month").val();
    var full_address = $("#full_address").val();
    var pincode = $("#pincode").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var adhaar_card = $("#adhaar_card").val();
    var pan_card = $("#pan_card").val();
    var alternate_mobile_number = $("#alternate_mobile_number").val();
    var occupation = $("#occupation").val();
    var gender = $("#gender").val();
    var date_of_birth = $("#date_of_birth").val();
    var date_of_registration = $("#date_of_registration").val();
    var password = $("#password").val();
 
    var isValidationPassed = true;

    if (name.trim() == "") {
        isValidationPassed = false;
        $('#msg').text("Full Name is required..");
        $("#name").focus();
    }
    else if (email == "") {
        isValidationPassed = false;
        $("#msg").text("email is required");
        $("#email").focus();
    }
    else if (!validation_email.test(email)) {
        isValidationPassed = false;
        $("#msg").text("email should be valid..");
        $("#email").focus();
    }
    else if (pincode == "") {
        isValidationPassed = false;
        $("#msg").text("Pincode is required");
        $("#pincode").focus();
    }
    else if (!validation_pincode.test(pincode)) {
        isValidationPassed = false;
        $("#msg").text("Pincode should be valid..");
        $("#pincode").focus();
    }
    else if (adhaar_card == "") {
        isValidationPassed = false;
        $("#msg").text("Aadhar is required");
        $("#adhaar_card").focus();
    }
    else if (adhaar_card.replace(/ /g, '').length < 12) {
        debugger;
        isValidationPassed = false;
        $("#msg").text("Aadhar is not valid");
        $("#adhaar_card").focus();
    }
    //else if (adhaar_card > adharminlen) {
    //    isValidationPassed = false;
    //    $("#msg").text("Aadhar is not valid");
    //    $("#adhaar_card").focus();
    //}
    else if (pan_card == "") {
        isValidationPassed = false;
        $("#msg").text("Pancard is required");
        $("#pan_card").focus();
    }
    else if (!validation_pancard.test(pan_card)) {
        isValidationPassed = false;
        $("#msg").text("Pancard should be valid..");
        $("#pan_card").focus();
    }
    //else if (!validation_adhar.test(adhaar_card)) {
    //    isValidationPassed = false;
    //    $("#msg").text("Aadhar should be valid..");
    //    $("#adhaar_card").focus();
    //}
    //else if (pincode != 6) {
    //    isValidationPassed = false;
    //    $("#msg").text("Pincode should be valid..");
    //    $("#pincode").focus();
    //}
   
    if (isValidationPassed == true) {
        var requestData =
        {
            "customer_id": customer_id,
            "name": name,
            "mobile_number": mobile_number,
            "email": email,
            "your_earning_per_month": your_earning_per_month,
            "full_address": full_address,
            "pincode": pincode,
            "city": city,
            "state": state,
            "adhaar_card": adhaar_card,
            "pan_card": pan_card,
            "alternate_mobile_number": '',
            "occupation": '',
            "gender": '',
            "date_of_birth":"2022-10-10" ,
            "date_of_registration":"2022 - 10 - 10" ,
            "password": '',

        };
        var jsonData = JSON.stringify(requestData);
        $.ajax({
            url: 'http://confirmfinance-api.alongx.com/api/Customer',
            type: 'POST',
            dataType: 'json',
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            beforeSend: function () {
               // runLoader();
            },
            success: function (result) {
                if (result.status == true) {
                    //showData();
                   // stopLoader();

                }
                else {
                    alert(result.message);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //stopLoader();
                alert("Error on saving . Please try again.");
            },
            complete: function () {
               // stopLoader();
                window.location.href = window.location.href;

            },
        });
    }
}

function saveCustomerInfo() {
    var customer_id = $("#customer_id").val();
    var name = $("#cname").val();
    var email = $("#email").val();
    var your_earning_per_month = $("#your_earning_per_month").val();
    var full_address = $("#full_address").val();
    var pincode = $("#pincode").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var adhaar_card = $("#adhaar_card").val();
    var pan_card = $("#pan_card").val();


    var isValidationPassed = true;

    if (isValidationPassed == true) {
        var requestData =
        {
            "customer_id": customer_id,
            "name": name,
            "email": email,
            "your_earning_per_month": your_earning_per_month,
            "full_address": full_address,
            "pincode": pincode,
            "city": city,
            "state": state,
            "adhaar_card": adhaar_card,
            "pan_card": pan_card
        };
        var jsonData = JSON.stringify(requestData);
        $.ajax({
            url: 'http://confirmfinance-api.alongx.com/api/Customer',
            type: 'PUT',
            dataType: 'json',
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            beforeSend: function () {
                //runLoader();
            },
            success: function (result) {
                // stopLoader("#save-item");
                if (result.status == true) {
                    //alert(result.message);
                    showData();
                    //stopLoader();
                    //Silent Activity Log
                    //if (id == 0) {
                    //    saveActivityLog("Added a new user", requestData);
                    //}
                    //else {
                    //    saveActivityLog("Updated the user entry", requestData);
                    //}
                }
                else {
                    alert(result.message);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //stopLoader();
                alert("Error on saving CustomerInfo. Please try again.");
            },
            complete: function () {
                //stopLoader();
                window.location.href = '/home/CustomerInfo';
            },
        });
    }
}

function editEntry() {

    var mobile = localStorage.getItem("mobile_number");
 
    $("#contact_number").val(mobile);

    $("#contact_number").prop("readonly", true);
    //alert("ok");
    $.ajax({
        url: 'http://confirmfinance-api.alongx.com/api/Customer?mobile_number=' + mobile,
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        beforeSend: function () {
            //runLoader("#modal-body", "Loading '<b>" + $("#hf_name_" + id + "").val() + "'</b>...");
            //clearEntry();
        },
        success: function (result) {
   
            //stopLoader("#modal-body");
            $("#customer_id").val(result[0].customer_id);
            $("#cname").val(result[0].name);
            $("#email").val(result[0].email);
            $("#your_earning_per_month").val(result[0].your_earning_per_month);
            $("#full_address").val(result[0].full_address);
            $("#pincode").val(result[0].pincode);
            $("#city").val(result[0].city);
            $("#state").val(result[0].state);
            $("#adhaar_card").val(result[0].adhaar_card);
            $("#pan_card").val(result[0].pan_card);
           
         
            localStorage.setItem("customer_id", result[0].customer_id);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            //stopLoader("#modal-body");
            //error("Error on loading category '<b>" + $("#hf_name_" + id + "").val() + "</b>'. Please try again.", "modal-body");
        },
        complete: function () {
            //stopLoader("#modal-body");
        },
    });
}

function getLoanProvider() {
    $('#Loanprovider_head').append(new Option('Select Laon Provider', '0'));
    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'http://confirmfinance-api.alongx.com/api/LoanProviders?loan_provider_id=0',
        "bProcessing": true,
        "bServerSide": true,
        beforeSend: function () {
        },
        success: function (result) {
            console.log.result;
            result.forEach(function (item, index) {
                if (item !== "undefined") {
                    var optionItem = "";
                    var name = name;
                    if (item.is_default === true) {
                        default_company_account = item.loan_provider_id;
                        optionItem = '<option value="' + item.loan_provider_id + '" selected>' + item.loan_provider_name + '</option>';
                    }
                    else {
                        optionItem = '<option value="' + item.loan_provider_id + '" >' + item.loan_provider_name + '</option>';
                    }
                    $("#Loanprovider_head").append(optionItem);
                }
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        complete: function () {
        },
    });
}

function saveLoanInfo() {
    debugger;
    var loan_information_id = $("#loan_information_id").val();
    var customer_id = $("#customer_id").val();
    var loan_provider_id = $("#Loanprovider_head").val();
    var lender_type = $("#lender_type").val();
    var loan_service_provider = $("#Loanprovider_head").val();
    var regulated_entity = $("#regulated_entity").val();
    var loan_type = $("#loan_type").val();
    var loan_tenure = $("#loan_tenure").val();
    var loan_delay = $("#loan_delay").val();
    var toatl_emis = $("#toatl_emis").val();
    var principal_amount = $("#principal_amount").val();
    var processing_fee = $("#processing_fee").val();
    var Insurance_amount = $("#Insurance_amount").val();
    var interest = $("#interest").val();
    var other_charges = $("#other_charges").val();
    var total_outstanding_amount = $("#total_outstanding_amount").val();
    var loan_document = $("#loan_document").val();
    var settlement_reason = $("#settlement_reason").val();
    var payment_status = $("#payment_status").val();
    var resolve_status = $("#resolve_status").val();
    var loan_account_number = $("#loan_account_number").val();
    var isValidationPassed = true;
   
    //if (lender_type === "" || lender_type == undefined) {
    //    isValidationPassed = false;
    //    loader("Type of lender is required..");
    //    $("#lender_type").focus();
    //}
    if (lender_type === "" || lender_type === undefined) {
        isValidationPassed = false;
        $("#err").text("Lender type is required");
        $("#lender_type").focus();
    }
    //else if (loan_service_provider === "" || loan_service_provider === undefined) {
    //    isValidationPassed = false;
    //    $("#err").text("Loan Service provider is required");
    //    $("#loan_service_provider").focus();
    //}
    else if (regulated_entity === "" || regulated_entity === undefined) {
        isValidationPassed = false;
        $("#err").text("Regulated entity is required");
        $("#regulated_entity").focus();
    }
   
    else if (loan_type === "" || loan_type === undefined) {
        isValidationPassed = false;
        $("#err").text("Loan type entity is required");
        $("#loan_type").focus();
    }
    else if (loan_tenure === "" || loan_tenure === undefined) {
        isValidationPassed = false;
        $("#err").text("Loan tenure is required");
        $("#loan_tenure").focus();
    }
    else if (loan_delay === "" || loan_delay === undefined) {
        isValidationPassed = false;
        $("#err").text("Loan delay is required");
        $("#loan_delay").focus();
    }
    else if (principal_amount === "" || principal_amount === undefined) {
        isValidationPassed = false;
        $("#err").text("Principal amount is required");
        $("#principal_amount").focus();
    }

    if (isValidationPassed == true) {
        var requestData =
        {
            "loan_information_id": loan_information_id,
            "customer_id": customer_id,
            "loan_provider_id": loan_provider_id,
            "lender_type": lender_type,
            "loan_service_provider": loan_service_provider,
            "regulated_entity": regulated_entity,
            "loan_type": loan_type,
            "loan_tenure": loan_tenure,
            "loan_delay": loan_delay,
            "toatl_emis": toatl_emis,
            "principal_amount": principal_amount,
            "processing_fee": processing_fee,
            "Insurance_amount": Insurance_amount,
            "interest": interest,
            "other_charges": other_charges,
            "total_outstanding_amount": total_outstanding_amount,
            "loan_document": loan_document,
            "settlement_reason": settlement_reason,
            "payment_status": 'No',
            "resolve_status": 'No',
            "loan_account_number": loan_account_number,

        };
        var jsonData = JSON.stringify(requestData);
        $.ajax({
            url: 'http://confirmfinance-api.alongx.com/api/LoanInformation',
            type: 'POST',
            dataType: 'json',
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            beforeSend: function () {
                //runLoader();
            },
            success: function (result) {
                // stopLoader("#save-item");
                if (result.status == true) {
                    //alert(result.message);
                   // showData();
                    //stopLoader();
                    //Silent Activity Log
                    //if (id == 0) {
                    loader("Loan Information Saved Sucessfully..");
                  
                    //    saveActivityLog("Added a new user", requestData);
                    //}
                    //else {
                    //    saveActivityLog("Updated the user entry", requestData);
                    //}
                }
                else {
                    alert(result.message);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //stopLoader();
                alert("Error on saving Loan Information. Please try again.");
            },
            complete: function () {
                //stopLoader();
                window.location.href = window.location.href;
                //resetSaveItemFields();
               
            },
           
        });
    }
}

function Login() {
    var mobile_number = $("#mobile_number").val();
    var password = $("#password").val();

    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'http://confirmfinance-api.alongx.com/api/CustomerLogin?mobile_number=' + mobile_number +'&password='+password,
        "bProcessing": true,
        "bServerSide": true,

        success: function (response) {
           
            if (response[0].status) {
                $("#name").text(response[0].message);
                localStorage.setItem('custId', response[0].id);
                localStorage.setItem('LoginStatus', response[0].status);
                localStorage.setItem('custName', response[0].message);
                window.location.href = '/home/Great';
            }
            //alert(response[0].message);
            //$("#message").html(response[0].message);
            //$("#id").html(response[0].id);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //stopLoader("#content_area");
            error("Error on listing Customers. Please try again.");
        },
        complete: function () {
            //stopLoader("#content_area");
        }
    });
}

function Logout() {

    localStorage.removeItem('customer_id');
    localStorage.removeItem('name');
    localStorage.removeItem('rzp_device_id');
    localStorage.removeItem('relfLowrEnd');
    localStorage.removeItem('otp');
    localStorage.removeItem('relHigherEnd');
    localStorage.removeItem('status');
    localStorage.removeItem('rzp_checkout_anon_id');
    localStorage.removeItem('total_payable_inclde');
    localStorage.removeItem('currency');
    localStorage.removeItem('mobile_number');
    localStorage.removeItem('amount');
    localStorage.removeItem('subscriptionfee');
    localStorage.removeItem('email');
    localStorage.removeItem('orderId');
    localStorage.removeItem('custMobile');
    localStorage.removeItem('razorpayKey');
    window.location.href='/home';
    //window.location.href = "localstorage-part3.html";
}

    
function sbscribe(loanIfoId) {
    localStorage.setItem("loan_information_id", loanIfoId);
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'http://confirmfinance-api.alongx.com/api/LoanInformation?loan_information_id=' + loanIfoId,
        beforeSend: function () {
            // runLoader();
        },
        success: function (result) {
            console.log(result);
            localStorage.setItem("relfLowrEnd", result.relfLowrEnd);
            localStorage.setItem("relHigherEnd", result.relHigherEnd);
            localStorage.setItem("subscriptionfee", result.subscriptionfee);
            localStorage.setItem("total_payable_inclde", result.total_payable_inclde);
            window.location.href ='/home/Paments';
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //stopLoader();
            alert("Something went wrong!. Please try again.");
        },
        complete: function () {
            // stopLoader();

        },
    });
}

function validate() {
    var mobile_number = $("#mobile_number").val();
    var otp = $("#otp").val();
    //alert("ok");
    $.ajax({
        url: 'http://confirmfinance-api.alongx.com/api/MobileOTP?mobile_number=' + mobile_number,
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        beforeSend: function () {
            //runLoader("#modal-body", "Loading '<b>" + $("#hf_name_" + id + "").val() + "'</b>...");
            //clearEntry();
        },
        success: function (result) {
            console.log(result);
            localStorage.setItem("mobile_number", result.mobile_number);
            localStorage.setItem("otp", result.otp);
            alert(result.otp);

        },

        error: function (XMLHttpRequest, textStatus, errorThrown) {

            //stopLoader("#modal-body");
            //error("Error on loading category '<b>" + $("#hf_name_" + id + "").val() + "</b>'. Please try again.", "modal-body");
        },
        complete: function () {
            //stopLoader("#modal-body");
        },
    });
}

function logi() {

    var otps = localStorage.getItem('otp');

    if (otps == localStorage.getItem("otp")){
       
        window.location.href = '/home/Great';
    }
}

function resetSaveItemFields() {
    $("#loan_information_id").val(0);
    $("#lender_type").val("");
    $("#regulated_entity").val("");
    $("#loan_type").val("");
    $("#loan_tenure").val("");
    $("#toatl_emis").val("");
    $("#loan_delay").val("");
    $("#principal_amount").val("");
    $("#processing_fee").val("");
    $("#Insurance_amount").val("");
    $("#other_charges").val("");
    $("#total_outstanding_amount").val("");
    $("#loan_document").val("");
    $("#settlement_reason").val("");
    $("#payment_status").val("");
    $("#resolve_status").val("");
    $("#interest").val("");
    $("#loan_account_number").val("");
}

function keyupFunction() {
    var principal_amount = $("#principal_amount").val();
    var processing_fee = $("#processing_fee").val();
    var Insurance_amount = $("#Insurance_amount").val();
    var interest = $("#interest").val();
    var other_charges = $("#other_charges").val();
    var total_outstanding_amount = parseInt(principal_amount) + parseInt(processing_fee) + parseInt(Insurance_amount) + parseInt(interest) + parseInt(other_charges);
    $("#total_outstanding_amount").val(total_outstanding_amount);
    $("#total_outstanding_amount").prop("readonly", true);
}
