// helper.js
// Script tecnico simulato per Witchette Defender

console.log("Inizializzazione del Witchette Defender Helper...");

const towers = ["Arco magico", "Torre del Ghiaccio", "Tempesta Arcana"];

function scanUpgrades() {
    towers.forEach(tower => {
        console.log(`Upgrade disponibile per: ${tower}`);
    });
}

scanUpgrades();
