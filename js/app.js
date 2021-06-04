// identify constants// potion options/ rules 
const potionChoices = {
    llama: {
        imgUrl: 'img/llamaPotion.png'

    },
    panther:{
        imgUrl: 'img/pantherPotion.png'
    },
    parrot:{
        imgUrl: 'img/parrotPotion.png'
    },
    whale:{
        imgUrl: 'img/whalePotion.png'
    },
    death:{
        imgUrl : 'img/deathPotion.png'
    }
}
const gameResetImage = {
    imgUrl: 'img/YzmaResetGame.png'
}
const winnerImg = {
    imgUrl : 'img/yzmaThrone.png'
}
const lostImg = {
    imgUrl: 'img/lostImg.png'
}
const backgroundImage={
    imgUrl: 'img/palaceBackground.png'
}

let results;
const winnerLoser = document.getElementById('results');
 
//set background using DOM

document.querySelector('body').style.backgroundImage = `url(${backgroundImage.imgUrl})`;
document.querySelector('body').style.backgroundSize = 'cover';




//elements computer will need to reference often// rules

const sect1 = document.getElementById('sect1');

const sect2 = document.getElementById('sect2');

const sect3 = document.getElementById('sect3');

const winSlotImg = document.getElementById('slotMachine')

const lostSlotImg =document.getElementById('slotMachine')

results = {
    sect1: 'llama',
    sect2: 'llama',
    sect3: 'llama'
}



//add event listeners//  for buttons play and restart  
document.getElementById('Lever').addEventListener('click',playGame);
 
document.getElementById('Reset').addEventListener('click',resetGame);



//create function to randomly choose from the poisons
   winSlotImg.onload = function (){
    var winnerImage = document.getElementById('slotMachine')
    var winning = document.createElement("img")
    winning.onload = function(){
        winnerImage.appendChild(winning)
    }
    winning.src = 'img/yzmaThrone.png'
}

lostSlotImg.onload = function (){
    var losingImage = document.getElementById('slotMachine')
    var lost = document.createElement("img")
    lost.onload = function(){
        losingImage.appendChild(lost)
    }
    lost.src = 'img/lostImg.png'
}

//window.onload=function() {
//     var thumbContainer = document.getElementById("thmbDiv");
//     var thumbnail = document.createElement("img");
//     thumbnail.onload=function() {
//       thumbContainer.appendChild(thumbnail);
//     }
//     thumbnail.src = "http://blog.lefigaro.fr/bd/img-sanctuaire.png";
//   }


function getRandomPoison(){
    choices = ['llama','panther','parrot','whale','death'];
    const randomIndex = Math.floor(Math.random()* 5 )
    return choices[randomIndex]};

function playGame(){
    console.log("play game is working ")
   results.sect1 = getRandomPoison();
   results.sect2 = getRandomPoison();
   results.sect3 = getRandomPoison();
  
   sect1.style.backgroundImage =  `url(${potionChoices[results.sect1].imgUrl})`,
   sect2.style.backgroundImage =  `url(${potionChoices[results.sect2].imgUrl})`,
   sect3.style.backgroundImage = `url(${potionChoices[results.sect3].imgUrl})`;

   if (results.sect1 === results.sect2 && results.sect1 === results.sect3){
       winnerLoser.innerText ='We are going to poison Kuzco!'
       winSlotImg.onload()
    //    winner.style.backgroundImage = `url(${winnerImg.imgUrl})`,
       

   }else{
       winnerLoser.innerText ='Why do we even have that lever?'
        lostSlotImg.onload()
    //    lost.style.backgroundImage = `url(${lostImg.imgUrl})`
   }
   
};


// reset game should set all the values back to blank 
function resetGame(){ 
    console.log('resetGame is working')
    winSlotImg.winnerImage = null;
    lostSlotImg.losingImage = null;
    sect1.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
    sect2.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
    sect3.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
    winnerLoser.innerText = 'Help Yzma find matching potions to get rid of Kuzsco, and take the throne!';
    
};
//set background image and size in DOm

sect1.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
sect2.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
sect3.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
 