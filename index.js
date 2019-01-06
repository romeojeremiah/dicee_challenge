var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
console.log(randomNumber2);


var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var title = document.querySelector("h1")
var src = "";

//Set player 1's image by calling the getRandomImage function
src = getRandomImage(randomNumber1);
img1.setAttribute("src", src);

//Set player 2's image by calling the getRandomImage function
src = getRandomImage(randomNumber2);
img2.setAttribute("src", src);

//Compare player 1 and player 2 scores and display winner
if (randomNumber1 === randomNumber2){
    title.textContent = "It's a Draw!";
} else if (randomNumber1 > randomNumber2) {
    title.innerHTML= "🚩Player 1 Wins!";
} else {
    title.textContent = "Player 2 Wins!🚩";
}

function getRandomImage(randomNumber){
    switch(randomNumber){
        case 1:
           src = "images/dice1.png";
            break;
        case 2:
            src = "images/dice2.png";
            break;
        case 3:
            src = "images/dice3.png";
            break;
        case 4:
            src = "images/dice4.png";
            break;
        case 5:
            src = "images/dice5.png";
            break;
        case 6:
            src = "images/dice6.png";
    }

    return src;
}



