 const display = document.getElementById("display");

 function AppendDisplay(input)
 {
    display.value += input;
 }

 function Calculate()
 {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
 }

 function ClearDisplay()
 {
    display.value = "";
 }