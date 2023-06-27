// Get the reference to the div box
const divBox3 = document.getElementById('aboutss');
const divBox4 = document.getElementById('aboutss2');
// Calculate the position at which the box should enter the display
const enterPosition3 = window.innerHeight * 0.5;

// Function to check if the div box should be shown or hidden
function checkVisibility3() {
  const boxRect3 = divBox3.getBoundingClientRect();
  const boxTop3 = boxRect3.top;
  const boxBottom3 = boxRect3.bottom;

  if (boxTop3 <= enterPosition3 && boxBottom3 >= enterPosition3) {
    divBox3.style.opacity = '1';
    divBox4.style.opacity = '1';
  } else {
    divBox3.style.opacity = '0';
    divBox4.style.opacity = '0';
  }
}
divBox3.style.transition = 'opacity 1s';
divBox4.style.transition = 'opacity 1s';
// Event listener for scroll and mousemove events
window.addEventListener('scroll', checkVisibility3);
window.addEventListener('mousemove', checkVisibility3);