
function clearDisplay() {
    var clearDisplay = document.getElementById('display');
    display.value = '0';
    
}

function input(selectedElement) {
	document.getElementById('display').value+=selectedElement;
}
function operation(number){
    document.getElementById('display').value+=number;
}
function calculate(){
	document.data=eval(document.getElementById('display').value);
	document.getElementById('display').value=document.data;
}