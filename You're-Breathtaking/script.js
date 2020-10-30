function sayThatWasEasy() {
  var thatWasEasy = new Audio('keanu.mp3')
  thatWasEasy.play()
}

$('#easy').on('click', sayThatWasEasy)
