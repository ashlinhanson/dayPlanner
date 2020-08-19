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
    localStorage.setItem(whichHour, input);

});

//hour by hour color changing function
// {1 : $("#input09").attr("data-hour").moment("9:00am")("HH")}, 
//     {2 : $("#input10").attr("data-hour").moment("10:00am")("HH")}, 
//     {3 : $("#input11").attr("data-hour").moment("11:00am")("HH")},
//     {4 : $("#input12").attr("data-hour").moment("12:00pm")("HH")},
//     {5 : $("#input13").attr("data-hour").moment("1:00pm")("HH")},
//     {6 : $("#input14").attr("data-hour").moment("2:00pm")("HH")},
//     {7 : $("#input15").attr("data-hour").moment("3:00pm")("HH")},
//     {8 : $("#input16").attr("data-hour").moment("4:00pm")("HH")},
//     {9 : $("#input17").attr("data-hour").moment("5:00pm")("HH")

function hourColors(){
var hourBlocks = [
    {1 : $("#input09")}, 
    {2 : $("#input10")}, 
    {3 : $("#input11")},
    {4 : $("#input12")},
    {5 : $("#input13")},
    {6 : $("#input14")},
    {7 : $("#input15")},
    {8 : $("#input16")},
    {9 : $("#input17")}
    ];
var matchingHour = Number(moment().format("HH"));

for (var i = 0; i < 10; i++) {
    let hour = hourBlocks[0][i];

    if (parseInt(hour) === parseInt(matchingHour)) {
        hour.addClass("present");
    }
    if (parseInt(hour) > parseInt(matchingHour)) {
        hour.addClass("past");
    }
    if (parseInt(hour) < parseInt(matchingHour)) {
        hour.addClass("future");
    }
}
};

console.log(hourColors());





// to set local storage
// localStorage.setItem('data', JSON.stringify(data));

//to get local storage
// var data = JSON.parse(localStorage.getItem('data));

//to delete local storage
// localStorage.removeItem('data');

//need color changes based on future or past.


