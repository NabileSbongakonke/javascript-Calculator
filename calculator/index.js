const display=document.getElementById("display");
function appendToDisplay(input){
display.value+=input;

}
function clearDisplay(){
display.value="";

}
function Calculate(){
    try {
        display.value=eval(display.value);
        
    } catch (error) {
        alert("Error")
       
        clearDisplay();
    }
    

}