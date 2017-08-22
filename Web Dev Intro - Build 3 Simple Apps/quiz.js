document.write(q1.value);

checkButton.onclick = function() {
  var score = 0;
  
  if (q1.value == "correct") {
    score++;

  }
  
   
  if (q2.value == "correct") {
    score++;

  }
  
   
  if (q3.value == "correct") {
    score++;

  }
  
  if (0 == score) {
    alert("Sorry, you got them all wrong!");
  }else if (3 == score) {
    alert("Songratulations, you got them all correct!");
  } else {
    alert("You got " + score + "/3");
  }
  // alert("You got them all wrong!");
}