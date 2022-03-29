
function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

pokemon01 = {
  name: "Monster A",
  maxHP: 50,
  currentHP: 50,
  attack: {
    name: "Mega Text",
    damage: 5,
  },
};
pokemon02 = {
  name: "Yucky Computer",
  maxHP: 50,
  currentHP: 50,
  attack: {
    name: "Hyper Delete",
    damage: 5,
  },
};
pokemon03 = {
  name: "pokemon",
  maxHP: 50,
  currentHP: 50,
  attack: {
    name: "Super hit",
    damage: 5,
  },
};
//pokemon selection, will not assign computer until function is run by pressing the fight button.
let pokeArray = [pokemon01, pokemon02, pokemon03];
var pv = Cookies.get("player-pokemon");
var play = pokeArray[pv];
pokeArray.splice(pv, 1);
var comp = pokeArray[0];

Cookies.set("computer-hp", computer.maxHP);
Cookies.set("player-hp", player.maxHP);

//this function updates the hp values
function updateHP(attack, currentHP) {
  let newAttack = attack;
  let finalDamage = getRndInt(newAttack - 2, newAttack + 2);
  Cookies.set("damage-roll", finalDamage);
  console.log(finalDamage);
  return currentHP - finalDamage;
}

//main battle function
function battle(p, c) {
  let player = p;
  let computer = c;

  document.getElementById("play-name").innerHTML = `${player.name}`;
  document.getElementById("comp-name").innerHTML = `${computer.name}`;
  //hp check
  if (player.currentHP > 0 && computer.currentHP > 0) {
    document.getElementById("attack").disabled = true;
    // computer.currentHP = Cookies.get('computer-hp')

    computer.currentHP = updateHP(player.attack.damage, computer.currentHP);
    console.log(computer.currentHP);

    let damage = Cookies.get("damage-roll");
    //writing data to screen
    document.getElementById(
      "info-data"
    ).innerHTML = `${player.name} has attacked with ${player.attack.name} for ${damage} damage`;


    //updating HP
    document.getElementById(
      "comp-hp"
    ).innerHTML = `${computer.currentHP} / ${computer.maxHP}`;
    console.log(computer, computer.currentHP);

    //delaying text in info-box
    setTimeout(() => {
   
        //calculate player damage
      player.currentHP = updateHP(computer.attack.damage, player.currentHP);
    let compDamage = Cookies.get('damage-roll')
      
      document.getElementById(
        "info-data"
      ).innerHTML = `${computer.name} has attacked with ${computer.attack.name} for ${compDamage} damage`;
      document.getElementById(
        "play-hp"
      ).innerHTML = `${player.currentHP} / ${player.maxHP}`;
      document.getElementById("attack").disabled = false;
    }, 2000);

    player = play;
    computer = comp;

    //determining if the fight should continue
  } else if (player.currentHP <= 0) {
    console.log(`${player.name} has fainted`);
    document.getElementById(
      "info-data"
    ).innerHTML = `${player.name} has fainted`;
    document.getElementById("attack").disabled = true;
  } else {
    console.log(`${computer.name} has fainted`);
    console.log(`YOU WIN`);
    document.getElementById("info-data").innerHTML = `YOU WIN`;
    document.getElementById("attack").disabled = true;
  }
}

// battle(play,comp)
console.log(play.currentHP);
