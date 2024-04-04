// main.js

// define a variable and set it to your mainText id (html element)



// set the text inside that variable to the first page text



// define a variable for what page we are on  

//the text that will be placed comes from JAVAscript not anything else!

// either write an if statement or a switch statement that considers the page variable and sets the text for mainText depending on page
// basically something like: if on this page, fill this info into mainText, bellowButtonTest, etc

let mainText = document.getElementById('mainText')

let blueButton = document.getElementById('blueButton')

let roundButton = document.getElementById('roundButton')

let belowButtonText = document.getElementById('belowButtonText')


// this function base should work, but we will probably need to set the function to run only at the even of a button click?

function updatePage(){
  if (page1) {
    // write code: replace text
   // mainText = 'I can read your mind'
    // blueButton = 'NEXT'
   // roundButton = 'refresh'
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


function init(){
  console.log("hello world!");
}

init()

