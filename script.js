// Conway's Game of Life:  Honeyfund Coding Challenge

var matrix = [
    [{"x": 0, "y": 0, "state": false, "liveNeighborCount": 0},
    {"x": 1, "y": 0, "state": false, "liveNeighborCount": 0},
    {"x": 2, "y": 0, "state": false, "liveNeighborCount": 0},
    {"x": 3, "y": 0, "state": false, "liveNeighborCount": 0},
    {"x": 4, "y": 0, "state": false, "liveNeighborCount": 0},
    {"x": 5, "y": 0, "state": false, "liveNeighborCount": 0},
    {"x": 6, "y": 0, "state": false, "liveNeighborCount": 0},
    {"x": 7, "y": 0, "state": false, "liveNeighborCount": 0},
    {"x": 8, "y": 0, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "y": 1, "state": false, "liveNeighborCount": 0}, 
    {"x": 1, "y": 1, "state": false, "liveNeighborCount": 0},
    {"x": 2, "y": 1, "state": false, "liveNeighborCount": 0},
    {"x": 3, "y": 1, "state": false, "liveNeighborCount": 0},
    {"x": 4, "y": 1, "state": false, "liveNeighborCount": 0},
    {"x": 5, "y": 1, "state": false, "liveNeighborCount": 0},
    {"x": 6, "y": 1, "state": false, "liveNeighborCount": 0},
    {"x": 7, "y": 1, "state": false, "liveNeighborCount": 0},
    {"x": 8, "y": 1, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "y": 2, "state": false, "liveNeighborCount": 0}, 
    {"x": 1, "y": 2, "state": false, "liveNeighborCount": 0},
    {"x": 2, "y": 2, "state": false, "liveNeighborCount": 1},
    {"x": 3, "y": 2, "state": false, "liveNeighborCount": 2},
    {"x": 4, "y": 2, "state": false, "liveNeighborCount": 2},
    {"x": 5, "y": 2, "state": false, "liveNeighborCount": 1},
    {"x": 6, "y": 2, "state": false, "liveNeighborCount": 0},
    {"x": 7, "y": 2, "state": false, "liveNeighborCount": 0},
    {"x": 8, "y": 2, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "y": 3, "state": false, "liveNeighborCount": 0}, 
    {"x": 1, "y": 3, "state": false, "liveNeighborCount": 0},
    {"x": 2, "y": 3, "state": false, "liveNeighborCount": 1},
    {"x": 3, "y": 3, "state": true, "liveNeighborCount": 2},
    {"x": 4, "y": 3, "state": true, "liveNeighborCount": 2},
    {"x": 5, "y": 3, "state": false, "liveNeighborCount": 2},
    {"x": 6, "y": 3, "state": false, "liveNeighborCount": 0},
    {"x": 7, "y": 3, "state": false, "liveNeighborCount": 0},
    {"x": 8, "y": 3, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "y": 4, "state": false, "liveNeighborCount": 0}, 
    {"x": 1, "y": 4, "state": false, "liveNeighborCount": 0},
    {"x": 2, "y": 4, "state": false, "liveNeighborCount": 1},
    {"x": 3, "y": 4, "state": false, "liveNeighborCount": 3},
    {"x": 4, "y": 4, "state": true, "liveNeighborCount": 2},
    {"x": 5, "y": 4, "state": false, "liveNeighborCount": 2},
    {"x": 6, "y": 4, "state": false, "liveNeighborCount": 0},
    {"x": 7, "y": 4, "state": false, "liveNeighborCount": 0},
    {"x": 8, "y": 4, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "y": 5, "state": false, "liveNeighborCount": 0},  
    {"x": 1, "y": 5, "state": false, "liveNeighborCount": 0},
    {"x": 2, "y": 5, "state": false, "liveNeighborCount": 0},
    {"x": 3, "y": 5, "state": false, "liveNeighborCount": 1},
    {"x": 4, "y": 5, "state": false, "liveNeighborCount": 1},
    {"x": 5, "y": 5, "state": false, "liveNeighborCount": 1},
    {"x": 6, "y": 5, "state": false, "liveNeighborCount": 0},
    {"x": 7, "y": 5, "state": false, "liveNeighborCount": 0},
    {"x": 8, "y": 5, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "y": 6, "state": false, "liveNeighborCount": 0}, 
    {"x": 1, "y": 6, "state": false, "liveNeighborCount": 0},
    {"x": 2, "y": 6, "state": false, "liveNeighborCount": 0},
    {"x": 3, "y": 6, "state": false, "liveNeighborCount": 0},
    {"x": 4, "y": 6, "state": false, "liveNeighborCount": 0},
    {"x": 5, "y": 6, "state": false, "liveNeighborCount": 0},
    {"x": 6, "y": 6, "state": false, "liveNeighborCount": 0},
    {"x": 7, "y": 6, "state": false, "liveNeighborCount": 0},
    {"x": 8, "y": 6, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "y": 7, "state": false, "liveNeighborCount": 0} ,  
    {"x": 1, "y": 7, "state": false, "liveNeighborCount": 0},
    {"x": 2, "y": 7, "state": false, "liveNeighborCount": 0},
    {"x": 3, "y": 7, "state": false, "liveNeighborCount": 0},
    {"x": 4, "y": 7, "state": false, "liveNeighborCount": 0},
    {"x": 5, "y": 7, "state": false, "liveNeighborCount": 0},
    {"x": 6, "y": 7, "state": false, "liveNeighborCount": 0},
    {"x": 7, "y": 7, "state": false, "liveNeighborCount": 0},
    {"x": 8, "y": 7, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "y": 8, "state": false, "liveNeighborCount": 0},
    {"x": 1, "y": 8, "state": false, "liveNeighborCount": 0},
    {"x": 2, "y": 8, "state": false, "liveNeighborCount": 0},
    {"x": 3, "y": 8, "state": false, "liveNeighborCount": 0},
    {"x": 4, "y": 8, "state": false, "liveNeighborCount": 0},
    {"x": 5, "y": 8, "state": false, "liveNeighborCount": 0},
    {"x": 6, "y": 8, "state": false, "liveNeighborCount": 0},
    {"x": 7, "y": 8, "state": false, "liveNeighborCount": 0},
    {"x": 8, "y": 8, "state": false, "liveNeighborCount": 0}]];

var isInitialized = false;
var liveNeighborCount = 0;

// initialize board with 3 live adjacent cells, currently hard-coded 
// REFACTOR: initialize with random cells or mouse click (on gameboard)

function drawGrid(matrix){
    var gameboard = document.getElementById("gameboard");
    // traverse the matrix and draw the DOM
    for(var i=0; i < matrix.length; i++){
        for (var j = 0; j < matrix[i].length; j++){
            if (matrix[i][j].state === false){
                $(gameboard).append("<div class='empty'>" + matrix[i][j].liveNeighborCount + "</div>");
                if (j === 8){
                  $(gameboard).append("<br>");
                }
            } else {
                $(gameboard).append("<div class='live'>" + matrix[i][j].liveNeighborCount + "</div>");
            }
        }
    }
    if(!isInitialized){
        isInitialized = true;
        console.log('initialized!');  // first time only
    }
}

// REFACTOR:  setTimeout for each generation (currently button click calls nextGen(matrix))
function nextGen(matrix) {
    if (!isInitialized){
          drawGrid(matrix);  // use hard-coded matrix first time
      } else {
        // console.log('already initialized');
        // var newMatrix = matrix;  // make changes on a copy of the current matrix
        for(var i=0; i < matrix.length; i++){
            for (var j = 0; j < matrix[i].length; j++){
                // var currentIndex = {"x": j, "y": i};
                if (matrix[i][j].liveNeighborCount === 2 || matrix[i][j].liveNeighborCount === 3){
                    matrix[i][j].state = true;
                    // console.log(matrix[i][j], ' is alive');
                } else if (matrix[i][j].liveNeighborCount < 2 || matrix[i][j].liveNeighborCount >= 4 )  { 
                    matrix[i][j].state = false;
                    // console.log(matrix[i][j], ' is dead');
                }

                // countLiveNeighbors(matrix[i][j]);  // option move line 142 here

                // update classes  REFACTOR:  could be separate mini-function
                var cellArray = $('#gameboard').find('div');
                for (var k = 0; k < cellArray.length; k++) {
                    if( cellArray[k].innerText == "2" || cellArray[k].innerText == "3"){ 
                        $(cellArray[k]).removeClass('empty').addClass('live');
                    } else {
                        $(cellArray[k]).removeClass('live').addClass('empty');
                    }
                }
                countLiveNeighbors(matrix[i][j]);
            }
        }
        clearBoard();
        drawGrid(matrix);
    } // end of else. isInitialized === true
    // console.log(neighborArray);
}

function countLiveNeighbors(currentIndex){
    // reset count
    currentIndex.liveNeighborCount = 0;

    var upL = {"x": (currentIndex.x - 1), "y": (currentIndex.y - 1)};
    var upC = {"x": currentIndex.x, "y": (currentIndex.y - 1)};
    var upR = {"x": (currentIndex.x + 1), "y": (currentIndex.y - 1)};
    var left = {"x": (currentIndex.x - 1), "y": currentIndex.y};
    var right = {"x": (currentIndex.x + 1), "y": currentIndex.y};
    var dnL = {"x": (currentIndex.x - 1), "y": (currentIndex.y + 1)};
    var dnC = {"x": currentIndex.x, "y": (currentIndex.y + 1)};
    var dnR ={"x": (currentIndex.x + 1), "y": (currentIndex.y + 1)};

    var neighborArray = [upL, upC, upR, left, right, dnL, dnC, dnR];

    // wrap matrix
    for (var k = 0; k < neighborArray.length; k++){
        if(neighborArray[k].x === -1){
            neighborArray[k].x = 8;
        } else if (neighborArray[k].x === 9){
            neighborArray[k].x = 0;
        }
        if (neighborArray[k].y === -1){
            neighborArray[k].y = 8;
        } else if (neighborArray[k].y === 9){
            neighborArray[k].y = 0;
        }

        if ( matrix[neighborArray[k].y][neighborArray[k].x].state === true) { 
            currentIndex.liveNeighborCount+=1;
        } 
    }
    // console.log('neighborArray is: ', neighborArray);
    // console.log('currentIndex: ', currentIndex, ' has ', currentIndex.liveNeighborCount, ' live neighbors.');
}

function clearBoard(){
    $(gameboard).html('');
}



