// Get the reference to the div box
const divBox5 = document.getElementById('desmap');

// Calculate the position at which the box should enter the display
const enterPosition4 = window.innerHeight * 0.5;

// Function to check if the div box should be shown or hidden
function checkVisibility5() {
  const boxRect5 = divBox5.getBoundingClientRect();
  const boxTop5 = boxRect5.top;
  const boxBottom5 = boxRect5.bottom;

  if (boxTop5 <= enterPosition4 && boxBottom5 >= enterPosition4) {
    divBox5.style.opacity = '1';
  } else {
    divBox5.style.opacity = '0';
  }
}
divBox5.style.transition = 'opacity 1s';
// Event listener for scroll and mousemove events
window.addEventListener('scroll', checkVisibility5);
window.addEventListener('mousemove', checkVisibility5);