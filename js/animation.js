function myMove() {
   document.getElementById("animate").style.transformOrigin = "50% bottom 0";
  var elem = document.getElementById("animate");
  var elem2 = document.getElementById("crash");
  var pos = 0;
  var firstline= "rotate(";
  var lastline="deg)"
  var rotation;
  var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365;


  var id = setInterval(frame,1000);
  function frame() {
    if (pos == 60) {
      pos=0;
      min+=1;
      if(min==60){
        min=0;
        hour+=1;
        if(hour==24){
          hour=0;
        }else{hour+=1;}
      }else{min+=1;}
    }else {
      var date= new Date();
      var d = date.getSeconds();
      pos++;
      rotate=firstline+pos+lastline;
      elem.style.transform= rotate;
      console.log(d);
      delete date;
      //elem2.style.top = pos2 + "px";
      //elem2.style.left= pos2 + "px";
    }

};

myMove();
