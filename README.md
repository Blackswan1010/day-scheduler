# Day-Scheduler

## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     | 
| JQuery | [https://api.jquery.com](https://api.jquery.com/)  |

## Description

Making a Day-planner with JQuery!

Deployed Site []()

## Jquery Examples
```js
// Declaring variables
var mainDiv = $('#mainDiv');
var currentTime = dayjs();
var currentHour = currentTime.hour();
var dateDisplayEl = $('<h2>');
```
Declaring jquery variables for and using dayjs api for later use for a time display and appending multiple time-blocks 

```js
// Appending the tag on the header
$('header').append(dateDisplayEl);

// Displays the time in the header
function timeDisplay() {
  var time = currentTime.format('YYYY-MM-DD [at] hh:mm:ss A')
  dateDisplayEl.text(time);
}
```
Creating and appending the display element to the header with the formatted time.

```js
// When button is clicked the key-value pair is saved to local storage
$('button').on('click', (function (event) {
event.preventDefault();

var idValue = $(event.target).parent().attr('id');
var input = $(event.target).siblings('textarea').val();

localStorage.setItem(idValue, input);

}));
```
An event listener for when the user clicks on the save button the key-value pair is saved into local storage.

## Author Info

#### Anthony Nguyen
```md
* [Github](https://github.com/Blackswan1010)
```

## Credits

Everyone in bootcamp

## License

N/A