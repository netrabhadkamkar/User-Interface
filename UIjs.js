/// <reference path="UI.html" />
/// <reference path="UI.html" />
/// <reference path="UI.html" />
/// <reference path="UI.html" />

$(document).ready(function () {
    $("#fbi1").hide();
    $("#cia1").hide();
    $("#se1").hide();
    $("#locations").hide();
    $("#date").hide();
    $("#phone").hide();
    $("#person").hide();



    $("#hide").click(function () {

        $("#documents").hide();
        $("#hide").hide();
        $("#show").show();
        $("#p1").hide();
        debugger;

        $.ajax({
            type: "GET",
            url: "/uiApiController/tryy/",
            ContentType: 'application/json;utf-8',
            async: false

        }).done(function (resp) {
            alert("In done of ajax");


        }).error(function (xhr, textStatus, errorThrown) {



        });


    });

    $("#clear").click(function () {

        //alert("Clicked");
        $('#fbi1').hide();
        $('#cia1').hide();
        $('#se1').hide();

        $("#static1").show();
        //$('#div2').empty();
    });

    $("#loginbtn").click(function () {

        var name = $("#usrname").val();

        var pass = $("#pass").val();


        if (name === "sun" && pass === "sun@123") {

            window.location.href = "UI.html";




        }
        else {
            alert("Enter correct username and password");
        }
    });






    $("#show").click(function () {

        $("#documents").show();
        $("#hide").show();
        $("#show").hide();
        $("#p1").show();
    });


    $("#submit").click(function () {
        var doc = $("#nm1").val();
        alert("You are about to add the  document" + doc);

    })

    $("#fbi").click(function () {
        $("#static1").hide();


        $("#fbi1").show();
        $("#clear").show();
    })

    $("#cia").click(function () {
        $("#static1").hide();

        $("#cia1").show();
        $("#clear").show();
    })


    $("#se").click(function () {
        $("#static1").hide();

        $("#se1").show();
        $("#clear").show();
    })


});



function add(num1, num2) {
    alert("In add function");
    return num1 + num2;
}
function ddselection(value) {
    //  alert(value);
    if (value === "location") {
        //alert("You have selected location");
        $("#locations").show();

    }
    if (value === "date") {
        //alert("You have selected date");
        $("#date").show();
    }
    if (value === "phone") {
        //alert("You have selected phone");
        $("#phone").show();
    }
    if (value === "person") {
        //alert("You have selected person");
        $("#person").show();
    }



}



function onFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}