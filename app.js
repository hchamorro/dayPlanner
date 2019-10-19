$(document).ready(function() {
  /* variables */
  let currentDate = moment().format("MMM Do YYYY");
  let currentTime = moment().format("h:mm a");
  /* todays date */

  /* helper functions */

  function init() {
    $("#todaysDate").text(currentDate);
    $("#currentTime").text(currentTime);
    renderLocalStorage();
    checkTime();
  }

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
    //if clicked change style.color
  });

  /* check local storage object for matching id */

  function renderLocalStorage() {
    //assigning the content to a var from storage
    var hourNine = localStorage.getItem("hour-9");
    $("#9").text(hourNine);
    // putting storage straight into element
    $("#10").text(localStorage.getItem("hour-10"));
    $("#11").text(localStorage.getItem("hour-11"));
    $("#12").text(localStorage.getItem("hour-12"));
    $("#13").text(localStorage.getItem("hour-13"));
    $("#14").text(localStorage.getItem("hour-14"));
    $("#15").text(localStorage.getItem("hour-15"));
    $("#16").text(localStorage.getItem("hour-16"));
    $("#17").text(localStorage.getItem("hour-17"));
  }

  function checkTime() {
    now = parseInt(moment().format("H"));
    var textArea = $("textarea");
    taTime = "";
    for (i = 0; i < textArea.length; i++) {
      var taTime = textArea[i].id;
      if (now === taTime) {
        $(`#${taTime}`).attr("style", "background-color:rgb(252, 252, 127)");
      } else if (now < taTime) {
        $(`#${taTime}`).attr("style", "background-color:red");
      }
    }
  }
  /* events */

  /* check local storage object for matching id */

  /* color code past, current and future bars */
  // init
  init();
});
