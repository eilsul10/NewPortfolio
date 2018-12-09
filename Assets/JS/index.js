window.onload = function () {
  index();
};


var startTime = Date.now()

function index() {
  var timeElapsed = Date.now() - startTime
    var timeLeft = Math.floor((3000 - timeElapsed) / 1000)
  if (timeLeft < 0) {
      return mainpage()
  }
}
function mainpage() {
  window.location.href = "mainpage.html"
}

setInterval(function() {
  index()
}, 100)




