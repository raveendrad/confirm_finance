function loader(txt) {
    $("#loading").show()
    $("#text").text(txt);

    setTimeout(function () {
        $("#loading").hide()
    }, 3000);
} 

	
 

