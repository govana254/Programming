let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let fighterOne = Math.floor(Math.random()* fighters.length)
    let fighterTwo = Math.floor(Math.random()* fighters.length)
    stageEl.textContent = fighters[fighterOne] + " VS " + fighters[fighterTwo]
})