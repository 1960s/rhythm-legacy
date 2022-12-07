
//checkboxes for beats and pulses
let party = document.getElementById("party")

let pulse1 = document.getElementById("pulse1")
let pulse2 = document.getElementById("pulse2")
let pulse3 = document.getElementById("pulse3")
let pulse4 = document.getElementById("pulse4")
let pulse5 = document.getElementById("pulse5")
let pulse6 = document.getElementById("pulse6")
let pulse7 = document.getElementById("pulse7")
let pulse8 = document.getElementById("pulse8")

let beat1 = document.getElementById("beat1")
let beat2 = document.getElementById("beat2")
let beat3 = document.getElementById("beat3")
let beat4 = document.getElementById("beat4")
let beat5 = document.getElementById("beat5")
let beat6 = document.getElementById("beat6")
let beat7 = document.getElementById("beat7")
let beat8 = document.getElementById("beat8")

let skinny;
let fat;

let pulseCheck;
    let beatCheck;

function rhyFive() {
    skinny = [];
    fat = [];

    pulseCheck = [];
    beatCheck = [];

    party.innerHTML = ""

    for (let i = 1; i <= 8; i++) {

        for (let k = 1; k <= 8; k++) {
            if (document.getElementById(`pulse${i}`).checked && document.getElementById(`beat${k}`).checked) {

                for (let j = 0; j < pulses.length; j++) {
                    if (pulses[j] == i && beats[j] == k) {

                        skinny.push(shout[j])

                        if (fat.indexOf(shout[j]) == -1) {
                            fat.push(`<input type="checkbox" value="${[j]}" id="pardon${[j]}" checked>${shout[j]}`)
                        }
                    }
                }
            }
        }
    }
    //`<input type="checkbox" value="[j]" id="pardon[j]">${shout[j]}`
    
         for (let i = 1; i <= 8; i++) {
            pulseCheck.push(document.getElementById(`pulse${i}`).checked)
        }
        pulseCheck = pulseCheck.includes(true)
    
        for (let k = 1; k <= 8; k++) {
            beatCheck.push(document.getElementById(`beat${k}`).checked)
        }
        beatCheck = beatCheck.includes(true)
    
    
        for (let i = 1; i <= 8; i++) {
            if (document.getElementById(`pulse${i}`).checked && beatCheck == false) {
                for (let j = 0; j < pulses.length; j++) {
                    if (pulses[j] == i) {
    
                        skinny.push(shout[j])
    
                        if (fat.indexOf(shout[j]) == -1) {
                            fat.push(shout[j])
                        }
                    }
                }
            }
        }
    
        for (let i = 1; i <= 8; i++) {
            if (document.getElementById(`beat${i}`).checked && pulseCheck == false) {
                for (let j = 0; j < beats.length; j++) {
                    if (beats[j] == i) {
    
                        skinny.push(shout[j])
    
                        if (fat.indexOf(shout[j]) == -1) {
                            fat.push(shout[j])
                        }
                    }
                }
            }
        }
    

    party.innerHTML = fat.join("<br>")

}