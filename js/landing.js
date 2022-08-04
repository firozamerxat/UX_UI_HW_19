/*__________________Text hover effect using jQuery___________________*/
$("loading_box li a").on("hover"),function(){
    if(){
        $(this).css("text-decoration","underline")};

    else(){
        $(this).css("text-decoration","none")
    };
};


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




