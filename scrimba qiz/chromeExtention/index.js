let myLeads = []
const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    console.log(myLeads)
})

for (i = 0; )