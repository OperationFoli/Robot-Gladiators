var playerName = window.prompt("What is your robots's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    // Subtract playerAttack from enemyHealth and use reslut to update the the value of enemyHealth
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }

        else {
            window.alert (enemyName + " still has " + enemyHealth + " health left.");
        }

    // Subtract enemyAttack fromm playerHealth  and use result to update value of playerHealth
    playerHealth = playerHealth - enemyAttack;

    // Log resulting message to the console
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      }

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();