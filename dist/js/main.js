particlesJS.load("particles-js", 'particles.json');

const body = document.body;
const lightSwitch = document.querySelector('.lightSwitch')
const lightSwitchNav = document.querySelector('.lightSwitchNav')
const navLightSwitch = document.querySelector('#navLightSwitch')
const icon = document.querySelectorAll('.fa-sun')

const theme = localStorage.getItem('theme')
let particlesLightLoad = false;

const changeIcon = (icons, currentIcon, newIcon) => {
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.remove(currentIcon)
    icons[i].classList.add(newIcon)
  }
}

if(theme === "light"){
    body.classList.add(theme)
    particlesJS.load("particles-js", 'particles-light.json');
    particlesLightLoad = true;
    changeIcon(icon, 'fa-sun', 'fa-moon')
    navLightSwitch.textContent = 'Dark'

} else if(theme === "dark"){
    body.classList.remove('light')
    particlesJS.load("particles-js", 'particles.json');
    particlesLightLoad = false;
    changeIcon(icon, 'fa-moon', 'fa-sun')
    navLightSwitch.textContent = 'Light'
}

const changeTheme = () => {
    if (!particlesLightLoad) {
      particlesJS.load("particles-js", "particles-light.json");
      particlesLightLoad = true;
      localStorage.setItem('theme', 'light')
      changeIcon(icon, 'fa-sun', 'fa-moon')
      navLightSwitch.textContent = 'Dark'
    } else {
      particlesJS.load("particles-js", "particles.json");
      particlesLightLoad = false;
      localStorage.setItem('theme', 'dark')
      changeIcon(icon, 'fa-moon', 'fa-sun')
      navLightSwitch.textContent = 'Light'
    }

    body.classList.toggle("light")
}

lightSwitch.addEventListener('click', changeTheme)
lightSwitchNav.addEventListener('click', changeTheme)