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

const backgroundImage={
    imgUrl: 'img/palaceBackground.png'
}

let results;
const winnerLoser = document.getElementById('results');
 
document.querySelector('body').style.backgroundImage = `url(${backgroundImage.imgUrl})`;
document.querySelector('body').style.backgroundSize = 'cover';

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


document.getElementById('Lever').addEventListener('click',playGame);
 
document.getElementById('Reset').addEventListener('click',resetGame);



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
       winnerLoser.innerText ='All hail queen Yzma!'
    }else{
       winnerLoser.innerText ='Better luck next time!'  
   }
};

function resetGame(){ 
    console.log('resetGame is working')
    winSlotImg.winnerImage = null;
    lostSlotImg.losingImage = null;
    sect1.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
    sect2.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
    sect3.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
    winnerLoser.innerText = 'Help Yzma find matching potions to get rid of Kuzsco, and take the throne!';
    
};

sect1.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
sect2.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
sect3.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
 