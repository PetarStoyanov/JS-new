//PROBLEM 1
$(document).ready(function () {
    $("#oddOrEvenInput").keydown(function (e) {
        if (e.keyCode == 13)
            problem1Func();
    });
});

function problem1Func() {
    var output = document.getElementById("problem1Empty");
    var input = document.getElementById("oddOrEvenInput").value;
    if (isNaN(input.trim() || input === '')) {
        output.innerHTML = "Invalid Input";
    }
    else {
        if (input.trim() % 1 != 0) {  //making sure it's an integer
            output.innerHTML = "Invalid Input";
        }
        else {
            if (input.trim() % 2 == 0) {
                output.innerHTML = "Even";
            }
            else {
                output.innerHTML = "Odd";
            }
        }        
    }
}

//PROBLEM 2

$(document).ready(function () {
    $("#devisableBy5and7").keydown(function (e) {
        if (e.keyCode == 13)
            problem2Func();
    });
});

function problem2Func() {
    var output = document.getElementById("problem2Empty");
    var input = document.getElementById("devisableBy5and7").value;
    if (isNaN(input.trim() || input === '')) {
        output.innerHTML = "Invalid Input";
    }
    else {
        if (input.trim() % 1 != 0) {  //making sure it's an integer
            output.innerHTML = "Invalid Input";
        }
        else {
            if ( (input.trim() % 5 == 0) && (input.trim() % 7 == 0)) {
                output.innerHTML = "true";
            }
            else {
                output.innerHTML = "false";
            }
        }
    }
}

//PROBLEM 3

$(document).ready(function () {
    $("#problem3Submitter").click(function () {
        validator();
    });
});

function validator() {
    var inputWidth = document.getElementById('problem3Width');
    var inputHeight = document.getElementById('problem3Height');
    var area = document.getElementById('areaShow');

    if (isNaN(inputWidth.value.trim() * 1) || isNaN(inputHeight.value.trim() * 1)) {
        area.innerHTML = "Invalid Data!"; 
    }
    else if (inputWidth.value == '' || inputHeight.value == '') {
        area.innerHTML = "Missing Data!";
    }
    else {
        area.innerHTML = (inputHeight.value.trim() * 1) * (inputWidth.value.trim() * 1);
    }
}

//PROBLEM 4
$(document).ready(function () {
    $("#numberContainer").keydown(function (e) {
        if (e.keyCode == 13)
            number7checker();
    });
});

function number7checker() {
    var input = document.getElementById('numberContainer');
    var output = document.getElementById('number7Shower');


    if (input.value == '') {
        output.innerHTML = 'NO INPUT!';
    }
    else if (isNaN(input.value.trim() * 1) || (input.value.trim() != (input.value.trim() | 0))) {
        output.innerHTML = 'Invalid Data!';
    }
    else {
        if (input.value.length <3) {
            output.innerHTML = 'Number is too small';
        }
        else {
            if (input.value[2] == '7') {
                output.innerHTML = 'true';
            }
            else {
                output.innerHTML = 'false';
            }
        }
    }
}

//PROBLEM 5

$(document).ready(function () {
    $("#decimalContainer").keydown(function (e) {
        if (e.keyCode == 13)
            show3bit();
    });
});

function show3bit() {
    var inputVal = document.getElementById('decimalContainer');
    var binVal = document.getElementById('binaryRepresentation');
    var digitVal = document.getElementById('thirdBit');
    var bineLength;
    if (inputVal.value == '') {
        binVal.innerHTML = 'NO INPUT!';
        digitVal.innerHTML = '-';
    }
    else if (isNaN(inputVal.value.trim() * 1) || (inputVal.value.trim() != (inputVal.value.trim() | 0))) {
        binVal.innerHTML = 'Invalid Data!';
        digitVal.innerHTML = '-';
    }
    else {        
        var binInputStyle = inputVal.value * 1;
        bineLength = binInputStyle.toString(2);
        binVal.innerHTML =bineLength ;       
        
        if (bineLength.length < 3) {
            digitVal.innerHTML = '-';
        }
        else {
            digitVal.innerHTML = bineLength[bineLength.length - 3];
        }
    }   
}

//PROBLEM 6

$(document).ready(function () {
    $("#submitPosition").click(function () {
        position();
    });
});

function position() {
    var X_point = document.getElementById('x_holder');
    var Y_point = document.getElementById('y_holder');
    var showIfInside = document.getElementById('isInsideCirlce');

    if (isNaN(X_point.value.trim() * 1) || isNaN(Y_point.value.trim() * 1)) {
        showIfInside.innerHTML = "Invalid Data!";
    }
    else if (X_point.value == '' || Y_point.value == '') {
        showIfInside.innerHTML = "Missing Data!";
    }
    else {
        //TODO
        var beamWidth = Math.sqrt(Math.abs(X_point.value.trim() * 1) * Math.abs(X_point.value.trim() * 1)
                                + Math.abs(Y_point.value.trim() * 1) * Math.abs(Y_point.value.trim() * 1));
        if ((beamWidth*1 - 5) < 0.000001) {  //EVEN
            showIfInside.innerHTML = "true";
        }
        else if((beamWidth*1 - 5) > 0.000001) //OUTSIDE
        {
            showIfInside.innerHTML = "false";
        }
        else if ( (5 - beamWidth * 1) > 0.00001) { //INSIDE
            showIfInside.innerHTML = "true";
        }
    }
}

//PROBLEM 7

$(document).ready(function () {
    $("#numberEntry").keydown(function (e) {
        if (e.keyCode == 13)
            isPrime();
    });
});

function isPrime() {
    var entryValue = document.getElementById("numberEntry"),
        exitValue = document.getElementById("showIfPrime"),
        looper,
        isPrimeResult = true;

    if (isNaN(entryValue.value.trim() || entryValue === '')) {
        exitValue.innerHTML = "Invalid Input";
    }
    else {
        if (entryValue.value.trim() % 1 != 0) {  //making sure it's an integer
            exitValue.innerHTML = "Invalid Input";
        }
        else {
            if ((entryValue.value.trim() * 1) < 2) {
                exitValue.innerHTML = "false";
            }
            else if ((entryValue.value.trim() * 1) > 100) {
                exitValue.innerHTML = "value outside range";
            }
            else {
                for (looper = 2; looper < 11; looper++) {
                    if (!isPrimeResult) {
                        break;
                    }
                    if (looper != (entryValue.value * 1)) {             //IGNORE DEVISION ON ITSELF
                        if ((entryValue.value * 1) % looper == 0) {
                            isPrimeResult = false;
                            break;
                        }                        
                    }                  
                }
                if (isPrimeResult) {                        //FINAL RESULT
                    exitValue.innerHTML = "true";
                }
                else {
                    exitValue.innerHTML = "false";
                }
            }
        }
    }  
}

//PROBLEM 8
$(document).ready(function () {
    $("#findTrapetzArea").click(function () {
        trapAr();
    });
});

function trapAr() {
    var sideA = document.getElementById('a_holder');
    var sideB = document.getElementById('b_holder');
    var height = document.getElementById('h_holder');
    var areaResult = document.getElementById('showTrapetzArea');
    if (sideA.value == '' || sideB.value == '' || height.value == '') {
        areaResult.innerHTML = "Missing Data!";
    }
    else if ((isNaN(sideA.value.trim() * 1)) || (isNaN(sideB.value.trim() * 1)) || (isNaN(height.value.trim() * 1)) ||
         (sideA.value.trim() * 1 < 0.00001) || (sideB.value.trim() * 1 < 0.00001) || (height.value.trim() * 1 < 0.00001)) {
        areaResult.innerHTML = "Invalid Data!";
    }    
    else {
        var preResult = (((sideA.value * 1) + (sideB.value * 1))/2)*height.value;
        areaResult.innerHTML = preResult.toFixed(7);

    }
}

//PROBLEM 9

$(document).ready(function () {
    $("#checkPosition").click(function () {
        finalPosition();
    });
});

function finalPosition() {
    var PointX = document.getElementById('pointXdimension');
    var PointY = document.getElementById('pointYdimension');
    var showIfCorrectPosition = document.getElementById('isCorrect');

    
    if (PointX.value == '' || PointY.value == '') {
        showIfCorrectPosition.innerHTML = "Missing Data!";
    }
    else if (isNaN(PointX.value.trim() * 1) || isNaN(PointY.value.trim() * 1)) {
        showIfCorrectPosition.innerHTML = "Invalid Data!";
    }
    else {
        var circleStatus = checkIfPointIsInsideTheCircle((PointX.value.trim() * 1), (PointY.value.trim() * 1));

        if (circleStatus == false) {
            showIfCorrectPosition.innerHTML = "no";
        }
        else {
            var isInCirl = checkIfPointIsInsideTheRect((PointX.value.trim() * 1), (PointY.value.trim() * 1));
            if (isInCirl == false) {
                showIfCorrectPosition.innerHTML = "yes";
            }
            else {
                showIfCorrectPosition.innerHTML = "no";
            }
        }       
    }
}

function checkIfPointIsInsideTheCircle(x, y) {
    var isInCircle = false;
    var xPos = Math.abs((x * 1) - 1);
    var yPos = Math.abs((y * 1) - 1);
    var res = Math.sqrt((xPos * xPos) + (yPos * yPos));
    if (res <= 3.000001) {
        isInCircle = true;
    }
    return isInCircle;
}

function checkIfPointIsInsideTheRect(x, y) {
    var isInRect = false;
    var xPrim = x;
    var yPrim = y;
    if ((xPrim <= 5 && xPrim >= -1) && (yPrim <= 1 && yPrim >= -1)) {
        isInRect = true;
    }


    return isInRect;
}