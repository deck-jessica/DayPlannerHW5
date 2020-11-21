// displays current planner day and time
var plannerDay = moment();
$('#currentDay').text(plannerDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

// dynamically create hour boxes