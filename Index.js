var randomNum = Math.floor(Math.random() * 6) + 1;
var path = "images/dice" + randomNum + ".png";


document.getElementById("refreshbutton").addEventListener("click", function() {
    location.reload();
});




document.querySelector("h1").innerHTML = "You got <br/>"+ randomNum;

document.querySelector("img").setAttribute("src", path);

if (randomNum > 4) {
    // If the random number is 6, update the footer content
    document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML = "You are so Luckyy";
} 
else if (randomNum <= 4 &&  randomNum >2){
    // If the random number is not 6, keep the original footer content
    document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML = "Hmm you could do better";
}

else{
    document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML = "Just Give up";

}





