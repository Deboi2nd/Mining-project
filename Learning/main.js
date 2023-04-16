document.getElementById("perClickMiner").style.display = "none"
document.getElementById("perClickUpgrade").style.display = "none"
document.getElementById("pickaxeUpgrade").style.display = "none"

var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 50,
    goldPerMiner: 100
};

function giveGold() {
    gameData.gold += 1000
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
};

var minerNumber = {
    miner: 0,
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
        Math.floor(minerNumber.miner += 1)
        minerNumber.minerBoughtPerClick += 1
        gameData.goldPerMiner *= 2
        document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
        document.getElementById("perClickMiner").innerHTML = "Buy a Miner (Currently have " + minerNumber.miner + ") Cost: " + gameData.goldPerMiner + " Gold"
    }
}
    
var minerLoop = window.setInterval(function() {
    if (minerNumber.minerBoughtPerClick >= 1) {
        minerMineGold ()
    }
}, 2000);


var mainGameLoop = window.setInterval(function() {
if(gameData.gold >= 100) {
    document.getElementById("perClickMiner").style.display = "inline-block"
}

if(gameData.gold >= 300) {
    document.getElementById("pickaxeUpgrade").style.display = "inline-block"
}

if(upgrades.betterPickaxe = true) {
    document.getElementById("pickaxeUpgrade").style.display = "none"
}

if(gameData.gold >= 50) {
    document.getElementById("perClickUpgrade").style.display = "inline-block"
}
}, 1000);

var upgrades = {
    betterPickaxe: 300,
    lukeWarmBeer: 500
};

function buyBetterPickaxe() {
    if (gameData.gold >= upgrades.betterPickaxe) {
        gameData.gold -= upgrades.betterPickaxe
        minerNumber.minerBoughtPerClick *= 1.25
        document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
        upgrades.betterPickaxe = true
    }
};

// var saveGameLoop = window.setInterval(function() {
//     localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
//   }, 15000)

// var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
// if (savegame !== null) {
//   gameData = savegame
// }