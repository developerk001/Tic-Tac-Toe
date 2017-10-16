let count = 0;
var element = document.querySelector('#timer');
var timer = function() {
  count++;
  element.innerHTML = count;
}
function startTimer( status ) {
  status = true;
  if (status) {
    window.setInterval(timer, 1000);
  }
}
startTimer(true);
