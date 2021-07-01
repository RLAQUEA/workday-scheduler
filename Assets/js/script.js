
//make sure everything is inside ready function to load html first
$(document).ready(function () {
function getCurrentHour() {
// this displays the current date and time 
$("#current-time").text(moment().format("MMM Do, YYYY"));
}
getCurrentHour();
var container = $("textarea");
var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
        console.log("click");
//saveBtn is reference point for html
//this references saveBtn since it's inside of saveBtn block
//in each block, go to .saveBtn, to siblings and to .description & get value
var textAreaValue = $(this).siblings(".description").val()
var divTimeKey = $(this).parent().attr("id")

//in browser in local storage, set key/value pair (item) w/ first arg is key, second is value associated w/ that key
window.localStorage.setItem(divTimeKey, textAreaValue)
})
//into id 9 then description, place value of local storage that has a key of 9
$("#9 .description").val(window.localStorage.getItem("9"))
$("#10 .description").val(window.localStorage.getItem("10"))
$("#11 .description").val(window.localStorage.getItem("11"))
$("#12 .description").val(window.localStorage.getItem("12"))
$("#13 .description").val(window.localStorage.getItem("13"))
$("#14 .description").val(window.localStorage.getItem("14"))
$("#15 .description").val(window.localStorage.getItem("15"))
$("#16 .description").val(window.localStorage.getItem("16"))
$("#17 .description").val(window.localStorage.getItem("17"))

//changes color of hour time block textarea
function updateCSS() {
//grabs current hour 
var hour = moment().hours();

//targets each hour block
$(".time-block").each(function(){
//gets value of id and parseInt changes it from string to int
var divTimeBlock = parseInt($(this).attr("id"));
if(divTimeBlock < hour) {
 $(this).addClass("past");       
}
//this checks to see if the hour selected matches current hour 
else if(divTimeBlock === hour) {
$(this).removeClass("past")        
$(this).addClass("present");
}
//this checks to see if time selected is greater than the current time 
else {
$(this).removeClass("present");
$(this).addClass("future");
}
})
}
updateCSS();
});
