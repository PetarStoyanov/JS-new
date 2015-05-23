/*PROBLEM 1*/

   var int = 5,
       float = 3.44,
       string = 'Fartjoke',
       object = {
           name: 'Kolio',
           nickname: 'pipetkata'
       },
       array = [1, 2, 3, 4, 5],
       boolVar = true,
       functionLitteral = function () {
           alert('function litteral');
       };

function firstFunction() {

    var catcher = document.getElementById('firstProblem');
    catcher.innerHTML = object.name; /* The other variables can be shown the same way*/
    secondFunction();
}

/*PROBLEM 2*/
function secondFunction() {
    var theString = '"How you doin\'?", Joey said.';
    document.getElementById('secondProblem').innerHTML = theString;
    thirdFunction();
}

/*PROBLEM 3*/
function thirdFunction() {
    
    var arounder,
        combination = ' ',
        container = [
        int,
        float,
        object,
        array,
        functionLitteral
        ];

   for (arounder = 0; arounder < container.length; arounder += 1) {        
       combination += container[arounder] + '&nbsp&nbsp&nbsp';
    }
    
   document.getElementById('thirdProblem').innerHTML = combination;
    fourthFunction();
}
/*PROBLEM 4*/
function fourthFunction() {

    var nullVar = null,
        undefinedVar,
        finalCombiner = typeof (nullvar) + ' ' + typeof (undefinedVar);

    document.getElementById('fourthProblem').innerHTML = finalCombiner;

}