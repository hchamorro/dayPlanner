/* variables */
$(document).ready(function() {
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();

  var outputDate =
    d.getFullYear() +
    "/" +
    (month < 10 ? "0" : "") +
    month +
    "/" +
    (day < 10 ? "0" : "") +
    day;
  /* todays date */

  /* helper functions */
  $("#todaysDate").text(outputDate);

  $(".saveBtn").on("click", function() {
    let value = $("#scheduleText").val();
    let time = $("#hourNine").attr("value");
    localStorage.setItem(time, value);
  });
  $(".saveBtn").on("click", function() {
    let value = $("#scheduleText").val();
    let time = $("#hour10").attr("value");
    localStorage.setItem(time, value);
  });
  $(".saveBtn").on("click", function() {
    let value = $("#scheduleText").val();
    let time = $("#hour11").attr("value");
    localStorage.setItem(time, value);
  });

  
  /* events */
  /* clicking save button */
  /* takes text and saves it to local storage */

  /* init */
  /* check local storage object for matching id */

  /* color code past, current and future bars */
});

$(document).ready(function() {
  function initialLoad() {
    // get the size/length of localStorage

    for (var i = 1; i <= localStorage.length; i++) {
      var key = "hour-" + i;
    }
    localStorage.getItem(key);
    // grab the HTML element
  }

  initialLoad();
