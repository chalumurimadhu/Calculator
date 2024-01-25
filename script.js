const display = document.getElementById("display");
function clearScreen() {
    display.value = "";
    console.log("Screen cleared!");
   
}
function appendToDisplay(input) {
    display.value += input;
    console.log("Hello world!");
}
function result() {
   try
   {
    display.value =eval(display.value);
   } 
    catch(error)
    {
        display.value ="Error"
    }
}