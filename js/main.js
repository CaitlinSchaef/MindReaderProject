// main.js

// define a variable and set it to your mainText id (html element)

// update two different button call actions

// set the text inside that variable to the first page text

// you will need to write one function that randomizes the symbols except for remainders of 9

// define a variable for what page we are on  

//the text that will be placed comes from JAVAscript not anything else!

// either write an if statement or a switch statement that considers the page variable and sets the text for mainText depending on page
// basically something like: if on this page, fill this info into mainText, bellowButtonTest, etc


let mainText = document.getElementById('mainText')

let blueButton = document.getElementById('blueButton')

let roundButton = document.getElementById('roundButton')

let belowButtonText = document.getElementById('belowButtonText')

let screen = 1

let state1 = {
  mainText.textContent = 'I can read your mind',
  blueButton.textContent = '',
  roundButton.textContent = 'Go',
  belowButtonText.textContent = '',
}

let state2 = {
  mainText = 'Pick a number from 01-99'
  blueButton = 'NEXT'
  roundButton = // refresh arrow symbol
  belowButtonText = 'when you have your number click next'
}

// maybe under this you should set variables like 'object 1' that contain all of the page contents to make the actual if statements easier

// this function base should work, but we will probably need to set the function to run only at the even of a button click?

//add the redraw page to reset the page 
function updatePage(){ //should i put an event listener in this function?
  if (page1) {
    // return state1
  }
  else if (page2) {
    // write code: replace text
  }
    else if (page3) {
    // write code: replace text
  }
    else if (page4) {
    // write code: replace text
  }
    else if (page5) {
    // write code: replace text
  }
    else (page6) {
    // write code: replace text
  }
}

// refresh button takes is actually a reset button 

blueButton.addEventListener('click', movePageForward)

function movePageForward(){
  screen = screen + 1
  redrawPage()
}