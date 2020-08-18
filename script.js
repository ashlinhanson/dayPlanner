$(document).ready(function () {

//the function to create the date and time for the header
function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
});

//local storage function
$(".saveBtn").click(function(){   
    var input = $(this).siblings(".time-block").val()
    var whichHour = $(this).siblings(".time-block").attr("id")
    sessionStorage.setItem(whichHour,input);

});

//hour by hour color changing function





// to set local storage
// localStorage.setItem('data', JSON.stringify(data));

//to get local storage
// var data = JSON.parse(localStorage.getItem('data));

//to delete local storage
// localStorage.removeItem('data');

//need to add eventlisteners to buttons to save user input and append it to the timeblock
//need color changes based on future or past.


