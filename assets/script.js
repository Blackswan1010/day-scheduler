

// Declaring a variable that is the root for traversing the DOM
var mainDiv = $('#mainDiv');
var hourId = [];
var currentTime = dayjs();
var currentHour = currentTime.hour();
var dateDisplay = $('<h2>');
$('header').append(dateDisplay.text(currentTime.format('YYYY-MM-DD')));

// Setting the hour variable for day planner to start at the 9th hour
var hour = 9;

var saveButton = $('.saveBtn');

$(function () {
  // Creating multiple time blocks for a 9am to 5pm day planner
  for (var i = 0; i < 9; i++) {
    // Creating the id key for the timeblock, 'hour-x'
    hourId[i] = 'hour-' + hour.toString();

    // Creating new tags within the timeblock
    var newDiv = $('<div>');
    var anotherDiv = $('<div>');
    var newText = $('<textarea>');
    var newButton = $('<button>');
    var newI = $('<i>');

    // Setting the id attribute with the current iteration value in the array 'hourId'
    newDiv.attr('id', hourId[i]);
    // Checking the current time to the hour to appropriately add the class 'past', 'present', and 'future'
    if (currentTime < hour) {
      newDiv.addClass('row time-block future');
    }
    if (currentTime === hour) {
      newDiv.addClass('row time-block present');
    }
    if (currentTime > hour) {
      newDiv.addClass('row time-block past');
    }

    // Checking the 
    anotherDiv.addClass('col-2 col-md-1 hour text-center py-3');
    if (hour > 12) {
      anotherDiv.text(hour - 12 + 'PM');
    } else if (hour < 12) {
      anotherDiv.text(hour + 'AM');
    } else {
      anotherDiv.text(hour + 'PM');
    }
    hour++;

    // Adding classes and setting attributes to the elements textarea, button, and italic
    newText.addClass('col-8 col-md-10 description'); //
    newText.attr('rows', '3');

    newButton.addClass('btn saveBtn col-2 col-md-1');
    newButton.attr('aria-label', 'save');

    newI.addClass('as fa-save');
    newI.attr('aria-hidden', 'true');

    // Appending the elements to the mainDiv
    mainDiv.append(newDiv);
    newDiv.append(anotherDiv, newText, newButton);
    newButton.append(newI);


  }


  $(saveButton).click(function (event) {
    

  });


});
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
