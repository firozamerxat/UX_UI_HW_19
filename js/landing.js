/*__________________Text hover effect using jQuery___________________

method 1 (dit not work)

$("landing_box li a").on("hover",function(){
    if(true){
        $(this).css("text-decoration-line","underline")
    }
    
    else{
        $(this).css("text-decoration-line","none")
    }
});


method 2 (did not work)

$(landing_box li a).ready(function(){
    $("landing_box li a").hover(function(){
        $(this).css("text-decoration","underline");
    },function(){
        $(this).css("text-decoration","none");
    });
});



method 3 (did not work)
$(apple).hover(function () {
    $(this).css("text-decoration","underline");
    // over
            
    }, function () {
   
    }
);
*/



/*__________________Typing animation using js________________________*/

var i = 0, text; /*setting the initial position*/

text = 'Bello, my name is Firoza. Welcome to my zone!';


/*creating function for the typing effect*/
function typing(){
    if(i<text.length){
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100); /*setting transition time*/
    } 
}
typing();




