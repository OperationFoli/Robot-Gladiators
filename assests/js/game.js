var playerName = window.prompt("What is your robots's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  while(enemyHealth > 0){}
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to skip this fight? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract playerAttack from enemyHealth and use reslut to update the the value of enemyHealth
        enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
     console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
        }
        else {
            window.alert (enemyNames + " still has " + enemyHealth + " health left.");
        }

    // Subtract enemyAttack fromm playerHealth  and use result to update value of playerHealth
    playerHealth = playerHealth - enemyAttack;

    // Log resulting message to the console
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      }

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?")

    if (confirmSkip) {
    window.alert(playerName + " has choosen to skip this fight!");

    playerMoney = playerMoney - 2;
    }
    
    else {
        fight();
    }

}
else {
    window.alert("You need to choose a valid option. Try again!");
}
};

// these are examples
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}