const sideMenu = document.getElementById('sideMenu');
const navBar =  document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm')
        navLinks.classList.remove('bg-opacity-50','bg-white' , 'shadow-sm')
    }
    else{
        navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm')
        navLinks.classList.add('bg-opacity-50','bg-white' , 'shadow-sm')

        

    }

})
  (function(){
    emailjs.init("5pJZmruLnGLhRQkUq"); // Replace with your EmailJS public key
  })();

  document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();

    emailjs.sendForm("service_9g99es9", "template_m3og6rk", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset(); // Clear the form
      }, (error) => {
        alert("Failed to send message. Please try again.");
        console.log(error);
      });
  });

