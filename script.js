// Conway's Game of Life:  Honeyfund Coding Challenge

var matrix = [
    [{"x": 0, "state": false, "liveNeighborCount": 0},
    {"x": 1, "state": false, "liveNeighborCount": 0},
    {"x": 2, "state": false, "liveNeighborCount": 0},
    {"x": 3, "state": false, "liveNeighborCount": 0},
    {"x": 4, "state": false, "liveNeighborCount": 0},
    {"x": 5, "state": false, "liveNeighborCount": 0},
    {"x": 6, "state": false, "liveNeighborCount": 0},
    {"x": 7, "state": false, "liveNeighborCount": 0},
    {"x": 8, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "state": false, "liveNeighborCount": 0}, 
    {"x": 1, "state": false, "liveNeighborCount": 0},
    {"x": 2, "state": false, "liveNeighborCount": 0},
    {"x": 3, "state": false, "liveNeighborCount": 0},
    {"x": 4, "state": false, "liveNeighborCount": 0},
    {"x": 5, "state": false, "liveNeighborCount": 0},
    {"x": 6, "state": false, "liveNeighborCount": 0},
    {"x": 7, "state": false, "liveNeighborCount": 0},
    {"x": 8, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "state": false, "liveNeighborCount": 0}, 
    {"x": 1, "state": false, "liveNeighborCount": 0},
    {"x": 2, "state": false, "liveNeighborCount": 1},
    {"x": 3, "state": false, "liveNeighborCount": 2},
    {"x": 4, "state": false, "liveNeighborCount": 2},
    {"x": 5, "state": false, "liveNeighborCount": 1},
    {"x": 6, "state": false, "liveNeighborCount": 0},
    {"x": 7, "state": false, "liveNeighborCount": 0},
    {"x": 8, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "state": false, "liveNeighborCount": 0}, 
    {"x": 1, "state": false, "liveNeighborCount": 0},
    {"x": 2, "state": false, "liveNeighborCount": 1},
    {"x": 3, "state": true, "liveNeighborCount": 2},
    {"x": 4, "state": true, "liveNeighborCount": 2},
    {"x": 5, "state": false, "liveNeighborCount": 2},
    {"x": 6, "state": false, "liveNeighborCount": 0},
    {"x": 7, "state": false, "liveNeighborCount": 0},
    {"x": 8, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "state": false, "liveNeighborCount": 0}, 
    {"x": 1, "state": false, "liveNeighborCount": 0},
    {"x": 2, "state": false, "liveNeighborCount": 1},
    {"x": 3, "state": false, "liveNeighborCount": 3},
    {"x": 4, "state": true, "liveNeighborCount": 2},
    {"x": 5, "state": false, "liveNeighborCount": 2},
    {"x": 6, "state": false, "liveNeighborCount": 0},
    {"x": 7, "state": false, "liveNeighborCount": 0},
    {"x": 8, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "state": false, "liveNeighborCount": 0},  
    {"x": 1, "state": false, "liveNeighborCount": 0},
    {"x": 2, "state": false, "liveNeighborCount": 0},
    {"x": 3, "state": false, "liveNeighborCount": 1},
    {"x": 4, "state": false, "liveNeighborCount": 1},
    {"x": 5, "state": false, "liveNeighborCount": 1},
    {"x": 6, "state": false, "liveNeighborCount": 0},
    {"x": 7, "state": false, "liveNeighborCount": 0},
    {"x": 8, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "state": false, "liveNeighborCount": 0}, 
    {"x": 1, "state": false, "liveNeighborCount": 0},
    {"x": 2, "state": false, "liveNeighborCount": 0},
    {"x": 3, "state": false, "liveNeighborCount": 0},
    {"x": 4, "state": false, "liveNeighborCount": 0},
    {"x": 5, "state": false, "liveNeighborCount": 0},
    {"x": 6, "state": false, "liveNeighborCount": 0},
    {"x": 7, "state": false, "liveNeighborCount": 0},
    {"x": 8, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "state": false, "liveNeighborCount": 0} ,  
    {"x": 1, "state": false, "liveNeighborCount": 0},
    {"x": 2, "state": false, "liveNeighborCount": 0},
    {"x": 3, "state": false, "liveNeighborCount": 0},
    {"x": 4, "state": false, "liveNeighborCount": 0},
    {"x": 5, "state": false, "liveNeighborCount": 0},
    {"x": 6, "state": false, "liveNeighborCount": 0},
    {"x": 7, "state": false, "liveNeighborCount": 0},
    {"x": 8, "state": false, "liveNeighborCount": 0}],
    [{"x": 0, "state": false, "liveNeighborCount": 0},
    {"x": 1, "state": false, "liveNeighborCount": 0},
    {"x": 2, "state": false, "liveNeighborCount": 0},
    {"x": 3, "state": false, "liveNeighborCount": 0},
    {"x": 4, "state": false, "liveNeighborCount": 0},
    {"x": 5, "state": false, "liveNeighborCount": 0},
    {"x": 6, "state": false, "liveNeighborCount": 0},
    {"x": 7, "state": false, "liveNeighborCount": 0},
    {"x": 8, "state": false, "liveNeighborCount": 0}]];

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
        var newMatrix = matrix;  // make changes on a copy of the current matrix
        for(var i=0; i < newMatrix.length; i++){
            for (var j = 0; j < newMatrix[i].length; j++){
                var currentIndex = {"x": j, "y": i};
                if (matrix[i][j].liveNeighborCount === 2 || matrix[i][j].liveNeighborCount === 3){
                    matrix[i][j].state = true;
                    // console.log(matrix[i][j], ' is alive');
                } else if (matrix[i][j].liveNeighborCount < 2 || matrix[i][j].liveNeighborCount >= 4 )  { 
                    matrix[i][j].state = false;
                    // console.log(matrix[i][j], ' is dead');
                }

                var cellArray = $('#gameboard').find('div');
                for (var k = 0; k < cellArray.length; k++) {
                    if( cellArray[k].innerText == "2" || cellArray[k].innerText == "3"){ 
                        $(cellArray[k]).removeClass('empty').addClass('live');
                    } else {
                        $(cellArray[k]).removeClass('live').addClass('empty');
                    }
                }

                countLiveNeighbors(currentIndex);
            }
        }
        // assign values to newMatrix
        // clearBoard();
        // drawGrid(newMatrix);
    } // end of else. isInitialized === true
    // console.log(neighborArray);
}

function countLiveNeighbors(currentIndex){
    var upL = { "x": (currentIndex.x - 1), "y": (currentIndex.y - 1)};
    var upC = { "x": currentIndex.x, "y": (currentIndex.y - 1)};
    var upR = { "x": (currentIndex.x + 1), "y": (currentIndex.y - 1)};
    var left = { "x": (currentIndex.x - 1), "y": currentIndex.y};
    var right = { "x": (currentIndex.x + 1), "y": currentIndex.y};
    var dnL = { "x": (currentIndex.x - 1), "y": (currentIndex.y + 1)};
    var dnC = { "x": currentIndex.x, "y": (currentIndex.y + 1)};
    var dnR ={ "x": (currentIndex.x + 1), "y": (currentIndex.y + 1)};

    var neighborArray = [upL, upC, upR, left, right, dnL, dnC, dnR];

    // wrap matrix
    for (var i = 0; i < neighborArray.length; i++){
        if(neighborArray[i].x === -1){
            neighborArray[i].x = 8;
        } else if (neighborArray[i].x === 9){
            neighborArray[i].x = 0;
        }
        if (neighborArray[i].y === -1){
            neighborArray[i].y = 8;
        } else if (neighborArray[i].y === 9){
            neighborArray[i].y = 0;
        }
    }

    // console.log('neighborArray is: ', neighborArray);
    if (currentIndex.state === true) { 
        for(var k = 0; k < neighborArray.length; k++){
            currentIndex.liveNeighborCount += 1; 
        }
    }
    console.log('hello from countLiveNeighbors');
    // return liveNeighborCount;
}

function clearBoard(){
    $(gameboard).html('');
}



