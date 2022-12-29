var IsActive = false;
$(document).ready(function () {
 

    showLoanInfo();
});

function showLoanInfo() {
    var customer_id = localStorage.getItem("customer_id");
    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'https://localhost:44306/api/GetLoanInformation?customer_id=' + customer_id,
        "bProcessing": true,
        "bServerSide": true,
        success: function (response) {
            //console.log(response);
            //console.log(response);
            var datatt = response;
            //console.log(datatt[1]);
            if (response.length > 0) {
                for (var i = 0; i <= response.length; i++) {
                    var htmlNode = "";
                    htmlNode += '<div class="card  overflow-hidden " style="margin-bottom:25px;box-shadow: 1px 1px 15px grey;"> <div class="card-body"style="background-color:rgba(0,0,0,0.6); "><div class="table-responsive market-values" ><div class="item-group" >';
                    htmlNode += '<div class="item-group"  width="50%" style="font-size:14px;color:white;font-weight:;">Loan A/C :&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ' + response[i].loan_account_number + '</div>';
                    htmlNode += '<div class="item-group"  width="50%" style="font-size:14pxy;color:white;">Lender Type:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + response[i].lender_type + '</div>';
                    htmlNode += '<div class="item-group"  width="50%" style="font-size:14pxy;color:white;">Loan Type:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ' + response[i].loan_type + '</div>';
                    htmlNode += '<div class="item-group"  width="50%" style="border-bottom:1px solid black;"></div>';
                    htmlNode += '<div class="item-group"  style="color:white;" >Total EMIs:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  ' + response[i].toatl_emis + '</div>';
                    htmlNode += '<div class="item-group"  width="50%" style="border-bottom:1px solid black;"></div>';
                    htmlNode += '<div class="item-group" width="50%" style="color:white;">Loan Delay:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  ' + response[i].loan_delay + '</div>';
                    htmlNode += '<div class="item-group" width="50%" style="color:white;">Principal Aamount:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ' + response[i].principal_amount + '</div>';
                    htmlNode += '<div class="item-group" width="50%" style="color:white;">Processing Fee:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ' + response[i].processing_fee + '</div>';
                    htmlNode += '<div class="item-group" width="50%" style="color:white;">Insurance Amount:&nbsp&nbsp&nbsp&nbsp&nbsp ' + response[i].Insurance_amount + '</div>';
                    htmlNode += '<div class="item-group" width="50%" style="color:white;">Other Charges:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ' + response[i].other_charges + '</div>';
                    htmlNode += '<div class="item-group" width="50%" style="color:white;">Outstanding Amount:&nbsp ' + response[i].total_outstanding_amount + '</div>';
                    htmlNode += '<div class="item-group" width="50%" style="color:white;">Settlement Reason:&nbsp&nbsp&nbsp ' + response[i].settlement_reason + '</div>';
                    htmlNode += '<div class="item-group"  width="50%" style="border-bottom:1px solid black;"></div>';
                    htmlNode += '<div class="item-group" width="50%" style="color:white;">Payment Status:&nbsp&nbsp&nbsp&nbsp&nbsp ' + response[i].payment_status + '</div>';
                    htmlNode += '<div class="item-group" width="50%" style="color:white;">Settlement Status:&nbsp&nbsp&nbsp&nbsp&nbsp ' + response[i].resolve_status + '</div>';
                    //htmlNode += '<div class="item-group"  width="50%" style=""><button class="btn bg-primary m-2 text-white" data-bs-toggle="modal" data-bs-target="#loaninfo">Edit</button> <button class="btn bg-primary m-2 text-white" onclick="sbscribe(' + response[i].loan_information_id +')" data-bs-toggle="modal" data-bs-target="#loaninfo">Subscribe</button> </div>';
                    htmlNode += '<div class="item-group"  width="50%" style=""><button class="btn bg-primary m-2 text-white" id=' + response[i].loan_information_id + ' onclick="sbscribe(' + response[i].loan_information_id + ')">Subscribe</button> </div>';
                    //htmlNode += '<div class="item-group"  width="50%" style=""> <div class="col-lg-4"> <select class="form-control w-10 h-10" id="loan_service_provider"><option value = "0" > Select loan Service Provider</option ><option value="List Not Provided">List Not Provided</option><option value="List Will Provide">List Will Provide</option></select > </div> </div>';

                    //htmlNode += '<div class="item-group "  width="50%" style=""><button class="btn bg-primary m-2 text-white" onclick="sbscribe(' + response[i].loan_information_id +')" data-bs-toggle="modal" data-bs-target="#loaninfo">Subscribe</button> </div>';

                    htmlNode += '</div></div></div></div>';
                    $('#content_area').append(htmlNode);
                    if (response[i].payment_status === 'Paid') {
                        $("#" + response[i].loan_information_id + " ").attr('disabled', 'disabled');
                    }
                    

                }
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            
        },
        complete: function () {
        }
    });
}