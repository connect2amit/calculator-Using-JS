var add="+";
var sub="-";
var mult="*";
var div="/";

function calculate(selectedElement){
    
    if(selectedElement.textContent==add)
       {          
           
            addition();
       }
       
    else if(selectedElement.textContent==sub)
        {
            subtraction();
        }
    else if(selectedElement.textContent==mult)
        {
            multiplication();
        }
    else if(selectedElement.textContent==div)
        {
            division();
        }
}

function addition(){
    
    
}

function subtraction(){
    
}

function multiplication(){
    
}

function division(){
    
}
function clearDisplay() {
    var clearDisplay = document.getElementById('display');
    display.value = '0';
    storedNum = '0';
    calculationFinished = true;
    operation = operations.none;
}
   
function clearResult() {
    var clearDisplay = document.getElementById('display');
    if (calculationFinished) {
        display.value = '0';
        calculationFinished = false;
    }
}
function input(digit) {
    var display = document.getElementById('display');
    display.value+=digit;
    
}
function operation(digit){
    var display = document.getElementById('display');
    display.value=digit;
}