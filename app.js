let fighters = {
  Tyson: {
    health: 100
  },

  Trejo: {
    health: 100
  }
}

let money = 0

function drawMoney() {
  let template = ""
  template += `
  <div class="row" id="fighters-purse">
      <div class="col-12">
        <h1>Fighters Purse: '${money}'</h1>
      </div>
    </div>
  `

  document.getElementById('fighters-purse').innerHTML = template
}



// function drawFighters() {
//   let template = ""
//   for (let key in fighters) {
//     let fighter = fighters[key]
//     // console.log('our fighters', fighter);
//     template += `
//     <div class="col-6 boss-card p-5">
//         <img src="${fighter.image}" alt=""
//           class="img-fluid">
//         <div class="progress">
//           <div class="progress-bar bg-danger" role="prorgressbar" style="width: ${fighter.health}%">
//           </div>
//         </div>
//       </div>
//     `
//     document.getElementById(`${fighter.key}`).innerHTML = template
//   }
// }

function attackTyson() {

  // console.log('attacking tyson')
  let tysonBar = document.getElementById('tyson-health')
  fighters.Tyson.health -= 5
  let p = Math.floor(fighters.Tyson.health / 100 * 100)
  // console.group(p)
  // @ts-ignore
  tysonBar.style.width = p + '%'
  if (fighters.Tyson.health <= 0) {
    onTysonDeath()
    // give hero money
    // reset tysons health
  }

}

function attackTrejo() {
  let trejoBar = document.getElementById('trejo-health')
  fighters.Trejo.health -= 5
  // let trejoBar = trejoElem.querySelector('.progress-bar')
  console.log('bar: ', trejoBar, 'elem: ')
  let p = Math.floor(fighters.Trejo.health / 100 * 100)
  console.log('Trejo health', fighters.Trejo.health)
  // @ts-ignore
  trejoBar.style.width = fighters.Trejo.health + '%'
  if (fighters.Trejo.health <= 0) {
    fighters.Trejo.health = 0
  }
}



function resetHealth() {
  fighters.Trejo.health = 100
  fighters.Tyson.health = 100
}

function onTysonDeath() {
  money += 50
  fighters.Tyson.health = 200
  drawMoney()
}

function buyHealth() {
  if (money >= 50) {
    money -= 50
    fighters.Trejo.health = 100
  }
  drawMoney()
}

let attackInterval = setInterval(attackTrejo, 3000)
resetHealth()
drawMoney()
