$(document).ready(function () {
    //displaying the date and time at the top in the header of the page
//the function to create the date and time for the header
function displayDate() {
    $("#currentDay").html(moment().format("MM DD YYYY, h:mm a"));
} setInterval(displayDate, 1000);
}
)