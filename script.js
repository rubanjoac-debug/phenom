// MOBILE MENU

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if(hamburger){
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// THEME TOGGLE

const themeToggle = document.getElementById('themeToggle');

if(themeToggle){
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}

// FADE IN

const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

fadeElements.forEach(el=>{
  observer.observe(el);
});

// COUNTERS

const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{

  const updateCounter = ()=>{

    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 100;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter,20);
    }else{
      counter.innerText = target;
    }

  }

  updateCounter();

});