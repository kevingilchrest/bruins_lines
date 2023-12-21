//Populate the initial arrays by grouping the players by position
const centers = ["Coyle", "Geekie", "Poitras", "Beecher"];
const leftWingers = ["Debrusk", "Marchand", "Van Riemsdyk", "Lauko"];
const rightWingers = ["Pastrnak", "Frederic", "Heinen", "Steen"];
const dmen = ["Lohrei", "McAvoy", "Lindholm", "Carlo", "Shattenkirk", "Forbort"];


//Function to shuffle the players
function shuffleCenters() {
    for (let i = centers.length - 1; i > 0; i--) { 
   
        let j = Math.floor(Math.random() * (i + 1));
                   
        let temp = centers[i];
        centers[i] = centers[j];
        centers[j] = temp;
    }
    return centers;
 }

 function shuffleLeftWingers() {
    for (let i = leftWingers.length - 1; i > 0; i--) { 
   
        let j = Math.floor(Math.random() * (i + 1));
                   
        let temp = leftWingers[i];
        leftWingers[i] = leftWingers[j];
        leftWingers[j] = temp;
    }
    return leftWingers;
 }

 function shuffleRightWingers() {
    for (let i = rightWingers.length - 1; i > 0; i--) { 
   
        let j = Math.floor(Math.random() * (i + 1));
                   
        let temp = rightWingers[i];
        rightWingers[i] = rightWingers[j];
        rightWingers[j] = temp;
    }
    return rightWingers;
 }

 function shuffleDmen() {
    for (let i = dmen.length - 1; i > 0; i--) { 
   
        let j = Math.floor(Math.random() * (i + 1));
                   
        let temp = dmen[i];
        dmen[i] = dmen[j];
        dmen[j] = temp;
    }
    return dmen;
 }



//Create variables for the document objects
const firstLineC = document.getElementById("c1");
const secondLineC = document.getElementById("c2");
const thirdLineC = document.getElementById("c3");
const fourthLineC = document.getElementById("c4");

const firstLineLW = document.getElementById("lw1");
const secondLineLW = document.getElementById("lw2");
const thirdLineLW = document.getElementById("lw3");
const fourthLineLW = document.getElementById("lw4");

const firstLineRW = document.getElementById("rw1");
const secondLineRW = document.getElementById("rw2");
const thirdLineRW = document.getElementById("rw3");
const fourthLineRW = document.getElementById("rw4");

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d4 = document.getElementById("d4");
const d5 = document.getElementById("d5");
const d6 = document.getElementById("d6");



//Function to populate the corresponding containers in html
function populate() {
    firstLineC.innerHTML = centers[0];
    secondLineC.innerHTML = centers[1];
    thirdLineC.innerHTML = centers[2];
    fourthLineC.innerHTML = centers[3];

    firstLineLW.innerHTML = leftWingers[0];
    secondLineLW.innerHTML = leftWingers[1];
    thirdLineLW.innerHTML = leftWingers[2];
    fourthLineLW.innerHTML = leftWingers[3];

    firstLineRW.innerHTML = rightWingers[0];
    secondLineRW.innerHTML = rightWingers[1];
    thirdLineRW.innerHTML = rightWingers[2];
    fourthLineRW.innerHTML = rightWingers[3];

    d1.innerHTML = dmen[0];
    d2.innerHTML = dmen[1];
    d3.innerHTML = dmen[2];
    d4.innerHTML = dmen[3];
    d5.innerHTML = dmen[4];
    d6.innerHTML = dmen[5];
}


//Clicking the button will trigger the functions
const button = document.getElementById("button");
button.addEventListener("click", () => {
    shuffleCenters();
    shuffleLeftWingers();
    shuffleRightWingers();
    shuffleDmen();
    populate();
});

