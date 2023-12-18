//Populate the initial arrays by grouping the players by position
const centers = ["Coyle", "Geekie", "Poitras", "Beecher"];
const leftWingers = ["Debrusk", "Marchand", "Van Riemsdyk", "Lauko"];
const rightWingers= ["Pastrnak", "Frederic", "Heinen", "Steen"];

//Create the empty lines
let line1 = [];
let line2 = [];
let line3 = [];
let line4 = [];

let lines = [line1, line2, line3, line4];

//Function to shuffle the players
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { 
   
        let j = Math.floor(Math.random() * (i + 1));
                   
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
 }

//Shuffle players by position
let newCenters = shuffleArray(centers);
let newLeftWingers = shuffleArray(leftWingers);
let newRightWingers = shuffleArray(rightWingers);
 
//Generate the new lines by looping through the shuffled arrays
function generateLines() {
    for (let i = 0; i < lines.length; i++) {
        lines[i].push(newLeftWingers[i], newCenters[i], newRightWingers[i]);
    }
}

//Create variables for the document objects
const firstLineLW = document.getElementById("lw1");
const secondLineLW = document.getElementById("lw2");
const thirdLineLW = document.getElementById("lw3");
const fourthLineLW = document.getElementById("lw4");
const firstLineC = document.getElementById("c1");
const secondLineC = document.getElementById("c2");
const thirdLineC = document.getElementById("c3");
const fourthLineC = document.getElementById("c4");
const firstLineRW = document.getElementById("rw1");
const secondLineRW = document.getElementById("rw2");
const thirdLineRW = document.getElementById("rw3");
const fourthLineRW = document.getElementById("rw4");




//Function to populate the corresponding containers in html
function populate() {
    firstLineLW.innerHTML = line1[0];
    secondLineLW.innerHTML = line2[0];
    thirdLineLW.innerHTML = line3[0];
    fourthLineLW.innerHTML = line4[0];
    firstLineC.innerHTML = line1[1];
    secondLineC.innerHTML = line2[1];
    thirdLineC.innerHTML = line3[1];
    fourthLineC.innerHTML = line4[1];
    firstLineRW.innerHTML = line1[2];
    secondLineRW.innerHTML = line2[2];
    thirdLineRW.innerHTML = line3[2];
    fourthLineRW.innerHTML = line4[2];
}


//Clicking the button will trigger the functions
const button = document.getElementById("button");
button.addEventListener("click", () => {
    generateLines();
    populate();
});

