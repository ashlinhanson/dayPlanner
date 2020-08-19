$(document).ready(function () {

//the function to create the date and time for the header
function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);




//local storage function
    $(".saveBtn").click(function(){   
        var input = $(this).siblings(".time-block").val();
        var whichHour = $(this).siblings(".time-block").attr("id");
        localStorage.setItem(whichHour, input);

    });

//hour by hour color changing function
        var currentHour = moment().hours();
        console.log(currentHour);

    $(".time-block").each(function (){
            var calendarHour = parseInt($(this).attr("id"));
            console.log(calendarHour);
        

            if (calendarHour === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
            else if (calendarHour > currentHour) {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
            else {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
        
    });

        $("#9").val(localStorage.getItem("9"))
        $("#10").val(localStorage.getItem("10"))
        $("#11").val(localStorage.getItem("11"))
        $("#12").val(localStorage.getItem("12"))
        $("#13").val(localStorage.getItem("13"))
        $("#14").val(localStorage.getItem("14"))
        $("#15").val(localStorage.getItem("15"))
        $("#16").val(localStorage.getItem("16"))
        $("#17").val(localStorage.getItem("17"))



   
});



