var randomNumber1 =Math.floor( 10*Math.random(6));
if (randomNumber1 >6){
    randomNumber1 = randomNumber1-6;
    
}
var randomNumber2 =Math.floor( 10*Math.random(6));
if (randomNumber2 >6){
    randomNumber2 = randomNumber2-6;
    
}

    if(randomNumber1==0){
        randomNumber1= randomNumber1+1
    }
    else if(randomNumber2==0){
        randomNumber2= randomNumber2+1
    }


document.querySelector("img").setAttribute('src',"image/dice"+randomNumber1+".png");

document.getElementsByClassName("img2")[0].setAttribute('src',"image/dice"+randomNumber2+".png"); 

if(randomNumber1==randomNumber2){
    document.querySelector('h1').innerHTML="Draw!"
}else if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="🚩 Player1 Wins!"
}else{
    document.querySelector('h1').innerHTML="Player2 Wins! 🚩"
}
