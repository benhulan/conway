// Conway's Game of Life:  Honeyfund Coding Challenge

var matrix = [
    [{"row": 0, "column": 0, "state": false, "liveNeighborCount": 0},
    {"row": 0, "column": 1, "state": false, "liveNeighborCount": 0},
    {"row": 0, "column": 2, "state": false, "liveNeighborCount": 0},
    {"row": 0, "column": 3, "state": false, "liveNeighborCount": 0},
    {"row": 0, "column": 4, "state": false, "liveNeighborCount": 0},
    {"row": 0, "column": 5, "state": false, "liveNeighborCount": 0},
    {"row": 0, "column": 6, "state": false, "liveNeighborCount": 0},
    {"row": 0, "column": 7, "state": false, "liveNeighborCount": 0},
    {"row": 0, "column": 8, "state": false, "liveNeighborCount": 0}],
    [{"row": 1, "column": 0, "state": false, "liveNeighborCount": 0}, 
    {"row": 1, "column": 1, "state": false, "liveNeighborCount": 0},
    {"row": 1, "column": 2, "state": false, "liveNeighborCount": 0},
    {"row": 1, "column": 3, "state": false, "liveNeighborCount": 0},
    {"row": 1, "column": 4, "state": false, "liveNeighborCount": 0},
    {"row": 1, "column": 5, "state": false, "liveNeighborCount": 0},
    {"row": 1, "column": 6, "state": false, "liveNeighborCount": 0},
    {"row": 1, "column": 7, "state": false, "liveNeighborCount": 0},
    {"row": 1, "column": 8, "state": false, "liveNeighborCount": 0}],
    [{"row": 2, "column": 0, "state": false, "liveNeighborCount": 0}, 
    {"row": 2, "column": 1, "state": false, "liveNeighborCount": 0},
    {"row": 2, "column": 2, "state": false, "liveNeighborCount": 1},
    {"row": 2, "column": 3, "state": false, "liveNeighborCount": 1},
    {"row": 2, "column": 4, "state": false, "liveNeighborCount": 1},
    {"row": 2, "column": 5, "state": false, "liveNeighborCount": 0},
    {"row": 2, "column": 6, "state": false, "liveNeighborCount": 0},
    {"row": 2, "column": 7, "state": false, "liveNeighborCount": 0},
    {"row": 2, "column": 8, "state": false, "liveNeighborCount": 0}],
    [{"row": 3, "column": 0, "state": false, "liveNeighborCount": 0}, 
    {"row": 3, "column": 1, "state": false, "liveNeighborCount": 0},
    {"row": 3, "column": 2, "state": false, "liveNeighborCount": 1},
    {"row": 3, "column": 3, "state": true, "liveNeighborCount": 1},
    {"row": 3, "column": 4, "state": false, "liveNeighborCount": 2},
    {"row": 3, "column": 5, "state": false, "liveNeighborCount": 1},
    {"row": 3, "column": 6, "state": false, "liveNeighborCount": 0},
    {"row": 3, "column": 7, "state": false, "liveNeighborCount": 0},
    {"row": 3, "column": 8, "state": false, "liveNeighborCount": 0}],
    [{"row": 4, "column": 0, "state": false, "liveNeighborCount": 0}, 
    {"row": 4, "column": 1, "state": false, "liveNeighborCount": 0},
    {"row": 4, "column": 2, "state": false, "liveNeighborCount": 1},
    {"row": 4, "column": 3, "state": false, "liveNeighborCount": 2},
    {"row": 4, "column": 4, "state": true, "liveNeighborCount": 1},
    {"row": 4, "column": 5, "state": false, "liveNeighborCount": 1},
    {"row": 4, "column": 6, "state": false, "liveNeighborCount": 0},
    {"row": 4, "column": 7, "state": false, "liveNeighborCount": 0},
    {"row": 4, "column": 8, "state": false, "liveNeighborCount": 0}],
    [{"row": 5, "column": 0, "state": false, "liveNeighborCount": 0},  
    {"row": 5, "column": 1, "state": false, "liveNeighborCount": 0},
    {"row": 5, "column": 2, "state": false, "liveNeighborCount": 0},
    {"row": 5, "column": 3, "state": false, "liveNeighborCount": 1},
    {"row": 5, "column": 4, "state": false, "liveNeighborCount": 1},
    {"row": 5, "column": 5, "state": false, "liveNeighborCount": 1},
    {"row": 5, "column": 6, "state": false, "liveNeighborCount": 0},
    {"row": 5, "column": 7, "state": false, "liveNeighborCount": 0},
    {"row": 5, "column": 8, "state": false, "liveNeighborCount": 0}],
    [{"row": 6, "column": 0, "state": false, "liveNeighborCount": 0}, 
    {"row": 6, "column": 1, "state": false, "liveNeighborCount": 0},
    {"row": 6, "column": 2, "state": false, "liveNeighborCount": 0},
    {"row": 6, "column": 3, "state": false, "liveNeighborCount": 0},
    {"row": 6, "column": 4, "state": false, "liveNeighborCount": 0},
    {"row": 6, "column": 5, "state": false, "liveNeighborCount": 0},
    {"row": 6, "column": 6, "state": false, "liveNeighborCount": 0},
    {"row": 6, "column": 7, "state": false, "liveNeighborCount": 0},
    {"row": 6, "column": 8, "state": false, "liveNeighborCount": 0}],
    [{"row": 7, "column": 0, "state": false, "liveNeighborCount": 0} ,  
    {"row": 7, "column": 1, "state": false, "liveNeighborCount": 0},
    {"row": 7, "column": 2, "state": false, "liveNeighborCount": 0},
    {"row": 7, "column": 3, "state": false, "liveNeighborCount": 0},
    {"row": 7, "column": 4, "state": false, "liveNeighborCount": 0},
    {"row": 7, "column": 5, "state": false, "liveNeighborCount": 0},
    {"row": 7, "column": 6, "state": false, "liveNeighborCount": 0},
    {"row": 7, "column": 7, "state": false, "liveNeighborCount": 0},
    {"row": 7, "column": 8, "state": false, "liveNeighborCount": 0}],
    [{"row": 8, "column": 0, "state": false, "liveNeighborCount": 0},
    {"row": 8, "column": 1, "state": false, "liveNeighborCount": 0},
    {"row": 8, "column": 2, "state": false, "liveNeighborCount": 0},
    {"row": 8, "column": 3, "state": false, "liveNeighborCount": 0},
    {"row": 8, "column": 4, "state": false, "liveNeighborCount": 0},
    {"row": 8, "column": 5, "state": false, "liveNeighborCount": 0},
    {"row": 8, "column": 6, "state": false, "liveNeighborCount": 0},
    {"row": 8, "column": 7, "state": false, "liveNeighborCount": 0},
    {"row": 8, "column": 8, "state": false, "liveNeighborCount": 0}]];

var isInitialized = false;
var generationCount = 0;

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
        $("#genCount").css('display', 'block');
        console.log('initialized!');  // first time only
    }
}

// REFACTOR:  setTimeout for each generation (currently button click calls nextGen(matrix))
function nextGen(matrix) {
    if (!isInitialized){
          drawGrid(matrix);  // use hard-coded matrix first time
      } else {
        // already initialized
        for(var i=0; i<matrix.length; i++){
            for (var j=0; j<matrix[i].length; j++){
                // currentIndex = {"row": i, "column": j};

                if (matrix[i][j].liveNeighborCount === 2 || matrix[i][j].liveNeighborCount === 3){
                    matrix[i][j].state = true;
                    // console.log(matrix[i][j], ' is alive');
                } else if (matrix[i][j].liveNeighborCount < 2 || matrix[i][j].liveNeighborCount >= 4 )  { 
                    matrix[i][j].state = false;
                    // console.log(matrix[i][j], ' is dead');
                }
                countLiveNeighbors(matrix[i][j]);

                // update classes  REFACTOR:  could be separate mini-function
                var cellArray = $('#gameboard').find('div');
                for (var k=0; k<cellArray.length; k++) {
                    cellArray[k].innerText = matrix[i][j].liveNeighborCount;
                    if( cellArray[k].innerText == "2" || cellArray[k].innerText == "3"){ 
                        $(cellArray[k]).removeClass('empty').addClass('live');
                    } else {
                        $(cellArray[k]).removeClass('live').addClass('empty');
                    }
                }
                // countLiveNeighbors(matrix[i][j]);
            }
        }
        clearBoard();
        drawGrid(matrix);
    } // end of else. isInitialized === true

    generationCount++;
    if (generationCount > 1){
        $("#goback").css('display', 'inline-block');
    } else {
        $("#goback").css('display', 'none');        
    }
    $("#genCount").html('<h4>Generation:' + generationCount + '</h4>');
    // console.log(neighborArray);
}

function prevGen(matrix){
    console.log('hello from prevGen'); // TODO: Write reverse nextGen function
    generationCount--;
    // console.log(generationCount);
    if (generationCount > 1){
        $("#goback").css('display', 'inline-block');
    } else {
        $("#goback").css('display', 'none');        
    }
    $("#genCount").html('<h4>Generation:' + generationCount + '</h4>');
}

function countLiveNeighbors(currentIndex){
    // reset count for each cell
    currentIndex.liveNeighborCount = 0;
    // identify neighbors
    var upL = {"row": (currentIndex.row - 1), "column": (currentIndex.column - 1)};
    var upC = {"row": (currentIndex.row - 1), "column": currentIndex.column};
    var upR = {"row": (currentIndex.row - 1), "column": (currentIndex.column + 1)};
    var left = {"row": currentIndex.row, "column": (currentIndex.column - 1)};
    var right = {"row": currentIndex.row, "column": (currentIndex.column + 1)};
    var dnL = {"row": (currentIndex.row + 1), "column": (currentIndex.column - 1)};
    var dnC = {"row": (currentIndex.row + 1), "column": currentIndex.column};
    var dnR ={"row": (currentIndex.row + 1), "column": (currentIndex.column + 1)};

    var neighborArray = [upL, upC, upR, left, right, dnL, dnC, dnR];

    for (var k = 0; k < neighborArray.length; k++){
        // wrap matrix
        if(neighborArray[k].column === -1){
            neighborArray[k].column = 8;
        } else if (neighborArray[k].column === 9){
            neighborArray[k].column = 0;
        }
        if (neighborArray[k].row === -1){
            neighborArray[k].row = 8;
        } else if (neighborArray[k].row === 9){
            neighborArray[k].row = 0;
        }
        // count live neighbors
        if (matrix[neighborArray[k].row][neighborArray[k].column].state === true) { 
            currentIndex.liveNeighborCount+=1;
        }
    }
    // console.log('currentIndex: ', currentIndex, ' has ', currentIndex.liveNeighborCount, ' live neighbors.');
}

function clearBoard(){
    $(gameboard).html('');
}



