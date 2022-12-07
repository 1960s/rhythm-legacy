

//variables here: pulses beats start shout comp compsync mucho
//display the results

//checkboxes for counting methods
let singlet = document.getElementById("singlet")
let duplet = document.getElementById("duplet")
let triplet = document.getElementById("triplet")

let stamp = document.getElementById("stamp")
let rhyMe = document.getElementById("rhyMe")

//variables for innerHTML
let trOne;
let trTwo;
let trThree;
let trCustom;
let dottie;

function rhySix() {

    //variables for innerHTML
    trOne = "";
    trTwo = "";
    trThree = "";
    trCustom = "";
    dottie = "";



    if (singlet.checked) {
        trOne += `<tr>`
        for (let i = 0; i < mucho[rhyMe.value].length; i++) {
            if (zeroMe.checked) {
                trOne += `<td>${i}</td>`
            }
            else {
                trOne += `<td>${i + 1}</td>`
            }
        }
        trOne += `</tr>`
    }

    //add zero start count
    if (duplet.checked) {
        trTwo += `<tr>`
        for (let i = 0; i < mucho[rhyMe.value].length; i++) {
            trTwo += `<td>${countDup[i]}</td>`
        }
        trTwo += `</tr>`
    }

    //add zero start count
    if (triplet.checked) {
        trThree += `<tr>`
        for (let i = 0; i < mucho[rhyMe.value].length; i++) {
            trThree += `<td>${countTrip[i]}</td>`
        }
        trThree += `</tr>`
    }

    if (customMe.checked) {
        trCustom += `<tr>`
        for (let i = 0; i < mucho[rhyMe.value].length; i++) {
            trCustom += `<td>${customCount[i]}</td>`
        }
        trCustom += `</tr>`

    }


    dottie += `<tr>`
    for (let i = 0; i < mucho[rhyMe.value].length; i++) {
        dottie += `<td>${mucho[rhyMe.value][i]}</td>`
    }
    dottie += `</tr>`







    stamp.innerHTML =
        `<br>
    <table style="border-collapse:collapse">`
        + trOne + trTwo + trThree + trCustom.replace(/undefined/g, "")
        + dottie
        + `</table>`;



}

