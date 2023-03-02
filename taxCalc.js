module.exports = function (sal) {

var taxLevel1 = 18200;
var taxLevel2 = 37000;
var taxLevel3 = 90000;
var taxLevel4 = 180000;

if (sal <= taxLevel1) {
    return 0;
} else  if (sal <= taxLevel2){
    var taxableSalary = sal - taxLevel1;
    return taxableSalary * 19/100; 
} else  if (sal <= taxLevel3){
    var taxableSalary = sal - taxLevel2;
    return 3572 + taxableSalary * 32.5/100; 
} else  if (sal <= taxLevel4){
    var taxableSalary = sal - taxLevel3;
    return 20797 + taxableSalary * 37/100; 
} else  if (sal > taxLevel4){
    var taxableSalary = sal - taxLevel4;
    return 54097 + taxableSalary * 45/100; 
}
}

function calculateTax (sal) {

var taxLevel1 = 18200;
var taxLevel2 = 37000;
var taxLevel3 = 90000;
var taxLevel4 = 180000;

if (sal <= taxLevel1) {
    return 0;
} else  if (sal <= taxLevel2){
    var taxableSalary = sal - taxLevel1;
    return taxableSalary * 19/100; 
} else  if (sal <= taxLevel3){
    var taxableSalary = sal - taxLevel2;
    return 3572 + taxableSalary * 32.5/100; 
} else  if (sal <= taxLevel4){
    var taxableSalary = sal - taxLevel3;
    return 20797 + taxableSalary * 37/100; 
} else  if (sal > taxLevel4){
    var taxableSalary = sal - taxLevel4;
    return 54097 + taxableSalary * 45/100; 
}
}

function attachTaxCalcToForm(){
    var sal = document.getElementById('eExpSalary').value;
    var tax = calculateTax(sal);
    document.getElementById('tax').textContent = tax + ' AUD';

}



