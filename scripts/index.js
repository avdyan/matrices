/**
 * Detector de eventos o botones de la pagina
 */
var generator = document.getElementById('generator');
var addBtn = document.getElementById('add');
var gapBtn = document.getElementById('gap');
var mulBtn = document.getElementById('mul');
/**
 * Generador de las matrices
 */
var left = document.getElementById('left');
var right = document.getElementById('right');
var where = document.getElementById('where');
/**
 * Contenedor de la derecha, izquierda.
 */
var leftContainer = (document.getElementById('left-container'));
var rightContainer = (document.getElementById('right-container'));
generator.addEventListener('click', function (event) { matrixGen(left.value, right.value, where.value); });
addBtn.addEventListener('click', function (event) { addMatrix(); });
gapBtn.addEventListener('click', function (event) { gapMatrix(); });
mulBtn.addEventListener('click', function (event) { multiMatrix(); });
var leftMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var rightMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
/**
 *
 * @param x Ancho
 * @param y Longitud
 * @param where Puerto
 * @description Crea una matriz con ancho x alto y.
 */
function matrixGen(x, y, z) {
    var reg = /^[0-9]*$/;
    if (!reg.test(x)) {
        alert('Por favor, introduzca sólo números para el ancho.');
    }
    else if (!reg.test(y)) {
        alert('Ingrese solo números verticalmente.');
    }
    else if (!where.value) {
        alert('Por favor seleccione una matriz, ya sea A o B.');
    }
    else {
        var _matrix = [];
        for (var i = 0; i < x; i++) {
            var row = [];
            for (var j = 0; j < y; j++) {
                row.push(0);
            }
            _matrix.push(row);
        }
        eval(z + 'Container.innerHTML = matrixToHTMLTable(_matrix, z)');
        eval(z + 'Matrix = _matrix');
    }
}
/**
 *
 * @param x Ancho
 * @param y Longitud
 * @param z Puerto de la derecha e izquierda
 * @description Convierte x, y, z a un formato como 'izquierda-0-0'.
 */
function numToString(x, y, z) {
    return "".concat(z, "-").concat(x, "-").concat(y);
}
/**
 *
 * @param str Matriz separada por '-' en Arr
 */
function stringToArr(str) {
    return str.split('-');
}
function arrToMatrix(arr) {
}
function matrixToHTMLTable(matrix, where) {
    var i_Max = matrix.length;
    var j_Max = matrix[0].length;
    var tags = '<table>';
    for (var i = 0; i < i_Max; i++) {
        tags += '<tr>';
        for (var j = 0; j < j_Max; j++) {
            tags += '<td>';
            tags += "<input type=\"text\" ".concat(where === "result" ? 'readonly' : '', " class=\"cell\" id=\"").concat(where, "-").concat(i, "-").concat(j, "\" name=\"").concat(where, "-").concat(i, "-").concat(j, "\" value=\"").concat(matrix[i][j], "\" />");
            tags += '</td>';
        }
        tags += '</tr>';
    }
    tags += '</table>';
    return tags;
}
function addMatrix() {
    var result = [];
    if (!leftMatrix) {
        alert('El término de izquierda no se creó.');
    }
    else if (!rightMatrix) {
        alert('No se creó ningún puerto correcto.');
    }
    else if (leftMatrix.length !== rightMatrix.length || leftMatrix[0].length !== rightMatrix[0].length) {
        alert('Los lados izquierdo y derecho deben tener el mismo tamaño.');
    }
    else {
        for (var i = 0; i < leftMatrix.length; i++) {
            var row = [];
            for (var j = 0; j < leftMatrix[i].length; j++) {
                row.push(parseFloat(document.getElementById("left-".concat(i, "-").concat(j)).value) + parseFloat(document.getElementById("right-".concat(i, "-").concat(j)).value));
            }
            result.push(row);
        }
    }
    document.getElementById('result').innerHTML = matrixToHTMLTable(result, 'result');
}
function gapMatrix() {
    var result = [];
    if (!leftMatrix) {
        alert('El término de izquierda no se creó.');
    }
    else if (!rightMatrix) {
        alert('No se creó ningún puerto correcto.');
    }
    else if (leftMatrix.length !== rightMatrix.length || leftMatrix[0].length !== rightMatrix[0].length) {
        alert('Los lados izquierdo y derecho deben tener el mismo tamaño.');
    }
    else {
        for (var i = 0; i < leftMatrix.length; i++) {
            var row = [];
            for (var j = 0; j < leftMatrix[i].length; j++) {
                row.push(parseFloat(document.getElementById("left-".concat(i, "-").concat(j)).value) - parseFloat(document.getElementById("right-".concat(i, "-").concat(j)).value));
            }
            result.push(row);
        }
    }
    document.getElementById('result').innerHTML = matrixToHTMLTable(result, 'result');
}
function multiMatrix() {
    var leftRow = leftMatrix.length;
    var leftCol = leftMatrix[0].length;
    var rightRow = rightMatrix.length;
    var rightCol = rightMatrix[0].length;
    if (!leftMatrix) {
        alert(1);
    }
    else if (!rightMatrix) {
        alert(2);
    }
    else {
        var result = [];
        for (var i = 0; i < leftRow; i++) {
            var rows = [];
            for (var j = 0; j < rightCol; j++) {
                rows.push(calc(i, j, rightRow));
            }
            result.push(rows);
        }
        document.getElementById('result').innerHTML = matrixToHTMLTable(result, 'result');
    }
}
function calc(row, col, length) {
    var result = 0;
    for (var i = 0; i < length; i++) {
        result += parseFloat(document.getElementById("left-".concat(row, "-").concat(i)).value) * parseFloat(document.getElementById("right-".concat(i, "-").concat(col)).value);
    }
    return result;
}
