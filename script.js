$(document).ready(function () {
    //displaying the date and time at the top in the header of the page
//the function to create the date and time for the header
function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
})




$(".saveBtn").on("click", function(){
    

})

localStorage.setItem$("#input9")




// to set local storage
// localStorage.setItem('data', JSON.stringify(data));

//to get local storage
// var data = JSON.parse(localStorage.getItem('data));

//to delete local storage
// localStorage.removeItem('data');

//need to add eventlisteners to buttons to save user input and append it to the timeblock
//need color changes based on future or past.


+
