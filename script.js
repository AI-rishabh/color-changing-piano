var aud1 = new Audio('./28.mp3')
var aud2 = new Audio('./29.mp3')
var aud3 = new Audio('./30.mp3')
var aud4 = new Audio('./31.mp3')
var aud5 = new Audio('./32.mp3')
var color1 = document.querySelector('.color1')

var h1 = document.querySelector('h1')
var body = document.body.addEventListener('keydown',function(dets){
   
   if (dets.code == 'KeyC'){
      aud1.play()
    document.body.style.backgroundColor = "red";

     setTimeout(function () {
            document.body.style.backgroundColor = "";
        }, 400);
   }

     if (dets.code == 'KeyV'){
      aud2.play()
      document.body.style.backgroundColor = "blue";

      setTimeout(function () {
            document.body.style.backgroundColor = "";
        }, 400);
   }

     if (dets.code == 'KeyB'){
      aud3.play()
      document.body.style.backgroundColor = "green";

      setTimeout(function () {
            document.body.style.backgroundColor = "";
        }, 400);
   }

     if (dets.code == 'KeyN'){
      aud4.play()
      document.body.style.backgroundColor = "white";

      setTimeout(function () {
            document.body.style.backgroundColor = "";
        }, 400);
   }

     if (dets.code == 'KeyM'){
      aud5.play()
      document.body.style.backgroundColor = "purple";

      setTimeout(function () {
            document.body.style.backgroundColor = "";
        }, 400);
   }
})


