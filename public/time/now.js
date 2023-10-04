/**
 * Updates the current time in the DOM.
 * @function
 * @returns {void}
 */
function updateCurrentTime() {
  const currentTimeElement = document.querySelector(".current-time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const currentTimeString = `${hours}:${minutes}:${seconds}`;
  currentTimeElement.textContent = currentTimeString;
}


const hourNow = setInterval(() => {
  updateCurrentTime();
}, 1000);

