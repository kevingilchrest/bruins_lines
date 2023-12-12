const centers = ["Coyle", "Geekie", "Poitras", "Beecher"];
const leftWingers = ["Debrusk", "Marchand", "Van Riemsdyk", "Lauko"];
const rightWingers= ["Pastrnak", "Frederic", "Heinen", "Steen"];

let line1 = [];
let line2 = [];
let line3 = [];
let line4 = [];

let lines = [line1, line2, line3, line4];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { 
   
        // Generate random number 
        let j = Math.floor(Math.random() * (i + 1));
                   
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
 }

 let newCenters = shuffleArray(centers);
 let newLeftWingers = shuffleArray(leftWingers);
 let newRightWingers = shuffleArray(rightWingers);
 
 
function generateLines() {
    for (let i = 0; i < lines.length; i++) {
        lines[i].push(newLeftWingers[i], newCenters[i], newRightWingers[i]);
    }
}

generateLines();

console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);
 
