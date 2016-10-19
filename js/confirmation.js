$(function() {
  var userName = localStorage.getItem("name");
  var date = localStorage.getItem("date");
  var startTime = localStorage.getItem("startTime");
  var endTime = localStorage.getItem("endTime");

  $(".confirm#name").text(userName);
  $(".confirm#date").text(date);
  $(".confirm#time").text(startTime + " to " + endTime);
});
