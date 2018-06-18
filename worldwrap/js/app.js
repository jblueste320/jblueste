//Joel Bluestein
//NM220




function myMove() {
  var elem = document.getElementById("bounceIt");   
  var pos = 0;
  var updateInterval=5;
  var Boundwidth=800;
  var BoundHeight=600;
  var id = setInterval(frame, updateInterval);
  function frame() {
    if (pos >= Boundwidth) {
     pos=0;
     elem.style.left='0px';
      
    } else {
      pos=pos+2;
      elem.style.left = pos + 'px'; 
    }
  }
}