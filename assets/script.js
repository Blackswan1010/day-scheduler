// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Declaring a variable that is the root for traversing the DOM
var mainDiv = $('#mainDiv');
var hourId = [];

// Setting the hour variable for day planner to start at the 9th hour
var hour = 9;

// Creating multiple time blocks for a 9am to 5pm day planner
for (var i = 0; i < 9; i++) {
  hourId[i] = 'hour-' + hour.toString();

  var newDiv = $('<div>');
  var anotherDiv = $('<div>');
  var newText = $('<textarea>');
  var newButton = $('<button>');
  var newI = $('<i>');

  newDiv.attr('id', hourId[i]);
  newDiv.addClass('row time-block past');  // add and remove the class 'past' to present/future by using the addClass('') and remove('')

  anotherDiv.addClass('col-2 col-md-1 hour text-center py-3');
  if(i === 3) {
    hourId[i] = 'hour-' + hour.toString();
    anotherDiv.text(hour + 'PM');
    hour = 0;
  } else if (i < 3) {
    anotherDiv.text(hour + 'AM');
  } else {
    anotherDiv.text(hour + 'PM');
  }
  
  newText.addClass('col-8 col-md-10 description'); //
  newText.attr('rows', '3');

  newButton.addClass('btn saveBtn col-2 col-md-1');
  newButton.attr('aria-label', 'save');

  newI.addClass('as fa-save');
  newI.attr('aria-hidden', 'true');

  mainDiv.append(newDiv);
  newDiv.append(anotherDiv);
  newDiv.append(newText);
  newDiv.append(newButton);
  newButton.append(newI);
  
  hour++;
}

console.log(hourId);

var saveButton = $('.saveBtn');

$(function () {
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
});

$('.saveBtn').click(function (event) {

});
