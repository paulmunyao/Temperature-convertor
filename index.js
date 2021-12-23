//Temperature Convertor
function convertTemperature() {
    let Temp = parseInt(prompt("Enter Temperature"));
    let convertTemperature = Temp * 1.8 + 32;
  
  //   if ((Temperature = "" || isNaN(Temperature))) {
  //     return "Enter a valid number";
  //   }
    return convertTemperature;
  }
  
  alert(convertTemperature());