
//make sure everything is inside ready function to load html first
$(document).ready(function () {
function getCurrentHour() {
thisHour = moment().format("hh");

// if(test < hour) {
// set class to past 

}

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

// this displays the current date and time 
setInterval(function() {
        var now = moment().format("MMM Do, YYYY hh:mm:ss");
        hour = moment().format("hh");
        var timeNOW = $("#current-time");
        timeNOW.text(now);
        getCurrentHour();
}
, 1000);

// this one will tell what hour it is 

// else if(test > hour) {
// //set class to future 


// }
// else {


// //set class to present
// }
// };

// //need key and value to access local storage 


});









// currentHour.setAttribute(".past")
// currentHour.setAttribute(".present")
// currentHour.setAttribute("class", ".future")

// if (hour > moment("9").format("hh")) {
// }
// let workHours =  [9, 10, 11, 12, 13, 14, 15, 16]
// if(currentHour === now) {
// document.getElementById("#current-time").style["class", ".present"];
// console.log(workHours[0]);      


// document.getElementById("#hour-nine")
// document.getElementById("#hour-ten")
// document.getElementById("#hour-eleven")
// document.getElementById("#hour-twelve")
// document.getElementById("#hour-thirteen")
// document.getElementById("#hour-fourteen")
// document.getElementById("#hour-fifteen")
// document.getElementById("#hour-sixteen")





