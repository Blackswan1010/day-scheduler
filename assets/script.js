// Declaring a variable that is the root
var mainDiv = $('#mainDiv');
var currentTime = dayjs();
var currentHour = currentTime.hour();
var dateDisplayEl = $('<h2>');
var eventText;

// Setting the hour variable for day planner to start at the 9th hour
var hour = 9;

// Appending the tag on the header
$('header').append(dateDisplayEl);

// Displays the time in the header
function timeDisplay() {
  var time = currentTime.format('YYYY-MM-DD [at] hh:mm:ss A')
  dateDisplayEl.text(time);
}

// Displays the events pulled fromthe local storage
function displayEvents() {
  for (var i = 9; i < 18; i++) {
    // Create the key based on the hour
    var key = 'hour-' + i.toString();
    var eventText = localStorage.getItem(key);

    // Find the corresponding time block and set its textarea value
    $('#' + key).find('textarea').val(eventText);
  }
}


$(function () { 
  // Create multiple time blocks for 9am to 5pm day planner
  for (var i = 0; i < 9; i++) {
    // Create new tags within the timeblock
    var newDiv = $('<div>');
    var anotherDiv = $('<div>');
    var newText = $('<textarea>');
    var newButton = $('<button>');
    var newI = $('<i>');

    // Set and create the id attribute with the current iteration value in the array 'hourId'
    newDiv.attr('id', 'hour-' + hour.toString());
    // Check the current time to the hour to appropriately add the class 'past', 'present', and 'future'
    if (currentHour < hour) {
      newDiv.addClass('row time-block future');
    }
    if (currentHour === hour) {
      newDiv.addClass('row time-block present');
    }
    if (currentHour > hour) {
      newDiv.addClass('row time-block past');
    }

    // Checking the hour to add the appropriate suffix to display on the day planner
    anotherDiv.addClass('col-2 col-md-1 hour text-center py-3');
    if (hour > 12) {
      anotherDiv.text(hour - 12 + 'PM');
    } else if (hour < 12) {
      anotherDiv.text(hour + 'AM');
    } else {
      anotherDiv.text(hour + 'PM');
    }
    hour++;

    // Adding classes and setting attributes to the element tags textarea, button, and italic
    newText.addClass('col-8 col-md-10 description'); //
    newText.attr('rows', '3');

    newButton.addClass('btn saveBtn col-2 col-md-1');
    newButton.attr('aria-label', 'save');

    newI.addClass('as fa-save');
    newI.attr('aria-hidden', 'true');

    // Appending the above elements to the mainDiv
    mainDiv.append(newDiv);
    newDiv.append(anotherDiv, newText, newButton);
    newButton.append(newI);

    displayEvents();
  }

  // When button is clicked the key-value pair is saved to local storage
  $('button').on('click', (function (event) {
    event.preventDefault();

    var idValue = $(event.target).parent().attr('id');
    var input = $(event.target).siblings('textarea').val();

    localStorage.setItem(idValue, input);
    
  }));

});

timeDisplay();
setInterval(timeDisplay, 1000);
