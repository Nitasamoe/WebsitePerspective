
var transObject = {
  faceOne: {
    schrift: ["Designer", "Builder", "Coder"]
  }
}






function t(dom){
    return document.getElementById(dom) || document.querySelector(dom);
}

var el2 = t(".faceOne")
el2.addEventListener("mousemove", function(){
  transformShape(".faceOne>.perspThree>.rectThree",3,1);
  transformShape(".faceOne>.perspThree>.rectTwo",3,1.5);
  transformShape(".faceOne>.perspThree>.faceOneName",4,4);
})


function transformShape(dom, speed, rotation){
    var el = t(dom);
    var midX = window.innerWidth/2;
    var midY = window.innerHeight/2;
    var posX = window.event.clientX - midX;
    var posY = window.event.clientY - midY;

    var valueX = rotation/midX*posX;
    var valueY = rotation/midY*posY;

    el.style.transform = "rotateY("+ valueX*2 +"Deg) rotateX("+ valueY*2 +"Deg) translateX("+ -valueX*speed +"px) translateY("+ -valueY*speed +"px)"
}

changeSchrift(".schriftChange", transObject.faceOne.schrift, 3000)

function changeSchrift(dom, arr, time){
  var el = t(dom);
  var value = 0;

  setInterval(function(){value+=1;
                        if(value === arr.length-1){value=0;};
                        el.innerText = arr[value]
                        // el.transform = "translateY()"
                      }, time);
}
