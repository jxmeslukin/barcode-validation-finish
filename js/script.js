/*
       _                          __      __   _     
      (_)  ______ ___  ___  _____/ /_  __/ /__(_)___ 
     / / |/_/ __ `__ \/ _ \/ ___/ / / / / //_/ / __ \
    / />  </ / / / / /  __(__  ) / /_/ / ,< / / / / /
 __/ /_/|_/_/ /_/ /_/\___/____/_/\__,_/_/|_/_/_/ /_/ 
/___/                                                

*/

function barcodeCheck() {
    var barcode = document.getElementById('barcodeNum').value
    var odds = Number(barcode.charAt(0)) + Number(barcode.charAt(2)) + Number(barcode.charAt(4)) + Number(barcode.charAt(6)) + Number(barcode.charAt(8)) + Number(barcode.charAt(10)) + Number(barcode.charAt(12))
    var evens = Number(barcode.charAt(1)) + Number(barcode.charAt(3)) + Number(barcode.charAt(5)) + Number(barcode.charAt(7)) + Number(barcode.charAt(9)) + Number(barcode.charAt(11))
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    var valid = (odds + (3*evens)) % 10
    console.log(valid)
    console.log(evens)
    console.log(odds)
    if(((odds + (3*evens)) % 10) === 0) {
        input.innerHTML =  input.innerHTML + barcode + "\n"
        output.innerHTML = output.innerHTML + barcode + " OK" + "\n"
    }
    else {
        input.innerHTML = input.innerHTML + barcode + "\n"
        output.innerHTML = output.innerHTML + barcode + " INVALID" + "\n"
    }

}