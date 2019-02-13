var promptNum = prompt("Please enter number of rows for your checkerboard: ")
var promptColor1 = prompt("Choose your first color: ")
var promptColor2 = prompt("Choose your second color: ")

var CheckerBoard = (props) => {
    var board = []
    for (i=0; i<props; i++){
        board.push([])
        row = Row(board[i], props)
        board[i] = row
    }
    console.log(board)
    return ReactDOM.render(board, document.getElementById('container'));
}

var Row = (boardRow, rowNum) => {
    for (j=0; j<rowNum; j++){
        boardRow.push(Cell((i+j)%2))
    }
    return React.createElement('div', { style: { fontSize: '0' } }, boardRow);
}  

var Cell = (color) => {
    if (color == 0) {
        return React.createElement('div', { style: { height: '50px', width: '50px', display: 'inline-block', background: promptColor1 } }, null);
    } else {
        return React.createElement('div', { style: { height: '50px', width: '50px', display: 'inline-block', background: promptColor2 } }, null);
    }
}

CheckerBoard(promptNum)