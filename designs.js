// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // selects table
    let table = document.getElementById("pixelCanvas")
    table.innerHTML = ""
    // loop over table height
    for (let r = 0; r < document.getElementById("inputHeight").valueAsNumber; r++) {
        let rows = document.createElement('tr');
        table.appendChild(rows)
        // loop over table width
        for(let c = 0; c < document.getElementById("inputWidth").valueAsNumber;c++){
            let columns = document.createElement('td')
            // colour change
            columns.onclick = function() {updateColour(columns)}
            rows.appendChild(columns);
        }
    }
}

// colour picker
function updateColour(node){
    node.setAttribute("bgcolor",document.getElementById("colorPicker").value)
}