/*__________________Text hover effect using jQuery___________________*/


$(".landingBox").hover(
    function() {
      $(this).addClass("applyUnderline"); console.log("MouseEnter");
    }, function() {
      $(this).removeClass("applyUnderline");console.log("MouseLeave");
    }
);


/*_____________creating function for the typing effect___________*/
var i = -1, text; /*setting the initial position*/
text = 'Bello, my name is Firoza. Welcome to my zone!';


function typing(){
    if(i<text.length){
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100); /*setting transition time*/
    } 
}
typing();




