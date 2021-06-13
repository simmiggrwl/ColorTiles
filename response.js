const startbtn = document.querySelector('#start') 
const resetbtn = document.querySelector('#reset')
var movetilebtn = document.querySelector(".grid")
const timer = document.querySelector('#time');
const movecounter = document.querySelector('#move');


var seconds=0;
function incrementSeconds() {
    seconds += 1;
    timer.textContent=`Time: ${seconds}`;
}

function startTimer(){
    seconds=0;
    incrementSeconds();
    var maxtime = setInterval(incrementSeconds, 1000);
}


var move=0
function incrementMove(){
    move+=1;
    movecounter.textContent= `Moves: ${move}`
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) 
             {var j = Math.floor(Math.random() * (i + 1));
             var temp = array[i];
             array[i] = array[j];
             array[j] = temp;}}

function getrandom9grid(){
    var colors=['#ff0000','#ff0000','#ff0000','#ff0000','#0000ff','#0000ff','#0000ff','#0000ff','#8a2be2','#8a2be2',
    '#8a2be2','#8a2be2','#90ee90','#90ee90','#90ee90','#90ee90','#ffa500','#ffa500','#ffa500','#ffa500','#ffff00', 
    '#ffff00','#ffff00','#ffff00']
    shuffleArray(colors);
    
    for(let i=1; i<10; i++)
         {var randomcolor=colors[i-1];
         var x = document.getElementsByClassName(`button${i}`);
         x[0].style.backgroundColor = randomcolor;}}
    
function getrandom25grid(){    
    var colors=['#ff0000','#ff0000','#ff0000','#ff0000','#0000ff','#0000ff','#0000ff','#0000ff','#8a2be2','#8a2be2',
    '#8a2be2','#8a2be2','#90ee90','#90ee90','#90ee90','#90ee90','#ffa500','#ffa500','#ffa500','#ffa500','#ffff00', 
    '#ffff00','#ffff00','#ffff00','#f2f2f2']
    shuffleArray(colors);

    for(let i=1; i<=25; i++) 
         {var randomcolor=colors[i-1];
         var x = document.getElementsByClassName(`b${i}`);
         x[0].style.backgroundColor = randomcolor;}}   
         
function swapTilescolor(tile2) {
    document.getElementById('transitionsound').play();
    var button=document.querySelector(tile2)
    var temp = button.style.backgroundColor;
    //document.getElementById('transitionsound').play();
    button.style.backgroundColor = "rgb(242, 242, 242)";
    blanktilebt.style.backgroundColor = temp;
    
    incrementMove();
    checkwin();
    //var noofmoves= document.getElementById(move).textContent= `Move: ${move}`
    blanktile();
    } 

function checkwin(){
    for(let i=1; i<4; i++){
        var x = document.getElementsByClassName(`button${i}`);
        var a = document.getElementsByClassName(`b${i+6}`);
        var y = document.getElementsByClassName(`button${i+3}`);
        var b = document.getElementsByClassName(`b${i+11}`);
        var z = document.getElementsByClassName(`button${i+6}`);
        var c = document.getElementsByClassName(`b${i+16}`);
        if(x[0].style.backgroundColor == a[0].style.backgroundColor && 
            y[0].style.backgroundColor == b[0].style.backgroundColor &&
            z[0].style.backgroundColor == c[0].style.backgroundColor ){
                if(i==3){
                 document.getElementById('victorysound').play();
                 alert('Congratulations! You have won!');
                 location=location;
                }
            }
        else
        break;}    
}            

var blanktilebt = 0;
var blanktilenumber = 0;
function blanktile(){
    for(let i=1;i<=25;i++){
        var x = document.getElementsByClassName(`b${i}`);
         if(x[0].style.backgroundColor == "rgb(242, 242, 242)"){
            blanktilebt = x[0];
            blanktilenumber = i;
            console.log(blanktilebt) 
            console.log(blanktilenumber)
            break;}
           
     }
}

/* function starttimer(){
    document.getElementById("time").textContent = `Time: ${time}`*/

//agar blanktile=b5 toh we can move b4 to right and b10 upwards
//blanktile=b7 b6 to right,b8 to left,b2 down,b12 up
function movetile(buttonclass){
    console.log(buttonclass);
    
    var i = blanktilenumber;
    console.log(i)
    var neighbours = [i + 1, i - 1, i + 5, i - 5];
    console.log(neighbours)
    var number = parseInt(buttonclass.split('').slice(1).join(''));
    console.log(number);
    if (neighbours.indexOf(number) != -1 ){
        console.log('mcph');
        swapTilescolor(`.${buttonclass}`);
    }
}

function resetpage(){
    location=location;}

function disablebutton(){
    document.getElementById("start").disabled = true; 
}    

startbtn.addEventListener('click', getrandom9grid);
startbtn.addEventListener('click', getrandom25grid);
startbtn.addEventListener('click', startTimer);
startbtn.addEventListener('click', blanktile);
startbtn.addEventListener('click', disablebutton);
resetbtn.addEventListener('click', resetpage);
movetilebtn.addEventListener('click', (e) => {
    movetile(e.target.className);
});

