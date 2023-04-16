var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    goldPerMiner: 50
};

var minerNumber = {
    minerBoughtPerClick: 0,
};

function minerMineGold () {
    gameData.gold += minerNumber.minerBoughtPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
};

function mineGold() {
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
};

function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
        gameData.gold -= gameData.goldPerClickCost
        gameData.goldPerClick += 1
        gameData.goldPerClickCost *= 2
        document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Current Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
};

function buyMinerPerClick() {
    if (gameData.gold >= gameData.goldPerMiner) {
        gameData.gold -= gameData.goldPerMiner
        minerNumber.minerBoughtPerClick += 1
        gameData.goldPerMiner *= 2
        document.getElementById("perClickMiner").innerHTML = "Buy a Miner (Currently have " + minerNumber.minerBoughtPerClick + ") Cost: " + gameData.goldPerMiner + " Gold"
    }
}
    
var minerLoop = window.setInterval(function() {
    if (minerNumber.minerBoughtPerClick >= 1) {
        minerMineGold ()
    }
}, 2000);


// var mainGameLoop = window.setInterval(function() {
//     mineGold()
// }, 1000);

// var saveGameLoop = window.setInterval(function() {
//     localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
//   }, 15000)

// var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
// if (savegame !== null) {
//   gameData = savegame
// }