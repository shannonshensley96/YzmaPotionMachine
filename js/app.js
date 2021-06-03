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

 
//variables//
let results;
let winner;
let lost;



//elements computer will need to reference often// rules

const sect1 = document.getElementById('sect1');

const sect2 = document.getElementById('sect2');

const sect3 = document.getElementById('sect3');


results = {
    sect1: 'llama',
    sect2: 'llama',
    sect3: 'llama'
}

resultsImage = {
    // sect1:{
    //    imgEl: document.querySelector('results.sect1 img')
    // },
    // sect2:{
    //     resultEl: document.getElementById('#sect2-results'),
    //     imgEl: document.getElementById('#sect2-results img')
    // },
    // sect3:{
    //     resultEl: document.getElementById('#sect3-results'),
    //     imgEl:document.getElementById('#sect3-results img')
    // }
};


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
   sect1.style.backgroundImage = potionChoices[results.sect1].imgUrl;
//    let sect2 = potionChoices[results.sect2];
//    let sect3 = potionChoices[results.sect3];

   if (results.sect1 === results.sect1 && results.sect1 === results.sect3){
       winner ='Player won!'
   }else{
       lost ='try again'
   }
   render()
};


// reset game should set all the values back to blank 
function resetGame(){ 
    console.log('resetGame is working')
    results.sect1 = null;
    results.sect2 = null;
    results.sect3 = null;
};

function render(){
//    var sect1 =  document.getElementById('sect1').innerHTML = potionChoices[results.sect1];
//    var sect2 =  document.getElementById('sect2')
//    var sect3 =  document.getElementById('sect3')
};
