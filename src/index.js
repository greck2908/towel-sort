// You should implement your task here.

module.exports = function towelSort(matrix) {
    var arr = [];
    if (matrix)
        for (var i = 0; i < matrix.length; i++) {
            getValArr(matrix[i], arr, i % 2 == 1);
        }
    return arr;
}

function getValArr(matrixSub, arr, isRevers) {
    if (!isRevers) {
        for (var i = 0; i < matrixSub.length; i++) {
            arr.push(matrixSub[i]);
        }
    } else {
        for (var i = matrixSub.length - 1; i >= 0; i--) {
            arr.push(matrixSub[i]);
        }
    }
}