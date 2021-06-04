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
    imgUrl : 'img/winnerImg.png'
}
const lostImg = {
    imgUrl: 'img/lostImg.png'
}

// const backgroundImage = {
//     imgUrl: 'img/yzma&kronk.png'
// }
//variables//
let results;
const winner = document.getElementById('winner');
 
const lost = document.getElementById('lost');



//elements computer will need to reference often// rules

const sect1 = document.getElementById('sect1');

const sect2 = document.getElementById('sect2');

const sect3 = document.getElementById('sect3');



results = {
    sect1: 'llama',
    sect2: 'llama',
    sect3: 'llama'
}



//add event listeners//  for buttons play and restart  
document.getElementById('Lever').addEventListener('click',playGame);
 
document.getElementById('Reset').addEventListener('click',resetGame);



//create function to randomly choose from the poisons

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
   sect2.style.backgroundImage =  `url(${potionChoices[results.sect2].imgUrl})`;
   sect3.style.backgroundImage = `url(${potionChoices[results.sect3].imgUrl})`;

   if (results.sect1 === results.sect2 && results.sect1 === results.sect3){
       winner.innerText ='We are going to poison Kuzco!',
       winner.style.backgroundImage = `url(${winnerImg.imgUrl})`,
       winner.style.justifyContent = center;

   }else{
       lost.innerText ='Why do we even have that lever?',
       lost.style.backgroundImage = `url(${lostImg.imgUrl})`
   }
   
};


// reset game should set all the values back to blank 
function resetGame(){ 
    console.log('resetGame is working')
    sect1.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
    sect2.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
    sect3.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
    winner.innerText = null;
    winner.style.backgroundImage = null;
    lost.innerText = null;
    lost.style.backgroundImage = null;
};
//set background image and size in DOm

// document.querySelector('body').style.backgroundImage = `url(${backgroundImage.imgUrl})`;
// document.querySelector('body').style.backgroundSize = 'cover'

    sect1.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
    sect2.style.backgroundImage = `url(${gameResetImage.imgUrl})`;
    sect3.style.backgroundImage = `url(${gameResetImage.imgUrl})`;