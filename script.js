//when page loads, run this script!
$(document).ready(function() {



// displays current planner day and time
var plannerDay = moment();
$('#currentDay').text(plannerDay.format("dddd, MMMM Do YYYY, h:mm a"));

// function to change color based on past, present and future
var currentTime = parseInt(moment().format('H'));
$('.time-block').each(function () {
    var hourSlot = parseInt($(this).attr('id'));
    if (hourSlot > currentTime) {
        $(this).addClass("future");
    } else if (hourSlot < currentTime ) {
        $(this).addClass("past");
    } else if (hourSlot === currentTime) {
        $(this).addClass("present");
    };

})



// save task to hour it has been assigned to

function handleSaveTask (event) {
    event.preventDefault();
    var taskEl = $(this).siblings(".time-block").val();

    var hourEl = $(this).siblings(".time-block").attr("id");

    localStorage.setItem(hourEl, taskEl);
}

$("button").on('click', handleSaveTask);

});