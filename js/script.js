// js number guessing game start

let boxOne = document.querySelector(".box_one");
let fName = document.querySelector(" .box_one .fname");
let fError = document.querySelector(".box_one .ferror");
let fBtn = document.querySelector(" .box_one button");
let fInput = document.querySelector(".box_one input");

let boxTwo = document.querySelector(".box_two");
let sPName = document.querySelector(".box_two h2");
let sBtn = document.querySelector(".box_two button");
let sError = document.querySelector(".box_two .serror");
let sInput = document.querySelector(".box_two input");

let boxThree = document.querySelector(".box_three");
let thPName = document.querySelector(".box_three h2");
let thBtn = document.querySelector(".box_three button");
let thError = document.querySelector(".box_three .therror");
let thInput = document.querySelector(".box_three input");

let boxFour = document.querySelector(".box_four");
let foPName = document.querySelector(".box_four h2");
let foBtn = document.querySelector(".box_four button");
let foError = document.querySelector(".box_four .foerror");
let foInput = document.querySelector(".box_four input");
let foChance = document.querySelector(".box_four h3");
let chance = 5;

let boxFive = document.querySelector(".box_five");
let congresst = document.querySelector(".box_five h2");
let winNumber = document.querySelector(".box_five p")


// box one js

boxOne.style.display = "block";

fBtn.addEventListener("click", function(){
    if(fInput.value === ""){
     fError.innerText = "Please Enter Your Name";
    }
    else{
       boxOne.style.display = "none";
       boxTwo.style.display = "block";
       sPName.innerText = fInput.value + ", Input a number ";
    };
});

// box one js end

// box two js two
sBtn.addEventListener("click", function(){
    if(sInput.value <= 9 && sInput.value >=0){
    
    boxTwo.style.display = "none";
    boxThree.style.display = "block";
    }
    else{
        sError.innerText = " please input number btween 0 to 10"
    };
});

// box two js end

// box three js start

thBtn.addEventListener("click", function(){
    if(thInput.value === ""){
        thError.innerText = "Please input your name"
    }
    else{
        boxThree.style.display = "none";
        boxFour.style.display = "block"
        foPName.innerText = thInput.value + ", input a number"

    }

});
// box three js end 

// box four js start
foBtn.addEventListener("click", function(){
    if(sInput.value === foInput.value){
        boxFour.style.display = "none";
        boxFive.style.display = "block";
        congresst.innerText = `Congratulations ${thInput.value} is win`;
        winNumber.innerText = ` frist Player number is: ${sInput.value}`;
    }

    else{
        chance--;
        foChance.innerText = "Chance: " + chance;

        if(chance === 0){
        boxFour.style.display = "none";
        boxFive.style.display = "block";
        congresst.innerText = `Congratulations ${fInput.value} is win`;
        winNumber.innerText = `Win number is: ${sInput.value}`;
        }
    }
})

// box four js end



