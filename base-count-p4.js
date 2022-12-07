


//counting duplet arrays
let countDup = []
for (let i = 1; i <= 16; i++) {
    countDup.push(i)
    countDup.push(`and`)
}

//counting triplet arrays
let countTrip = []
for (let i = 1; i <= 16; i++) {
    countTrip.push(i)
    countTrip.push(`and`)
    countTrip.push(`a`)
}

//counting quadruplet arrays
let countQuad = []
for (let i = 1; i <= 16; i++) {
    countQuad.push(i)
    countQuad.push(`e`)
    countQuad.push(`+`)
    countQuad.push(`a`)
}


let customMe = document.getElementById("customMe")
let custom1 = document.getElementById("custom1")
let custom2 = document.getElementById("custom2")
let custom3 = document.getElementById("custom3")
let custom4 = document.getElementById("custom4")

let customCount = [];

function rhyFour(){

if (customMe.checked) {
    for (let i = 1; i <= 16; i++) {
        if (custom1.value) {
            customCount.push(custom1.value)
        }

        if (custom2.value) {
            customCount.push(custom2.value)
        }

        if (custom3.value) {
            customCount.push(custom3.value)
        }

        if (custom4.value) {
            customCount.push(custom4.value)
        }
    }
}

}