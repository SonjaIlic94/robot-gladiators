window.alert("This is an alert! JavaScript is runnning!");

var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roberto", "Amy Android", "Robo Tumble"];
console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    // repeat and execute as long as the enemy has health
    while(enemyHealth > 0){
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

    

    // Ask player if they'd like to fight or fun
    var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    //If the player chooses to fight, then fight
    if (promptFight === 'fight' || promptFight === 'FIGHT'){
        // The fight has begun
    window.alert("The fight has begun!")
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

    //check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
    } else{
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
      }else{
            window.alert(playerName + " has " + playerHealth + " health remaining.");
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
    //if no (false), ask question again by running the fight() again
    else {
        fight();
    }
    // if player did not chose 1 or 2 in prompt
}else {
    window.alert("You need to choose a valid option.");
}
    };//end of fight function
    
    
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
} else{
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


// Game States
    // WIN - Player robot has defeted all enemy-robots
    //  * fight all enemy robots
    //  * defeat each enemy robot
    //LOSE - Player robots health is zero or less


console.log("Your robots name is " + playerName + ". ");

for(var i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    fight(enemyNames[i]);
}