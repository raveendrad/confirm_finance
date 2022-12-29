$(document).ready(function () {

    //$("#btnState").click(function () {
    //    debugger;
    //    get_details();
    //});
});



//document.addEventListener("DOMContentLoaded", function (event) {
//    function searchPin() {
//        let pin = document.getElementById("text").value;
//        $.getJSON("https://api.postalpincode.in/pincode/" + pin, function (data) {
//            createHTML(data);
//        })
//        function createHTML(data) {
//            var htmlElements = " ";
//            var msg = "";
//            msg += '<div id="msg">' + data[0].Message + '<span id="close">X</span></div>'
//            if (data[0].PostOffice && data[0].PostOffice.length) {
//                for (var i = 0; i < data[0].PostOffice.length; i++) {
//                    if (data[0].PostOffice.length > 3) {
//                        document.getElementById("mkslider").classList.add("sliders");
//                    }
//                    else {
//                        document.getElementById("mkslider").removeAttribute("class");
//                    }
//                    htmlElements += '<div class="col-sm-4"><div class="card"><div class="list-group"><h4>' + data[0].PostOffice[i].Name + '<small class="pull-right underline">' + data[0].PostOffice[i].Block + '</small></h4><p>District: <span class="pull-right">' + data[0].PostOffice[i].District + '</span></p><p>PostOffice :<span class="pull-right">' + data[0].PostOffice[i].State + '</span></p></div></div></div></div>'
//                }
//            }
//            else {
//                alert('Enter Valid pincode');
//            }
//            var htmlView = document.getElementById("mkslider");
//            htmlView.innerHTML = htmlElements;
//            var msgView = document.getElementById("total-msg");
//            msgView.innerHTML = msg;
//            createSlider();
//        }
//        setTimeout(function () {
//            $('#close').trigger('click');
//        }, 3000);
//    }

//    $(document).on("click", '#close', function () {
//        $('#total-msg').remove();
//    });

//    function createSlider() {
//        $('.sliders').slick({
//            dots: false,
//            infinite: false,
//            speed: 300,
//            slidesToShow: 3,
//            arrows: true,
//            slidesToScroll: 1,
//            autoplay: true,
//            responsive: [
//                {
//                    breakpoint: 600,
//                    settings: {
//                        slidesToShow: 2,
//                        slidesToScroll: 1
//                    }
//                },
//                {
//                    breakpoint: 480,
//                    settings: {
//                        slidesToShow: 1,
//                        slidesToScroll: 1
//                    }
//                }
//            ]
//        });
//    }
//    document.getElementById("submit").addEventListener("click", searchPin);
//});


function get_details() {
    debugger;
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'http://postalpincode.in/api/pincode=' + pincode,
        beforeSend: function () {
            // runLoader();
        },
        success: function (result) {

            console.log(result);
           
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