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
var saveTask = $()
var hourTaskEl = $('input[name="hour-input"]');
function handleSaveTask (event) {
    event.preventDefault();
    var task = hourTaskEl.val();
}

$('button').on('click', function() {

})