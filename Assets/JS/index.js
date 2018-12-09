var startTime = Date.now()

function index() {
  var timeElapsed = Date.now() - startTime
    var timeLeft = Math.floor((20000 - timeElapsed) / 1000)
  if (timeLeft < 0) {
      return mainpage()
  }
}
function mainpage() {
  window.location.href = "mainpage.html"
}

index();
mainpage();
