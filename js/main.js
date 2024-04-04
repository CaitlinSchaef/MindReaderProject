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


const mainText = document.getElementById('mainText')

const blueButton = document.getElementById('blueButton')

const roundButton = document.getElementById('roundButton')

const belowButtonText = document.getElementById('belowButtonText')

let userScreen = page1

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



function reWritePage() {
function updatePage(){ 
  if (page1) {
    mainText.textContent = 'I can read your mind',
    blueButton.textContent = '',
    roundButton.textContent = 'Go',
    belowButtonText.textContent = '',
  }

  else if (page2) {
    mainText.textContent = 'Pick a number from 01-99',
    blueButton.textContent = 'NEXT',
    roundButton.textContent = '<i class="fa-solid fa-arrow-rotate-left"></i>',
    belowButtonText.textContent = 'when you have your number click next',
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
}



blueButton.addEventListener('click', movePageForward)

roundButton.addEventListener('click', resetToFirstPage)

function movePageForward(){
  userScreen = userScreen + 1
  reWritePage()
}

function resetToFirstPage(){
  userScreen = state1
  reWritePage()
}