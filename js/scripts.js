$(function() {
  $("form#booking").submit(function(event) {
    event.preventDefault();

    var userName = $("input#userName").val();
    var date = $("input#date").val();
    var startTime = $("input#startTime").val();
    var endTime = $("input#endTime").val();

    localStorage.setItem("name", userName);
    localStorage.setItem("date", date);
    localStorage.setItem("startTime", startTime);
    localStorage.setItem("endTime", endTime);

    window.location.href = "confirmation.html";
  });
});
