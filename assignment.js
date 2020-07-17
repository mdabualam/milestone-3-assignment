function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var firstCall = feetToMile(1000);
console.log(firstCall);
var secondCall = feetToMile(5000);
console.log(secondCall);
var thirdCall = feetToMile(50000);
console.log(thirdCall);

function woodCalculator(chair, table, bed){
    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount = bed*5;
    var totalFurniture = chairCount + tableCount + bedCount;
    return totalFurniture;
}
var furnituretResult = woodCalculator( 14, 4, 7 );
console.log(furnituretResult);

function tinyFriends(ages) {
    var lowest = ages [0];
    for(var i = 0; i < ages.length; i++) {
        var currentAge = ages[i];
        if(currentAge < lowest) {
            lowest = currentAge;

        }
    }
    return lowest;
}
var lowestAge = tinyFriends([20, 25, 23, 16, 17, 18, 12, 11]);
console.log(lowestAge);

