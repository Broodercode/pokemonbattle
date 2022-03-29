// var pokemon01 = {
//   name: 'pokemon',
//   maxHP: 50,
//   currentHP: 50,
//   attack: {
//       name: '',
//       damage: 5
//   }
// }
// var pokemon02 = {
//   name: 'pokemon',
//   maxHP: 50,
//   currentHP: 50,
//   attack: {
//       name: '',
//       damage: 5
//   }
// }
// var pokemon03 = {
//   name: 'pokemon',
//   maxHP: 50,
//   // currentHP: 50,
//   attack: {
//       name: '',
//       damage: 5
//   }
// }



function pokeSel(){
    var select = document.getElementById('pokemon-select');
    var value = select.options[select.selectedIndex].value
  console.log(value)
    Cookies.set('player-pokemon', value)


}
