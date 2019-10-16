/* variables */
$(document).ready(function() {
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();

  /* todays date */
  var outputDate =
    d.getFullYear() +
    "/" +
    (month < 10 ? "0" : "") +
    month +
    "/" +
    (day < 10 ? "0" : "") +
    day;

  /* helper functions */
  $("#todaysDate").text(outputDate);

  //  events
  /* clicking save button */

  $(".saveBtn").on("click", function() {
    var value = $(this)
      .siblings(".description")
      .val(); //grabbing the text area's content
    var time = $(this)
      .parent()
      .attr("id"); //making the value same as time it is assigned to

    localStorage.setItem(time, value);
  });

  function renderLocalStorage() {
    var hourNine = localStorage.getItem("hour-9");
    $("#hourNine").text(hourNine);

    $("#hourTen").text(localStorage.getItem("hour-10"));
    $("#hourEleven").text(localStorage.getItem("hour-11"));
    $("#hourTwelve").text(localStorage.getItem("hour-12"));
    $("#hourThirteen").text(localStorage.getItem("hour-13"));
    $("#hourFourteen").text(localStorage.getItem("hour-14"));
    $("#hourFifteen").text(localStorage.getItem("hour-15"));
    $("#hourSixteen").text(localStorage.getItem("hour-16"));
    $("#hourSeventeen").text(localStorage.getItem("hour-17"));
  }
  renderLocalStorage();
  /* events */
  /* takes text and saves it to local storage */

  /* init */
  /* check local storage object for matching id */

  /* color code past, current and future bars */
  // init
});
