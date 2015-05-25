/* Problem 1. Numbers
Write a script that prints all the numbers from 1 to N.
*/
/*Problem 2. Numbers not divisible*/
$(document).ready(function () {
    $("#click1").click(function () {
        firstAndSecondProblemsResult();
    });
});
function firstAndSecondProblemsResult() {
    var divOuterFirst = document.getElementById('firstProblem'),
        divOuterSecond = document.getElementById('secondProblem'),
        inputValue=  (document.getElementById('firstInput').value) * 1,
        firstDivOutput = '',
        secondDivOutput = '';
  
    for (i = 1 ; i <= inputValue ; i += 1) {
        if (i != inputValue) {
            firstDivOutput += i.toString() + ", ";
        }
        else {
            firstDivOutput += i;
        }
    }
    for (j = 1 ; j <= inputValue ; j += 1) {
        if (j != inputValue) {
            if (j % 21 != 0) {
                secondDivOutput += j.toString() + ", ";
            }         
        }
        else {
            if (j % 21 != 0) {
                secondDivOutput += j.toString();
            }           
        }
    }
    divOuterFirst.innerHTML = firstDivOutput;
    divOuterSecond.innerHTML = secondDivOutput;
}

/*Problem 3. Min/Max of sequence*/

  $(document).ready(function () {
        $("#click2").click(function () {
            thirdProblemsResult();
        });
    });
  function thirdProblemsResult() {
      var stringInput = document.getElementById('thirdInput').value,
          splitOutput = document.getElementById('thirdProblem'),
          p = 0;

      var parts = stringInput.split(" ");
      var parts2 = [];
      for (p = 0; p < parts.length; p += 1) {
          parts2[p] = parseFloat(parts[p]);
      }
      parts2.sort(function (a,b) { return a - b });
      
      splitOutput.innerHTML = 'Min: ' + parts2[0] + '&nbsp&nbsp&nbsp&nbsp&nbspMax: ' + parts2[parts2.length - 1];
  }

/*Problem 4. Lexicographically smallest*/
  
  window.onload = fourthProblemResult;
 
function fourthProblemResult() {
    var documentArray = [],
        windowArray = [],
        navigatorArray = [],
        outputDocumentDiv = document.getElementById('fourthProblemDocument'),
        outputWindowDiv = document.getElementById('fourthProblemWindow'),
        outputNavigatorDiv = document.getElementById('fourthProblemNavigator'),
        outputDocumentValue = '',
        outputWindowValue = '',
        outputNavigatorValue = '';
        

    for (var prop1 in document) {
        documentArray.push(prop1);
    }

    for (var prop2 in window) {
        windowArray.push(prop2);
    }

    for (var prop3 in navigator) {
        navigatorArray.push(prop3);
    }
    
    documentArray.sort();
    windowArray.sort();
    navigatorArray.sort();

    outputDocumentValue += 'Min document :' + documentArray[0] + '&nbsp&nbsp&nbsp&nbspMax document: ' + documentArray[documentArray.length - 1];
    outputWindowValue += 'Min Window :' + windowArray[0] + '&nbsp&nbsp&nbsp&nbspMax Window: ' + windowArray[windowArray.length - 1];
    outputNavigatorValue += 'Min Navigator :' + navigatorArray[0] + '&nbsp&nbsp&nbsp&nbspMax Navigator: ' + navigatorArray[navigatorArray.length - 1];
    
    outputDocumentDiv.innerHTML = outputDocumentValue;
    outputWindowDiv.innerHTML = outputWindowValue;
    outputNavigatorDiv.innerHTML = outputNavigatorValue;
}