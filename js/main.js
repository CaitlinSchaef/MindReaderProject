// Completed Code Steps:
// define a variable and set it to your mainText id (html element) (let mainText etc)
// set the text inside that variable to the first page text
// define a variable for what page we are on  (userScreen)
// (updatePage function) either write an if statement or a switch statement that considers the page variable and sets the text for mainText depending on page

//Code to write:
// you will need to write one function that randomizes the symbols except for remainders of 9

//Notes:
//the text that will be placed comes from JAVAscript not anything else!
// roundButton is actually a reset button, not a refresh button


const mainText = document.getElementById('mainText')

const blueButton = document.getElementById('blueButton')

const roundButton = document.getElementById('roundButton')

const belowButtonText = document.getElementById('belowButtonText')



let currentScreen = 1

//let state1 = {
  //mainText.textContent = 'I can read your mind',
  //blueButton.textContent = '',
  //roundButton.textContent = 'Go',
  //belowButtonText.textContent = '',
//}

//let state2 = {
  //mainText.textContent: 'Pick a number from 01-99',
  //blueButton.textContent: 'NEXT',
  //roundButton.textContent: '<i class="fa-solid fa-arrow-rotate-left"></i>',
  //belowButtonText.textContent: 'when you have your number click next',
//}



function updatePage() {
  if (currentScreen === 1) {
    mainText.textContent = 'I can read your mind'
    blueButton.textContent = ''
    roundButton.textContent = 'Go'
    belowButtonText.textContent = ''
  } else if (currentScreen === 2) {
    mainText.textContent = 'Pick a number from 01-99'
    blueButton.textContent = 'NEXT'
    roundButton.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i>'
    belowButtonText.textContent = 'when you have your number click next'
  } else if (currentScreen === 3) {
    console.log('page 3')
    mainText.textContent = 'Add both digits together to get a new number'
    blueButton.textContent = 'NEXT'
    belowButtonText.textContent = 'Ex: 14 is 1 + 4 = 5, click next to proceed.'
  } else if (currentScreen === 4) {
    console.log('page 4')
    mainText.textContent = 'Subtract your new number from the original number'
    blueButton.textContent = 'NEXT'
    belowButtonText.textContent = 'Ex: 14 - 5 = 9, click next to proceed.'
  } else if (currentScreen === 5) {
    mainText.classList.add("overflow-scroll")
    console.log('page 5')
    mainText.innerHTML = '<div class="overflow-scroll mh-100">0-& <br> 1-@<br> 2-#<br> 3-$<br> 4-%<br> 5-^<br> 6-*<br> 7-!<br> 8-#<br> 9-&<br> 3-$<br> 4-%<br> 5-^<br> 6-*<br> 7-!<br> 8-#<br> 9-& <br> 0-& <br> 1-@<br> 2-#<br> 3-$<br> 4-%<br> 5-^<br> 6-*<br> 7-!<br> 8-#<br> 9-&<br> 3-$<br> 4-%<br> 5-^<br> 6-*<br> 7-!<br> 8-#<br> 9-&</div>'
    blueButton.textContent = 'REVEAL'
    belowButtonText.textContent = 'Find your new number. Note the symbol beside the number.'
  } else if (currentScreen === 6) {
    console.log('page 6')
    mainText.textContent = '&'
    belowButtonText.textContent = 'Your symbol is: &' 
  }
  hideBlueButton()
  // scrollText()
}

function hideBlueButton(){
  if (currentScreen === 1 || currentScreen === 6) {
    blueButton.style.display = "none"
  } else {
    blueButton.style.display = "block"
  }
}

function movePageForward(){
  console.log('MOVE PAGE FORWARD')
  currentScreen = currentScreen + 1
  updatePage()
}

blueButton.addEventListener('click', movePageForward)

function resetToFirstPage(){
  console.log('RESET TO FIRST PAGE')
  currentScreen = 1
  updatePage()
}

roundButton.addEventListener('click', () => {
  if (currentScreen === 1) {
    movePageForward()
  } else {
    resetToFirstPage()
  }
})

function scrollText() {
  if (currentScreen === 5) {
    mainText.classList.add("overflow-scroll")
  }
}


updatePage()