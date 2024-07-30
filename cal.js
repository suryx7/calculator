const display = document.getElementById("display");
const display2 = document.getElementById("display2");


function appendtoDisplay(input){
    π = 3.14159265358979;
    display.value += input;
}

function cleared(){
    display.value = display.value.slice(0, -1);
}

function clearDisplay(){ 
    display.value = "";
    display2.value = "";
}

function power(){
    display.value = String(Math.pow(display.value, 2));
}

function sqpower(){
    display.value = String(Math.pow(display.value, 0.5));
}

function calculate(){
    try{
        display2.value = eval(display.value);
        // display.value = String(display2.value)
    }
    catch(error){
        display.value = "Error";
    }
    
} 