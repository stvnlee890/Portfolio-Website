
const resume = document.querySelector('#resume')
console.log(resume)

resume.addEventListener('click', function (){
  console.log('resume page')
})

// const header = document.querySelector('.header')

// window.addEventListener('scroll', function(){
//   header.classList.toggle('sticky', window.scrollY > 0)
// })

const sticky = document.querySelector('.sticky')
const topNavBar = document.querySelector('#top-nav-bar')
let navBar = topNavBar.offsetTop;
const navigation = document.querySelector('#navigation')


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