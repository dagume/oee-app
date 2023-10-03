/**
 * Updates the runtime element with the time elapsed since a specific date.
 * @function
 * @returns {void}
 */
function updateRuntime() {
  const runtimeElement = document.querySelector(".runtime");
  const now = new Date();
  const runtime = now.getTime() - new Date(2023, 9, 1, 23, 0, 0).getTime();
  const runtimeDays = Math.floor(runtime / 86400000).toString().padStart(2, "0");
  const runtimeHours = Math.floor((runtime % 86400000) / (1000 * 60 * 60)).toString().padStart(2, "0");
  const runtimeMinutes = Math.floor((runtime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
  const runtimeSeconds = Math.floor((runtime % (1000 * 60)) / 1000).toString().padStart(2, "0");
  const runtimeString = `${runtimeDays > 0 ? runtimeDays + "d " : ""} ${runtimeHours}:${runtimeMinutes}:${runtimeSeconds}`;
  runtimeElement.textContent = runtimeString;
}

