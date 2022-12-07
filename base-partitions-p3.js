
//partitions maker
let lub =
    more.join("").
        replace(/10000000/g, 8).
        replace(/1000000/g, 7).
        replace(/100000/g, 6).
        replace(/10000/g, 5).
        replace(/1000/g, 4).
        replace(/100/g, 3).
        replace(/10/g, 2).
        replace(/00000000/g, "e8").
        replace(/0000000/g, "e7").
        replace(/000000/g, "e6").
        replace(/00000/g, "e5").
        replace(/0000/g, "e4").
        replace(/000/g, "e3").
        replace(/00/g, "e2").
        replace(/0/g, "e1");

//maybe use slice instead

/*

make pulse count a const and define loop varcount on that
3
let partition =  [...RAW]

    for (let varCount = 8; 0 < varCount; varCount--){   
      partition.map(a => a.replace(new RegExp(`1${"0".repeat(varCount - 1)}`, "g"), varCount))

    }

//why does starting on 7 in regex fail
    for (let varCount = 8; 0 < varCount; varCount-- ){   
      partition.map(a => a.replace(new RegExp(`${"0".repeat(varCount)}`, "g"), `e${varCount}`))

    }
	
	
	
	  //musical notes
    let RAW3 = [...RAW]
	
    let muse = RAW3
    .join(",")
    .replace(/10000000/g, "h")
    .replace(/1000000/g, "q,")
    .replace(/100000/g, "q.")
    .replace(/10000/g, "q-s")
    .replace(/1000/g, "q")
    .replace(/100/g, "e.")
    .replace(/10/g, "e")
    .replace(/1/g, "s")
    .replace(/00000000/g, "H")
    .replace(/0000000/g, "Q,")
    .replace(/000000/g, "Q.")
    .replace(/00000/g, "Q_S")
    .replace(/0000/g, "Q")
    .replace(/000/g, "E.")
    .replace(/00/g, "E")
    .replace(/0/g, "S ")
    .split(",")
	
	
	
	
	
	
	
*/

//partitions sorted
let shout = lub.split(",")
let gol;

for (let mi = 0; mi < shout.length; mi++) {
    if (shout[mi][0] == "e") {
        gol = shout[mi].split("")

        gol[gol.length - 1] = (gol[1] * 1) + (gol[gol.length - 1] * 1)
        gol[0] = ""
        gol[1] = ""
        gol.sort((a, b) => b - a)

        shout[mi] = gol.join("")
    }

    else {
        gol = shout[mi].split("")

        gol.sort((a, b) => b - a)

        shout[mi] = gol.join("")
    }
}

//compositions grouped
let comp = lub.split(",")
let sol;

for (let mi = 0; mi < comp.length; mi++) {
    if (comp[mi][0] == "e") {
        sol = comp[mi].split("")

        sol[sol.length - 1] = (sol[1] * 1) + (sol[sol.length - 1] * 1)
        sol[0] = ""
        sol[1] = ""

        comp[mi] = sol.join("")

    }
}


//compositions with syncopations
let compsync = lub.split(",")
let mel;

for (let mi = 0; mi < compsync.length; mi++) {
    if (compsync[mi][0] == "e") {
        mel = compsync[mi].split("")

        mel[mel.length - 1] = (mel[1] * 1) + (mel[mel.length - 1] * 1)
        mel[1] = `<sup>${mel[1]}</sup>`

        compsync[mi] = mel.join("")

    }
} 