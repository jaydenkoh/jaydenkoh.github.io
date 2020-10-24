<script>
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) { /* Safari */
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { /* IE11 */
  elem.msRequestFullscreen();
}
}

/* Close fullscreen */
function closeFullscreen() {
if (document.exitFullscreen) {
  document.exitFullscreen();
} else if (document.webkitExitFullscreen) { /* Safari */
  document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { /* IE11 */
  document.msExitFullscreen();
}
}
</script>

<script>
function noScroll() {
window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener('scroll', noScroll);

// Remove listener to re-enable scroll
window.removeEventListener('scroll', noScroll);

</script>
