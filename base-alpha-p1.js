//create array to loop through with letters i, j ,k , then place in string

let one = [];
let two = [];
let three = [];
let four = [];
let five = [];
let six = [];
let seven = [];
let eight = [];

let more;

//Variable Count
const VC = 1

for (let i = VC; i >= 0; i--) {
  one.push(`${i},`)
  for (let j = VC; j >= 0; j--) {
    two.push(`${i}${j},`)
    for (let k = VC; k >= 0; k--) {
      three.push(`${i}${j}${k},`)
      for (let l = VC; l >= 0; l--) {
        four.push(`${i}${j}${k}${l},`)
        for (let m = VC; m >= 0; m--) {
          five.push(`${i}${j}${k}${l}${m},`)
          for (let n = VC; n >= 0; n--) {
            six.push(`${i}${j}${k}${l}${m}${n},`)
            for (let o = VC; o >= 0; o--) {
              seven.push(`${i}${j}${k}${l}${m}${n}${o},`)
              for (let p = VC; p >= 0; p--) {
                eight.push(`${i}${j}${k}${l}${m}${n}${o}${p},`)

              }
            }
          }
        }
      }
    }
  }
}

more = one.concat(two, three, four, five, six, seven, eight);

/*

//new
let pulseGroup = group(currently)
let pulseCount = 8 (currently)
//add into eval code

    let full = []
    let pushed = ""
    let closer = ""
    let loopClose = `}\n`
    let varDef = []
    let arrcat = ["\nlet rawArray = group1.concat("]
    for (let i = 1; i <= 8; i++){

      arrcat.push(`group${i},`)
      pushed += "${i" + i + "}"

      varDef.push(`let group${i} = []`)

      full.push(`    
for (let i${i} = VC; i${i} >= 0; i${i}--) {
group${i}.push(` + "`" + pushed + "," + "`)")

      closer += loopClose
    }

    full.push(closer)
arrcat.push(")")

    stamp.value = 
      varDef.join("\n") 
      + "\nlet VC = 1\n" 
      + full.join("\n")
      + arrcat.join("\n")
  
  */
    
  
  
  
  
  
  