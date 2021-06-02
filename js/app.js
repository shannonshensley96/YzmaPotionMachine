// identify constants// potion options/ rules 
const potionChoices = {
    llama: {
        imgUrl: 'img/llamaPotion.png'
    },
    human: {
        imgUrl: 'img/humanPotion.png'
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


//variables//
let results;
let winner;
let lost;



//elements computer will need to reference often// rules

var sect1 = document.getElementById('sect1');

var sect2 = document.getElementById('sect2');

var sect3 = document.getElementById('sect3');


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
    choices = ['llama','human','panther'];
    //'parrot','whale','death'
    const randomIndex = Math.floor(Math.random()* 3 )
    return choices[randomIndex]};

function playGame(){ 
   results.sect1 = getRandomPoison();
   results.sect2 = getRandomPoison();
   results.sect3 = getRandomPoison();

   if (results.sect1 === results.sect2 && results.sect1 === results.sect3){
       winner ='Player won!'
   }else{
       lost = 'try again'
   }
   return winner || lost
};



// function playGame(){
//     console.log('playGame is working')

// };

function resetGame(){
    console.log('resetGame is working')
};


 


// call on  audio for win/loss 


