function myMove() {
   document.getElementById("animate").style.transformOrigin = "50% bottom 0";
  var elem = document.getElementById("animate");
  var elem2 = document.getElementById("crash");
  var pos = 0;
  var firstline= "rotate(";
  var lastline="deg)"
  var rotation;
  //var pos2 = 350;
  var id = setInterval(frame, 180);
  function frame() {
    if (pos == 360) {
    } else {
      pos++;
      rotate=firstline+pos+lastline;
      elem.style.transform= rotate;
      //elem2.style.top = pos2 + "px";
      //elem2.style.left= pos2 + "px";
    }
  }
};
