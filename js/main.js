// Completed Code Steps:
// define a variable and set it to your mainText id (html element) (let mainText etc)
// set the text inside that variable to the first page text
// define a variable for what page we are on  (userScreen)
// (updatePage funciton) either write an if statement or a switch statement that considers the page variable and sets the text for mainText depending on page

//Code to write:
// you will need to write one function that randomizes the symbols except for remainders of 9

//Notes:
//the text that will be placed comes from JAVAscript not anything else!
// roundButton is actually a reset button, not a refresh button


let mainText = document.getElementById('mainText')

let blueButton = document.getElementById('blueButton')

let roundButton = document.getElementById('roundButton')

let belowButtonText = document.getElementById('belowButtonText')

let userScreen = 1

//let state1 = {
  //mainText.textContent = 'I can read your mind',
  //blueButton.textContent = '',
  //roundButton.textContent = 'Go',
  //belowButtonText.textContent = '',
//}

//let state2 = {
  //mainText.textContent = 'Pick a number from 01-99',
  //blueButton.textContent = 'NEXT',
  //roundButton.textContent = '<i class="fa-solid fa-arrow-rotate-left"></i>',
  //belowButtonText.textContent = 'when you have your number click next',
//}



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




blueButton.addEventListener('click', movePageForward)

roundButton.addEventListener('click', resetToFirstPage)

function movePageForward(){
  screen = screen + 1
  redrawPage()
}

function resetToFirstPage(){
  screen = state1
  redrawPage()
}