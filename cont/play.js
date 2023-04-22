var div = "";
for(var i=0; i<11; i++){
    div += "<div class='drop' id='drag'>"+ [i+1] +"</div>";
 }
 
 document.getElementById("drp").innerHTML = div;
 document.getElementById("drg").innerHTML = div;


 window.onload = function() {
    // find the element that you want to drag.
    var box = document.getElementClassName('drop');
    
    /* listen to the touchMove event,
    every time it fires, grab the location
    of touch and assign it to box */
    
    box.addEventListener('touch', function(e) {
      // grab the location of touch
      var touchLocation = e.targetTouches[0];
      
      // assign box new coordinates based on the touch.
      box.style.left = touchLocation.pageX + 'px';
      box.style.top = touchLocation.pageY + 'px';
    });
    
    /* record the position of the touch
    when released using touchend event.
    This will be the drop position. */
    
    box.addEventListener('touchend', function(e) {
      // current box position.
      var x = parseInt(box.style.left);
      var y = parseInt(box.style.top);
    });
    
  };