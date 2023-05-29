function addCommasToNumber(number) {
    // Convert the number to a string
    var numberStr = number.toString();
    
    // Split the number into integer and decimal parts (if any)
    var parts = numberStr.split('.');
    
    // Get the integer part
    var integerPart = parts[0];
    
    // Add commas to the integer part
    var integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Check if there is a decimal part
    if (parts.length > 1) {
      // Combine the integer part with the decimal part
      var decimalPart = parts[1];
      var numberWithCommas = integerWithCommas + '.' + decimalPart;
    } else {
      numberWithCommas = integerWithCommas;
    }
    
    return numberWithCommas;
  }

export default addCommasToNumber;