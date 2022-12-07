


let pulses = [];
let beats = [];
let start = [];


//pulse counter
for (let q = 0; q < more.length; q++) {
    pulses.push(more[q].length - 1)
}



//beat counter
for (let q = 0; q < more.length; q++) {
    let bag = []
    for (let r = 0; r < more[q].length; r++) {
        if (more[q][r] == 1) {
            bag.push(1)
        }
    }
    beats.push(bag.length)
}


//starting point: downbeat or syncopation
for (let q = 0; q < more.length; q++) {
    if (more[q][0] == 1) {
        start.push("Downbeat")
    }
    else if (more[q][0] == 0) {
        start.push("Syncopated")
    }
}

//rhythm illustration
let mucho =
    more.join("").
        replace(/0/g, `o`).
        replace(/1/g, `x`).
        split(",")
