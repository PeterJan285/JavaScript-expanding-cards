 
 const panels = document.querySelectorAll('.panel')


 panels.forEach((pic) => {
     pic.addEventListener('click', () => {
         removeActiveClasses()
         pic.classList.add('active')
     })
 })

 function removeActiveClasses() {
     panels.forEach(pic => {
        pic.classList.remove('active')
     })
 }

