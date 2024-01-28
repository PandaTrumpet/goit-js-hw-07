'use strict'
const color = document.querySelector('.color')

const body = document.querySelector('body')
const clickMe = document.querySelector('.change-color')



function getRandomHexColor() {
    
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
      
  }
  
  clickMe.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor
    color.textContent = randomColor
})


