
// NAV BAR SCROLL TO CONTENT
const navBar = document.querySelectorAll('.nav')
console.log(navBar)
const name = document.querySelector('#name')
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
      name.scrollIntoView({
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

// SOCIAL MEDIA LINKS
const socialMediaLinks = document.querySelectorAll('.social-media-icons')
const linkedinProfile = document.querySelector('#linkedin-profile')
const githubProfile = document.querySelector('#github-profile')
const codePenProfile = document.querySelector('#codepen-profile')
const instagramProfile = document.querySelector('instagram-profile')
socialMediaLinks.forEach(btn => {
  btn.addEventListener('click', event => {
    if(event.target === document.querySelector('#linkedin')){
      linkedinProfile
    }if(event.tartget === document.querySelector('#github')){
      githubProfile
    }if(event.target === document.querySelector('#codepen')){
      codePenProfile
    }if(event.target === document.querySelector('#instagram')){
      instagramProfile
    }
  })
})

// MODALS FOR RESUME
const resume = document.querySelector('#resume')
const resumeModal = document.querySelector('#resume-example')
const modalBtn = document.querySelector('.modal-button')
const modalCover = document.querySelector('.modalcover')
const main = document.querySelector('.main')
//OPEN RESEUME PAGE
resume.addEventListener('click', event => {
  if(event.target === resume){
    resumeModal.classList.remove('hide')
    modalBtn.classList.remove('hide')
    // main.classList.add('hide')
  }
})
// CLOSE RESUME PAGE
modalBtn.addEventListener('click', event => {
  if(event.target === document.querySelector('.modal-button')){
    resumeModal.classList.add('hide')
    modalBtn.classList.add('hide')
    
  }
})

//PROJECTS MODAL 
const hideModal = document.querySelector('.hide-modal1')
const hideModal2 = document.querySelector('.hide-modal2')
const hideModal3 = document.querySelector('.hide-modal3')
const projectModalButton = document.querySelector('.project-modal-button')
const projectModalButton2 = document.querySelector('.project-modal-button2')
const projectModalButton3 = document.querySelector('.project-modal-button3')
const project1 = document.querySelector('#project-1')
const project2 = document.querySelector('#project-2')
const project3 = document.querySelector('#project-3')

console.log(projectModalButton3)
console.log(hideModal3)

project1.addEventListener('click', event => {
    (event.target === project1)
    hideModal.classList.remove('hide')
})
projectModalButton.addEventListener('click', event => {
  event.target === projectModalButton
    hideModal.classList.add('hide')
})

project2.addEventListener('click', event => {
  event.target === project2
    hideModal2.classList.remove('hide')
})
projectModalButton2.addEventListener('click', event => {
  event.target === projectModalButton2
  hideModal2.classList.add('hide')
})

project3.addEventListener('click', event => {
  event.target === project3
    hideModal3.classList.remove('hide')
})
projectModalButton3.addEventListener('click', event => {
  event.target === projectModalButton3
  hideModal3.classList.add('hide')
})



// project2.addEventListener('click', event => {
//   if(event.target === project2){
//     hideModal2.classList.remove('hide')
//   }
// })
// projectModalButton2.addEventListener('click', event => {
//   if(event.target === projectModalButton2){
//     hideModal2.classList.add('hide')
//   }
// })




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