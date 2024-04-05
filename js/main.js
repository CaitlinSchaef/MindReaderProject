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
    mainText.innerHTML = ''
    // mainText.innerHTML = '<div class="overflow-scroll mh-100">0-&, 1-@, 2-#, 3-$<br>  4-%, 5-^, 6-*, 7-! <br>  8-#, 9-&, 10-$, 11-% <br>  12-^, 13-*, 14-!, 15-#<br> 16-), 17-@, 18-&, 19-#<br> 20-$, 21-%, 22-^, 23-*<br> 24-!, 25-#,  26-@<br> 27-&, 28-%, 29-$ 30-^<br> 31-*, 32-!, 33-#, 34-$<br> 35-@, 36-&, 37-!, 38-)<br>, 39-*, 40-$, 41-@, 42-#<br> 43-!, 44-@, 45-&, 46-$<br> 47-%, 48-$, 49-@, 50-#<br> 51-!, 52-%, 53-@, 54-&<br>55-*, 56-&, 57-!, 58-#<br> 59-$, 60-*, 61-@, 63-&<br> 64-!, 65-@, 66-#, 67-$<br> 68-%, 69-*, 70-), 71-!<br> 72-&, 73-@, 74-#, 75-$<br> 76-%, 77-*, 78-), 79-!<br> 80-@, 81-&, 82-$, 83-%<br> 84-*<br>, 85-!, 86-@, 87-#, 88-$<br> 89-%, 90-&, 91-*, 92-!<br> 93-@, 94-#, 95-$, 96-%<br> 97-*, 98-!, 99-@, 100-#</div>'
    blueButton.textContent = 'REVEAL'
    belowButtonText.textContent = 'Find your new number. Note the symbol beside the number.'
    mainText.appendChild(generateSymbolArray())
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

function generateSymbolArray() {
  // console.log('generateSymbolArray')
  // figure out the parent div and its classes
  // const result = []; not using this anymore
  // establishes an array of symbols
  let symbolDiv = document.createElement("div");
  symbolDiv.classList.add('overflow-scroll');
  symbolDiv.classList.add('mh-100');
  const symbols = ['!', '@', '#', '$', '%', '^', '*', '('];
  for (let i = 0; i<= 99; i++) {
    let innerSymbol = document.createElement('div');
    // console.log(i)
    if (i % 9 === 0) {
      // console.log('DIVISIBLE BY NINE!!!!!!>>>>>>>>>>>>>>>>>')
      // if the number is divisible by 9 it gets a &
      // $ identifies an object in the same way that a name or variable does.
      // result.push('${i} - &'); not using this 
      innerSymbol.innerHTML = `<div>${i} - &</div>` 
      symbolDiv.appendChild(innerSymbol);
      // console.log('innerSymbol')
      // console.log('symbolDiv')
    } else {
      // const randomIndex = Math.floor(Math.random() * symbols.length);
      // const randomSymbol = symbols[randomIndex];

      innerSymbol.innerHTML =   `<div>${i} - ${symbols[i%7]}</div>` 
      console.log(i, symbols[i])
      symbolDiv.appendChild(innerSymbol);
    }
  }
console.log(symbolDiv)
  
  return symbolDiv
}


updatePage()

// back ticks looks for patters : ${} else`