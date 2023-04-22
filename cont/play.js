var div = "";
for(var i=0; i<24; i++){
    div += "<div class='drop'>"+ [i+1] +"</div>";
 }
 
 document.getElementById("drp").innerHTML = div;