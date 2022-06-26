

const navBar = document.querySelectorAll('.nav')
console.log(navBar)

const about = document.querySelector('#about')
const projects = document.querySelector('#projects')
const experience = document.querySelector('#experience')
const contact = document.querySelector('#contact')

const intro = document.querySelector('.introduction')
const projectPage = document.querySelector('.project-page')
const experiencePage = document.querySelector('.experience-page')
const contactPage = document.querySelector('.contact-page')




navBar.forEach(button => {
  button.addEventListener('click', event => {
    if(event.target === projects){
    projectPage.scrollIntoView({
      behavior : 'smooth'
    })
    }else if(event.target === experience){
      experiencePage.scrollIntoView({
        behavior : 'smooth'
      })
    }else if(event.target === about){
      intro.scrollIntoView({
        behavior : 'smooth'
      })
    }else if(event.target === contact){
      contactPage.scrollIntoView({
        behavior : 'smooth'
      })
    }
  })
})




window.addEventListener('click', event => {
  console.log(event.target)
})





// STRETCH GOAL
// FIGURE SCROLL DOWN NAV DISAPPEARS, SCROLL UP NAV APPEARS
// window.addEventListener('scroll', function() {
//   let scroll = window.scrollY
//   let scrollDown = document.documentElement.scrollHeight
//   let lastScrollY = window.pageYOffset
//  console.log(lastScrollY)
// })
// let scrollDown = document.documentElement.scrollHeight
// console.log(scrollDown)
// console.log




// BUTTON CAROUSEL

// const carouselImage = document.querySelector('.carousel-images');
// const carouselButtons = document.querySelectorAll ('.carousel-button');
// const numberOfImages = document.querySelectorAll('carousel-images img').length;
// let imageIndex = 1;
// let translateX = 0;
// console.log()
// carouselButtons.forEach(button => {
//   button.addEventListener('click', event => {
//     if(event.target.id === 'previous') {
//       if(imageIndex !== 1) {
//         imageIndex--;
//         translateX += 500;
//       }
//     }else{
//       if(imageIndex !== numberOfImages) {
//         imageIndex++;
//         translateX-= 400;
//       }
//     }
//     carouselImage.style.transform = `translateX(${translateX}px)`
//   })
// })