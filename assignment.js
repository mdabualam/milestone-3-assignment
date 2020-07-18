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


function brickCalculator(floor) {
    var brick = 0;
        if (floor <=10) {
            brick = floor * 15 * 1000;
        } else if (floor <=20) {
            var firstTenFloor = 10*15*1000;
            var remaining = floor -10;
            var nextTenFloor = remaining *12*1000;
            brick = firstTenFloor + nextTenFloor;
        }
        else{
            var firstTenFloor = 10*15*1000;
            var nextTenFloor = 10*12*1000;
            var remaining = floor - 20;
            var aboveTwentyFloor = remaining *10*1000;
            brick = firstTenFloor + nextTenFloor + aboveTwentyFloor;
        }
        return brick;
    }
    var count = brickCalculator(42)
    console.log(count);


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

