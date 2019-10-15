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

  /* events */
  /* clicking save button */
  /* takes text and saves it to local storage */

  /* init */
  /* check local storage object for matching id */

  /* set todays date in the header */
  /* color code past, current and future bars */
});
