var pokemon01 = {
  name: 'pokemon',
  maxHP: 50,
  currentHP: 50,
  attack: {
      name: '',
      damage: 5
  }
}
var pokemon02 = {
  name: 'pokemon',
  maxHP: 50,
  currentHP: 50,
  attack: {
      name: '',
      damage: 5
  }
}
var pokemon03 = {
  name: 'pokemon',
  maxHP: 50,
  // currentHP: 50,
  attack: {
      name: '',
      damage: 5
  }
}



function pokeSel(){
    var select = document.getElementById('pokemon-select');
    var value = select.options[select.selectedIndex].value
  console.log(value)
    Cookies.set('player-pokemon', value)


}




// function maxHealth(){
//   var userMaxHealth = document.getElementById('selector').value;
//   Cookies.set(`userMaxHealth`, '50');
// }
// maxHealth();
// var status = Cookies.get('userMaxHealth');
// console.log(status);

// function pokemonSelection(){
//      let pokemon = document.getElementById('pokeSelect').value;
//      console.log(pokemon)
//     //   var userPokemonSelection = pokemon01;
    
//       Cookies.set(`pokemon01`, '01');
//     }
//     pokemonSelection();


// function currentHealth(pokemon, hp){
// //   var userCurrentHealth = document.getElementById('selector').value;
//     var unit = pokemon;
//     var num = hp
//     console.log(unit)
//   Cookies.set(`pokemon.currentHP`, `${num}`);

// }
// currentHealth(pokemon01, 23);
// var status = Cookies.get('userCurrentHealth');
// console.log(status);






// pokemonSelection();
// var status = Cookies.get('userPokemonSelection');
// console.log(status);



// function computerMaxHP(){
//   var computerMaxHealth = document.getElementById('selector').value;
//   Cookies.set(`computerMaxHealth`, '50');
// }
// computerMaxHP();
// var status = Cookies.get('computerMaxHealth');
// console.log(status);



// function computerCurrentHP(){
//   var computerCurrentHealth = document.getElementById('selector').value;
//   Cookies.set(`computerCurrentHealth`, '50');
// }
// computerCurrentHP();
// var status = Cookies.get('computerCurrentHealth');
// console.log(status);



// function compPokemonSelection(){
//   var computerPokemonSelection = document.getElementById('selector').value;
//   Cookies.set(`computerPokemonSelection`, '01');
// }
// compPokemonSelection();
// var status = Cookies.get('computerPokemonSelection');
// console.log(status);

//-----

// cookies.set('computerCurrentHealth', '50');
// cookies.set('computerPokemonSelection', 'pokemon01');



// Cookies.set('userMaxHealth', '40');
// var status1 = Cookies.get('userMaxHealth');
// console.log(status1);