
const resume = document.querySelector('#resume')
console.log(resume)

resume.addEventListener('click', function (){
  console.log('resume page')
})

const header = document.querySelector('.header')

window.addEventListener('scroll', function(){
  header.classList.toggle('sticky', window.scrollY > 0)
})