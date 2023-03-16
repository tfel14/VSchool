const readline = require('readline-sync');
const user = readline.question('What is your name? ');

readline.question(`Hello ${user}, welcome to Mortal Kombat budget Cuts!!!`);

const enemies = ['IRS', 'Debtor', 'Payroll', 'HR'];
const items = ['Bonus', 'PTO', 'Referal'];
var inventory = [];
let userHP = 50;
const options = ['Walk', 'Print', 'Quit'];
let grab = items[Math.floor(Math.random()*items.length)];

function play(){
    const atk = Math.floor(Math.random()* (15 - 5)+5);
    const enemy = enemies[Math.floor(Math.random()*enemies.length)];
    let oppHP = 50;
    const oppAtk = Math.floor(Math.random()* (46 - 15)+ 15);
    const choice = readline.keyInSelect(options, 'Pick your next move...');

    if (options[choice] == 'Quit') {
        return userHP = 0;
    } else if (options[choice] == 'Print'){
        console.log(`Name: ${user}, Health: ${userHP}, Items: ${inventory}`);
    } else if (options[choice] == 'Walk'){
        let chance = Math.random();
        if(chance <= .3){
            console.log('Walking...');
        } else if (chance > .3) {
            console.log(`${enemy} has appeared!`);

            while(oppHP > 0 && userHP > 0){
                const user = readline.question('Would you like to press "r" to run, or press "a" to attack?');

                switch (user){
                    case 'r':
                        const run = Math.random();
                        if(run < .5){
                            console.log(`You failed to escape. ${enemy} attacks you for ${oppAtk}.`);
                        } else {
                            console.log('You escaped!');
                            break;
                        }
                    case 'a':
                        oppHP -= atk;
                        console.log(`You attacked for ${atk}`);

                        userHP -= oppAtk;
                        console.log(`${enemy} attacks you for ${oppAtk}.`);

                        if (oppHP <= 0) {
                            inventory.push(grab);
                            console.log(`You defeated ${enemy}! You picked up ${items}`);
                        }  else if (userHP <= 0){
                            console.log(`You have died...`)
                        }
                }
            }
        }
    }
}

while(userHP > 0){
    userHeal = function() {
        userPlaying = true;
        userHP = 50;
    };
    userHeal();
    play();
}