//Logic of Game Interaction
//Star Wars Object

// Obi Wan Object
var obiWan = {
    name: 'Obi Wan',
    image: '../images/obi-wan.jpg',
    healthPoints: 120,
    attackPower: 5,
    counterAttackPower: 5
};

//Yoda Object
var yoda = {
    name: 'Yoda',
    image: '../images/yoda.jpg',
    healthPoints: 150,
    attackPower: 15,
    counterAttackPower: 15
};

//Jango Fett Object
var jangoFett = {
    name: 'Jango Fett',
    image: '../images/jango-fett.jpg',
    healthPoints: 120,
    attackPower: 8,
    counterAttackPower: 8
};

//Darth Vader Object
var darthVader = {
    name: 'Darth Vader',
    image: '../images/darth-vader.jpg',
    healthPoints: 180,
    attackPower: 25,
    counterAttackPower: 25
};

//Global Variables
var playerSelected = false;
var defenderSelected = false;
var player;
var enemy;
var playerHealth;
var enemyHealth;
var playerAttack;
var enemyAttack;
var playerBaseAttack;
var enemiesDefeated = 0;

//Object Logic
//Each attack by selected character  increases by base attack power. 
//Decrease player/enemy health.
function playerIncreaseAttackPower() {
    playerAttack = playerAttack + playerBaseAttack;
}

function decreasePlayerHealth() {
    playerHealth -= enemyAttack;
}

function decreaseEnemyHealth() {
    enemyHealth -= playerAttack;
}

//Loads global variables of player with its attributes
function definePlayerVariables(figure) {
    if ($(figure).attr('id') === 'obi-wan-figure') {
        player = obiWan;
        playerHealth = obiWan.healthPoints;
        playerAttack = obiWan.attackPower;
        playerBaseAttack = obiWan.attackPower;
    } else if ($(figure).attr('id') === 'yoda-figure') {
        player = yoda;
        playerHealth = yoda.healthPoints;
        playerAttack = yoda.attackPower;
        playerBaseAttack = yoda.attackPower;
    } else if ($(figure).attr('id') === 'jango-fett-figure') {
        player = jangoFett;
        playerHealth = jangoFett.healthPoints;
        playerAttack = jangoFett.attackPower;
        playerBaseAttack = jangoFett.attackPower;
    } else if ($(figure).attr('id') === 'darth-vader-figure') {
        player = darthVader;
        playerHealth = darthVader.healthPoints;
        playerAttack = darthVader.attackPower;
        playerBaseAttack = darthVader.attackPower;
    }
}

//Loads global variables of enemy with its attributes
function defineEnemyVariables(figure) {
    if ($(figure).attr('id') === 'obi-wan-figure') {
        enemy = obiWan;
        enemyHealth = obiWan.healthPoints;
        enemyAttack = obiWan.counterAttackPower;
    } else if ($(figure).attr('id') === 'yoda-figure') {
        enemy = yoda;
        enemyHealth = yoda.healthPoints;
        enemyAttack = yoda.counterAttackPower;
    } else if ($(figure).attr('id') === 'jango-fett-figure') {
        enemy = jangoFett;
        enemyHealth = jangoFett.healthPoints;
        enemyAttack = jangoFett.counterAttackPower;
    } else if ($(figure).attr('id') === 'darth-vader-figure') {
        enemy = darthVader;
        enemyHealth = darthVader.healthPoints;
        enemyAttack = darthVader.counterAttackPower;
    }
}

//Updates the Player fig caption dynamically
function changePlayerFigureCaption() {
    if (player === obiWan) {
        $('#obi-wan-caption').html(playerHealth + ' HP');
    } else if (player === yoda) {
        $('#yoda-caption').html(playerHealth + ' HP');
    } else if (player === jangoFett) {
        $('#jango-fett-caption').html(playerHealth + ' HP');
    } else if (player === darthVader) {
        $('#darth-vader-caption').html(playerHealth + ' HP');
    }
}

//Updates the enemy fig caption dynamically
function changeEnemyFigureCaption() {
    if (enemy === obiWan) {
        $('#obi-wan-caption').html(enemyHealth + ' HP');
    } else if (enemy === yoda) {
        $('#yoda-caption').html(enemyHealth + ' HP');
    } else if (enemy === jangoFett) {
        $('#jango-fett-caption').html(enemyHealth + ' HP');
    } else if (enemy === darthVader) {
        $('#darth-vader-caption').html(enemyHealth + ' HP');
    }
}

//When the page loads, render the DOM, sets the character chosen by user.
//Selects enemies chosen and sets up attack button function.
$(document).ready(function() {
	$('#select-character').html('Choose a player');
        $('.figure').insertAfter('#select-character');
        $('.figure').css('border', '2px solid white');
        $('#message').html('');
        $('#reset').html('');
        playerHealth = 0;
        enemyHealth = 0;
        playerAttack = 0;
        enemyAttack = 0;
        playerBaseAttack = 0;
        defenderSelected = false;
        enemiesDefeated = 0;

        	var hitPointsStartObiWan = 120;
	$(hitPointsStartObiWan).attr('hitPointsStartObiWan');
	$(hitPointsStartObiWan).text(hitPointsStartObiWan);
	$('#obi-wan').append(hitPointsStartObiWan);
	console.log(hitPointsStartObiWan);

	var hitPointsStartYoda = 150;
	$(hitPointsStartYoda).attr('hitPointsStartYoda');
	$(hitPointsStartYoda).text(hitPointsStartYoda);
	$('#yoda').append(hitPointsStartYoda);
	console.log(hitPointsStartYoda);

	var hitPointsStartDarthVader = 160;
	$(hitPointsStartDarthVader).attr('hitPointsStartDarthVader');
	$(hitPointsStartDarthVader).text(hitPointsStartDarthVader);
	$('#darth-vader').append(hitPointsStartDarthVader);
	console.log(hitPointsStartDarthVader);

	var hitPointsStartJangoFett = 100;
	$(hitPointsStartJangoFett).attr('hitPointsStartJangoFett');
	$(hitPointsStartJangoFett).text(hitPointsStartJangoFett);
	$('#jango-fett').append(hitPointsStartJangoFett);
	console.log(hitPointsStartJangoFett);
});
   
    $('#players').on('click', '.figure', function() {
        // Handle choosing their character
        $(this).css("border", "white 3px solid");
        //html of select-character changes to "Your Character"
        $('#select-character').html('Your Character');
        //unclicked figures are inserted after the attack-header.
        $('.figure').not(this).insertAfter('#attack-header');
        $('.figure').not(this).css("border", "red 3px solid");
        playerSelected = true;
        definePlayerVariables(this);

    });

    //Potential enemies
    $('#potential-enemies').on('click', '.figure', function() {
        // Handle choosing the currentEnemy
        if (defenderSelected) {
            return;
        } else {
            $(this).insertAfter('#defender');
            defenderSelected = true;
            defineEnemyVariables(this);
        }


    });
    //Attack button
    $('#attack-button').on('click', function() {
        decreaseEnemyHealth();
        decreasePlayerHealth();
        playerIncreaseAttackPower();
        changePlayerFigureCaption();
        changeEnemyFigureCaption();
        gameOver();
        playerWins();
        newGame();
    });
// });

//Restart
function restart() {
    var resetButton = '<button type="button" class="btn btn-danger" id="reset-button">Restart Game</button>';

    $('#reset').html(resetButton);
}

//Game Over
function gameOver() {
    if (playerHealth <= 0) {
        $('#message').html('Game over, You lost all your HP.');
        restart();
        clickRestart();
    }
}



function clickRestart() {
    $('#reset-button').on('click', function() {
        $('#select-character').html('Choose a player');
        $('.figure').insertAfter('#select-character');
        $('.figure').css('border', '2px solid white');
        $('#message').html('');
        $('#reset').html('');
        playerHealth = 0;
        enemyHealth = 0;
        playerAttack = 0;
        enemyAttack = 0;
        playerBaseAttack = 0;
        defenderSelected = false;
        enemiesDefeated = 0;
    });
}
//Player Wins
function playerWins() {
    if (enemyHealth <= 0) {
        $('#message').html('You defeated this enemy. Please select another enemy.');
        defenderSelected = false;
        enemiesDefeated++;
    }
}
$( "reset-button" ).click(function() {
  $( "p" ).empty();
});

//Game Reset
function newGame() {
    if (enemiesDefeated === 3) {
        $('#message').html('Congrats hero! You defeated all the enemies. Click restart to play again.');
        restart();
        clickRestart();
    }
}


