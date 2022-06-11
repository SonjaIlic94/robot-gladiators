window.alert("This is an alert! JavaScript is runnning!");

var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    //If the player chooses to fight, then fight
    if (promptFight === 'fight' || promptFight === 'FIGHT'){
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    //check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
    }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
        }
    
    
    //remove player's health by subtracting the amount set in the enemy attack variable
    playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " has attacked " + playerName + ". " + playerName + " has " + playerHealth + " health remaining."
        );
    //check players health
    if (playerHealth <= 0){
        window.alert(playerName + " has died!");
      }
        else{
            playerName + " has " + playerHealth + " health remaining."
        }
    }
    //if player chooses to skip
else if (promptFight === 'skip' || promptFight === 'SKIP'){
// Confirm if player wants to skip
   var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip){
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money for skipping
        playerMoney = playerMoney - 2
    }
    //if no (false), ask questio9n again by running the fight() again
    else {
        fight();
    }
}
else {
    window.alert("You need to choose a valid option.");
}
    
    
        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in 'enemy health'
    enemyHealth = enemyHealth - playerAttack;
    //log a resulting message to the console so we know it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    // Subtract the value of 'enemyAttack' from the value of 'playerhealth' and use that value to update 'playerHealth'
     playerHealth = playerHealth - enemyAttack;   
    //log to console.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
 //check player's health
 
 if (playerHealth <= 0){
     window.alert(playerName + " has died!");
 }
    else{
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }

// check to see if value of playerHealth variable is greater than 0

if (playerHealth < 0){
    console.log("Your player is still alive!");
}
    else{
        console.log("This will run intead");
    }

if (playerHealth === 0){
    console.log("This will not run");
}

//check enemy's health

if (enemyHealth <= 0){
    window.alert(enemyName + " has died!");
}
    else {
        window.alert (enemyName + " still has " + enemyHealth + " health remaining.");
    }
    
};



console.log("logs a strings");
//this will do math
console.log(10 + 10);

console.log("Your robots name is " + playerName + ". ");

function fight(){
    window.alert("The fight has begun!")
};

fight();