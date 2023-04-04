
for( var i=0; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
    //    var audio= new Audio("sounds/crash.mp3");
    //    audio.play();
      var pres= this.innerHTML;
      
     makeSound(pres);
     animation(pres);

}
)};



document.addEventListener("keydown", function(event){
    // makeSound(event.key);
    makeSound(event.key);
    animation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "s":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "a":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
        case "d":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "l":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        

        default:
          console.log("press only valid key");
      }
    };

function animation(keyVal){
    var animate=document.querySelector("."+keyVal);
    animate.classList.add("pressed");

    setTimeout(()=>{
        animate.classList.remove("pressed");
        
    }, 100);

}




