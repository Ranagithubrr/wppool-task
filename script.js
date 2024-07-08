const BarButton = document.getElementById('barIcon');
const barIconFixed = document.getElementById('barIconFixed');
const FloatingMenu = document.getElementById('FloatingMenu');
const closeIcon = document.getElementById('closeIcon');

BarButton.addEventListener("click", ()=>{
    FloatingMenu.classList.remove("hiddenMenu")
});
barIconFixed.addEventListener("click", ()=>{
    FloatingMenu.classList.remove("hiddenMenu")
});
closeIcon.addEventListener("click", ()=>{
    FloatingMenu.classList.add("hiddenMenu")
});

// scroll to add class
const elementToAddClass = document.getElementById('fixedNav');
const scrollTriggerPoint = 500;
const NonStickNav = document.getElementById('nonsticknav');
const StickNav = document.getElementById('sticknav');
const whiteLogo = document.getElementById('whiteLogo');
const darkLogo = document.getElementById('darkLogo');
window.addEventListener('scroll', function() {
  const scrolledPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrolledPosition >= scrollTriggerPoint) {
    elementToAddClass.classList.add('stickyNav');
    elementToAddClass.classList.add('shadow-lg');
    NonStickNav.classList.add("hidden");
    StickNav.classList.remove("hidden");
    whiteLogo.classList.add("hidden");
    darkLogo.classList.remove("hidden");

  } else {
    elementToAddClass.classList.remove('stickyNav');
    elementToAddClass.classList.remove('shadow-lg');
    NonStickNav.classList.remove("hidden");
    StickNav.classList.add("hidden");
    whiteLogo.classList.remove("hidden");
    darkLogo.classList.add("hidden");
  }
});