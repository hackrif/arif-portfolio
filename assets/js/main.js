/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// __________

function msalert(){
    alert('Message Sent Successful!')
    window.location.href = "thankyou.html"
}



//   document.getElementById("sendBtn").addEventListener("click", function message () {
//     // Redirect to thankyou.html
//     window.location.href = "thankyou.html";
//   });


//   document.getElementById("sendbtn").addEventListener("click", function () {
//     alert("✅ Thank you! Your message has been submitted.");
//   });


// // Inside the <script> tag in index.html
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Hide the form and show a thank-you message
//   this.style.display = 'none'; // Hide form
//   const thankYouDiv = document.createElement('div');
//   thankYouDiv.innerHTML = '<h1>Thanks for Submitting!</h1><p>Your message has been submitted successfully.</p>';
//   this.parentNode.appendChild(thankYouDiv); // Append to the container
// });
