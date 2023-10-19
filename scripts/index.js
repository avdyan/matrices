// El código utiliza el método getElementById() para obtener los elementos HTML con los IDs "generator", "add", "gap" y "mul".

// El primer elemento HTML se almacena en la variable generator.El segundo elemento HTML se almacena en la variable addBtn.El tercer elemento HTML se almacena en la variable gapBtn.El cuarto elemento HTML se almacena en la variable mulBtn.

var generator = document.getElementById('generator');
var addBtn = document.getElementById('add');
var gapBtn = document.getElementById('gap');
var mulBtn = document.getElementById('mul');

// El código utiliza el método getElementById() para obtener los elementos HTML con los IDs "left", "right" y "where".

// El primer elemento HTML se almacena en la variable left.El segundo elemento HTML se almacena en la variable right.El tercer elemento HTML se almacena en la variable where.

var left = document.getElementById('left');
var right = document.getElementById('right');
var where = document.getElementById('where');

// El código utiliza el método getElementById() para obtener los elementos HTML con los IDs "left-container" y "right-container". El primer elemento HTML se almacena en la variable leftContainer y el segundo elemento HTML se almacena en la variable rightContainer.

// Luego, el código agrega eventos a cuatro elementos HTML: "generator", "add", "gap" y "mul". Estos eventos se activan cuando se hace clic en los elementos correspondientes. Cuando se hace clic en el elemento "generator", se llama a la función matrixGen() con los valores de los elementos left, right y where. Cuando se hace clic en el elemento "add", se llama a la función addMatrix(). Cuando se hace clic en el elemento "gap", se llama a la función gapMatrix(). Cuando se hace clic en el elemento "mul", se llama a la función multiMatrix().

// Finalmente, el código inicializa dos matrices de 3x3 con valores cero. La matriz izquierda se inicializa con la variable leftMatrix y la matriz derecha se inicializa con la variable rightMatrix.

var leftContainer = (document.getElementById('left-container'));
var rightContainer = (document.getElementById('right-container'));
generator.addEventListener('click', function (event) { matrixGen(left.value, right.value, where.value); });
addBtn.addEventListener('click', function (event) { addMatrix(); });
gapBtn.addEventListener('click', function (event) { gapMatrix(); });
mulBtn.addEventListener('click', function (event) { multiMatrix(); });
var leftMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var rightMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

// El método toma tres parámetros: x, que es el ancho de la matriz, y, que es la longitud de la matriz, y z, que es el identificador de la matriz (A o B).

// El método comienza verificando si los valores de entrada son números enteros utilizando una expresión regular. Si los valores de entrada no son números enteros, el método muestra una alerta en la página web indicando que se deben ingresar solo números.

// Si los valores de entrada son números enteros, el método crea una matriz vacía utilizando dos bucles for. El primer bucle for recorre las filas de la matriz y el segundo bucle for recorre las columnas de la matriz. Para cada elemento de la matriz, el método establece su valor en cero.

// Luego, el método utiliza el método innerHTML para mostrar la matriz en una tabla HTML en la página web. El método utiliza el identificador de la matriz (z) para determinar en qué contenedor HTML se mostrará la tabla.

// Finalmente, el método almacena la matriz en una variable global (z + 'Matrix') para que pueda ser utilizada en otras funciones.

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

// El método toma tres parámetros: x, que es el ancho de la matriz, y, que es la longitud de la matriz, y z, que es el identificador de la matriz (izquierda o derecha).

// El método utiliza el método concat() para concatenar los valores de entrada en una cadena de texto con el formato z-x-y. Por ejemplo, si x es 0, y es 0 y z es "izquierda", el método devolverá la cadena de texto "izquierda-0-0".

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

// El método toma un parámetro str, que es la cadena de texto que se va a convertir en un array.

// El método utiliza el método split() para dividir la cadena de texto en un array de strings utilizando el carácter '-' como separador.El método devuelve el array resultante.

// Este método lo podemos usar para convertir una cadena de texto en un array de strings que represente una matriz.Por ejemplo, si se tiene una cadena de texto "1-2-3-4-5-6-7-8-9", se podría utilizar este método para convertirla en un array de strings["1", "2", "3", "4", "5", "6", "7", "8", "9"] que represente una matriz de 3x3.

/**
 *
 * @param str Matriz separada por '-' en Arr
 */
function stringToArr(str) {
    return str.split('-');
}

// Este es un fragmento de código en JavaScript que contiene dos funciones: arrToMatrix() y matrixToHTMLTable().

// La función arrToMatrix() toma un array como parámetro y devuelve una matriz de 3x3. La función utiliza un bucle for para recorrer los elementos del array y almacenarlos en la matriz de 3x3. Si el array no tiene suficientes elementos para llenar la matriz de 3x3, la función completa la matriz con ceros.

// La función matrixToHTMLTable() toma dos parámetros: matrix, que es la matriz que se va a convertir en una tabla HTML, y where, que es el identificador de la tabla (izquierda, derecha o resultado). La función utiliza dos variables i_Max y j_Max para almacenar las dimensiones de la matriz. Luego, la función utiliza dos bucles for anidados para recorrer las filas y columnas de la matriz y crear una tabla HTML.

// Para cada elemento de la matriz, la función crea un elemento input de tipo text con un identificador y un nombre únicos. El valor del elemento input se establece en el valor correspondiente de la matriz. Si el identificador de la tabla es "resultado", el elemento input se establece en modo de solo lectura.

// Finalmente, la función devuelve una cadena de texto que representa la tabla HTML.

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

// El método comienza verificando si las matrices de entrada (leftMatrix y rightMatrix) existen y tienen el mismo tamaño. Si alguna de estas condiciones no se cumple, el método muestra una alerta en la página web indicando el problema.

// Si las matrices de entrada existen y tienen el mismo tamaño, el método utiliza dos bucles for anidados para recorrer las filas y columnas de las matrices y sumar los elementos correspondientes. El resultado de la suma se almacena en una nueva matriz llamada result.

// Luego, el método utiliza la función matrixToHTMLTable() para convertir la matriz result en una tabla HTML y mostrarla en la página web. La tabla se muestra en un elemento HTML con el identificador "result".

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

// El método comienza verificando si las matrices de entrada (leftMatrix y rightMatrix) existen y tienen el mismo tamaño. Si alguna de estas condiciones no se cumple, el método muestra una alerta en la página web indicando el problema.

// Si las matrices de entrada existen y tienen el mismo tamaño, el método utiliza dos bucles for anidados para recorrer las filas y columnas de las matrices y restar los elementos correspondientes. El resultado de la resta se almacena en una nueva matriz llamada result.

// Luego, el método utiliza la función matrixToHTMLTable() para convertir la matriz result en una tabla HTML y mostrarla en la página web. La tabla se muestra en un elemento HTML con el identificador "result".

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

// El método comienza verificando si las matrices de entrada (leftMatrix y rightMatrix) existen. Si alguna de estas condiciones no se cumple, el método muestra una alerta en la página web indicando el problema.

// Si las matrices de entrada existen, el método utiliza cuatro variables (leftRow, leftCol, rightRow y rightCol) para almacenar las dimensiones de las matrices. Luego, el método utiliza dos bucles for anidados para recorrer las filas y columnas de las matrices y multiplicar los elementos correspondientes.

// Para cada elemento de la matriz resultante, el método llama a la función calc() con los índices de fila y columna correspondientes y la dimensión de la matriz derecha. La función calc() se encarga de realizar la multiplicación de los elementos correspondientes de las matrices de entrada.

// El resultado de la multiplicación se almacena en una nueva matriz llamada result.

// Luego, el método utiliza la función matrixToHTMLTable() para convertir la matriz result en una tabla HTML y mostrarla en la página web. La tabla se muestra en un elemento HTML con el identificador "result".

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

// El método toma tres parámetros: row, que es el índice de fila del elemento en la matriz resultante, col, que es el índice de columna del elemento en la matriz resultante, y length, que es la dimensión de la matriz derecha.

// El método utiliza un bucle for para recorrer los elementos correspondientes de las matrices de entrada y multiplicarlos. Para cada elemento, el método utiliza el método parseFloat() para convertir el valor del elemento en un número decimal. Luego, el método multiplica los dos valores y los agrega al resultado.

// Finalmente, el método devuelve el resultado de la multiplicación.

function calc(row, col, length) {
    var result = 0;
    for (var i = 0; i < length; i++) {
        result += parseFloat(document.getElementById("left-".concat(row, "-").concat(i)).value) * parseFloat(document.getElementById("right-".concat(i, "-").concat(col)).value);
    }
    return result;
}

// ##############################################################################

// Inicializamos una clase para calcular las matrices
class MatrixCalculator {

    // El constructor inicializa la propiedad matrixA como una matriz vacía de 3x3.La matriz se inicializa utilizando un bucle for que recorre las filas y columnas de la matriz y las inicializa con un valor vacío.

    // El constructor también inicializa las propiedades AxDimension y AyDimension con los valores 3. Estas propiedades se utilizan para almacenar las dimensiones de la matriz.

    constructor() {
        // se crea una matriz de 3x3 que está vacía, pero se va a llenar en el formulario html
        this.matrixA = [];
        for (var i = 0; i < 3; i++) {
            this.matrixA[i] = [];
        }

        // dimenciones de la matriz
        this.AxDimension = 3;
        this.AyDimension = 3;
    }

    // El método comienza llamando al método `rebuildMatrix()`, que se encarga de reconstruir la matriz a partir de los campos de entrada en un formulario HTML.

    // Luego, el método inicializa varias variables que se utilizarán para calcular el rango de la matriz.La variable `rank` se inicializa con la dimensión x de la matriz.La variable `row` se inicializa con la dimensión y de la matriz.La variable `mat` se inicializa con la matriz`matrixA`.

    // El método utiliza un bucle `for` para iterar a través de las filas de la matriz.Si el elemento en la posición `[row][row]` no es cero(un elemento de pivote), el método itera a través de todas las columnas y calcula el factor de multiplicación para hacer ceros debajo del elemento de pivote.Luego, el método actualiza la fila actual para hacer ceros debajo del elemento de pivote.

    // Si el elemento de pivote en la fila actual es cero, el método comienza a buscar una fila diferente con un elemento no nulo en la misma columna.Si se encuentra una fila con un elemento de pivote no nulo, el método intercambia la fila actual con la nueva fila de pivote.Si no se encuentra una fila con un elemento de pivote no nulo, el método disminuye el rango de la matriz y mueve los elementos de la última columna a la columna actual.

    // Finalmente, el método imprime el rango de la matriz en la consola utilizando el método`printOnConsole()`.El método utiliza la variable `rank` para imprimir el rango de la matriz.

    calculateRank() {
        this.rebuildMatrix();

        // se definen los rangos en base a las dimenciones anteriores
        var rank = this.AxDimension;
        var row = this.AyDimension;
        var mat = this.matrixA;

        for (row = 0; row < rank; row++) {
            // Comienza un ciclo para iterar a través de las filas de la matriz
            if (mat[row][row]) {
                // Si el elemento en la posición [row][row] no es cero (un elemento de pivote)
                for (var col = 0; col < this.AyDimension; col++) {
                    // Itera a través de todas las columnas
                    if (col != row) {
                        // Si no estamos en la columna del elemento de pivote
                        var mult = Math.round(mat[col][row] / mat[row][row] * 100) / 100;
                        // Calcula el factor de multiplicación para hacer ceros debajo del elemento de pivote
                        for (var i = 0; i < rank; i++)
                            mat[col][i] -= mult * mat[row][i];
                        // Actualiza la fila actual para hacer ceros debajo del elemento de pivote
                    }
                }
            }
            else {
                // Si el elemento de pivote en la fila actual es cero
                var reduce = true;
                for (var i = row + 1; i < this.AyDimension; i++) {
                    // Comienza a buscar una fila diferente con un elemento no nulo en la misma columna
                    if (mat[i][row]) {
                        var aux = mat[row];
                        mat[row] = math[i]; // Intercambia la fila actual con la nueva fila de pivote
                        math[i] = aux;
                        reduce = false;
                        break;
                    }
                }
                if (reduce) {
                    // Si no se encuentra una fila con elemento de pivote no nulo
                    rank--; // Disminuye el rango de la matriz
                    for (i = 0; i < this.AyDimension; i++)
                        mat[i][row] = mat[i][rank];
                    // Mueve los elementos de la última columna a la columna actual
                }
                row--;
                // Reduce el contador de fila para volver a verificar la fila actual
            }
        }
        this.printOnConsole("El rango de la matriz es: " + rank);
    }


    //El método comienza llamando al método calculateDeterminant(), que se encarga de calcular la determinante de la matriz.

    //Luego, el método verifica si la determinante es nula. Si la determinante es nula, la matriz no es invertible y el método devuelve sin calcular la inversa. Si la determinante es cero, la matriz no es invertible y el método imprime un mensaje en la consola indicando que la matriz no es invertible.

    //A continuación, el método inicializa varias variables que se utilizarán para calcular la matriz adjunta. La matriz adjunta se utiliza para calcular la inversa de la matriz original. El método calcula la matriz adjunta recorriendo las filas y columnas de la matriz y calculando el cofactor para cada elemento. El cofactor es la determinante de la submatriz obtenida eliminando la fila y columna que contienen el elemento.

    //Luego, el método transpone la matriz adjunta para obtener la matriz de cofactores. Si la matriz es 2x2, el método intercambia los elementos en la diagonal de la matriz de cofactores. Finalmente, el método divide la matriz de cofactores por la determinante de la matriz original para obtener la matriz inversa. El método redondea los elementos de la matriz inversa a dos decimales y la imprime en la consola.

    invertMatrix() {
        // calcular la determinante de la matriz
        this.calculateDeterminant();

        // Si la determinante es nula, la matriz no es invertible
        if (this.determinantA == null) {
            return;
        }

        // Si la determinante es 0 la matriz no es invertible
        if (this.determinantA == 0) {
            this.printOnConsole("The matrix is not invertible");
            return;
        }

        // Inicializar variables para calcular la matriz adjunta
        const adjacent = [];
        const result = [];
        const aux = [];
        for (let i = 0; i < this.AyDimension; i++) {
            adjacent[i] = [];
            result[i] = [];
            aux[i] = [];
        }

        // Calcular la matriz adjunta
        for (let i = 0; i < this.AyDimension; i++) {
            for (let j = 0; j < this.AxDimension; j++) {
                // Calcular la adjunta de una matriz de 1x1
                if (this.AxDimension == 1) {
                    adjacent[i][j] = 1 / this.matrixA[i][j];
                }
                // Calcular la adjunta para matrices de 2x2
                if (this.AxDimension == 2) {
                    adjacent[j][i] = ((-1) ** (i + j)) * this.matrixA[(i + 1) % 2][(j + 1) % 2];
                }
                // Calcular la adjunta para matrices de 3x3
                if (this.AxDimension == 3) {
                    // Reconstruir la matriz de 2x2
                    let count1 = 0;
                    let count2 = 0;
                    for (let k = 0; k < 3; k++) {
                        for (let l = 0; l < 3; l++) {
                            if (l != j && k != i) {
                                aux[count1][count2] = this.matrixA[k][l];
                                count2++;
                            }
                        }
                        count2 = 0;
                        if (k != i) {
                            count1++;
                        }
                    }
                    adjacent[i][j] = ((-1) ** (i + j)) * (aux[0][0] * aux[1][1] - aux[0][1] * aux[1][0]);
                }
            }
        }

        // Transponer la matriz adjunta para obtener la matriz de cofactores.
        for (let i = 0; i < this.AxDimension; i++) {
            for (let j = 0; j < this.AyDimension; j++) {
                result[i][j] = adjacent[j][i];
            }
        }

        // Cambia los elementos diagonales por matrices de 2x2
        if (this.AxDimension == 2) {
            const temp = result[0][0];
            result[0][0] = result[1][1];
            result[1][1] = temp;
        }

        // Dividir la matriz de cofactores por el determinante.
        if (this.AxDimension != 1) {
            for (let i = 0; i < this.AxDimension; i++) {
                for (let j = 0; j < this.AyDimension; j++) {
                    result[i][j] = Math.round(result[i][j] / this.determinantA * 100) / 100;
                }
            }
        }

        // Imprime la matriz inversa a la consola.
        let string = "Matriz invertida:\n";
        for (let i = 0; i < this.AyDimension; i++) {
            for (let j = 0; j < this.AxDimension; j++) {
                string += "\t" + result[i][j];
            }
            string += "\n";
        }
        this.printOnConsole(string);
    }

    // El método comienza llamando al método rebuildMatrix(), que se encarga de reconstruir la matriz a partir de los campos de entrada en un formulario HTML.

    //Luego, el método inicializa una variable de cadena que se utilizará para almacenar la matriz transpuesta. La variable de cadena se inicializa con el mensaje "Transposition result:\r". El carácter \r se utiliza para crear una nueva línea en la cadena.

    //A continuación, el método recorre las filas y columnas de la matriz y transpone cada elemento. El elemento transpuesto se agrega a la variable de cadena. El método utiliza la propiedad matrixA para acceder a los elementos de la matriz. La propiedad matrixA es una matriz 2D que almacena los elementos de la matriz.

    //Finalmente, el método imprime la matriz transpuesta en la consola utilizando el método printOnConsole(). El método printOnConsole() se utiliza para imprimir la variable de cadena en la consola.

    transposeMatrix() {
        this.rebuildMatrix();
        var string = "Resultado de la transposición:\r";
        for (var i = 0; i < this.AxDimension; i++) {
            for (var j = 0; j < this.AyDimension; j++) {
                string = string + "\t" + this.matrixA[j][i];
            }
            string = string + "\r";
        }
        this.printOnConsole(string);
    }

    // El método comienza llamando al método rebuildMatrix(), que se encarga de reconstruir la matriz a partir de los campos de entrada en un formulario HTML.

    // Luego, el método verifica si la matriz es cuadrada. Si la matriz no es cuadrada, la determinante no se puede calcular y el método devuelve sin calcular la determinante. Si la matriz es cuadrada, el método calcula la determinante de la matriz.

    // El método utiliza diferentes algoritmos para calcular la determinante según el tamaño de la matriz. Si la matriz es 1x1, la determinante es simplemente el elemento de la matriz. Si la matriz es 2x2, la determinante se calcula utilizando la fórmula ad-bc.Si la matriz es 3x3, la determinante se calcula utilizando la regla de Sarrus.

    // Finalmente, el método almacena la determinante en la propiedad determinantA y la imprime en la consola utilizando el método printOnConsole().El método redondea la determinante a dos decimales antes de imprimirla en la consola.

    calculateDeterminant() {
        this.rebuildMatrix();
        if (this.AxDimension != this.AyDimension) {
            this.determinantA = null;
            this.printOnConsole("Matriz no cuadrada, no se puede calcular la determinante.");
            return;
        }
        var determinant;
        if (this.AxDimension == 1) {
            determinant = this.matrixA[0][0];
        }
        if (this.AxDimension == 2) {
            determinant = (this.matrixA[0][0] * this.matrixA[1][1]) - (this.matrixA[0][1] * this.matrixA[1][0]);
        }
        if (this.AxDimension == 3) {
            var op1, op2, op3, r1, r2, r3;
            op1 = this.matrixA[0][0] * this.matrixA[1][1] * this.matrixA[2][2];
            op2 = this.matrixA[0][1] * this.matrixA[1][2] * this.matrixA[2][0];
            op3 = this.matrixA[0][2] * this.matrixA[1][0] * this.matrixA[2][1];
            r1 = this.matrixA[0][2] * this.matrixA[1][1] * this.matrixA[2][0];
            r2 = this.matrixA[0][0] * this.matrixA[1][2] * this.matrixA[2][1];
            r3 = this.matrixA[0][1] * this.matrixA[1][0] * this.matrixA[2][2];
            determinant = Math.round((op1 + op2 + op3 - r1 - r2 - r3) * 100) / 100;
        }
        this.determinantA = determinant;
        this.printOnConsole("Determinante: " + determinant)
        return;
    }

    // El método toma un parámetro val, que es el valor que se imprimirá en la consola.

    // El método utiliza el método getElementById() para obtener el elemento HTML con el ID "console". Luego, el método utiliza la propiedad value del elemento para establecer el valor del elemento en el valor del parámetro val. Esto actualiza el contenido del elemento con el valor del parámetro val.

    printOnConsole(val) {
        document.getElementById("console").value = val;
    }

    // El método utiliza la clase getElementsByClassName() para obtener los elementos HTML que contienen los valores de la matriz.

    // El método utiliza tres variables row1, row2 y row3 para almacenar los elementos HTML de cada fila de la matriz. Luego, el método utiliza un bucle for para recorrer los elementos de cada fila y almacenarlos en la matriz matrixA.

    // El método utiliza la propiedad value de cada elemento HTML para obtener el valor del campo de entrada.El valor se almacena en la matriz matrixA utilizando los índices de fila y columna correspondientes.

    rebuildMatrix() {
        var row1 = document.getElementsByClassName("m1r1");
        var row2 = document.getElementsByClassName("m1r2");
        var row3 = document.getElementsByClassName("m1r3");
        for (var i = 0; i < 3; i++) {
            this.matrixA[0][i] = row1[i].value;
            this.matrixA[1][i] = row2[i].value;
            this.matrixA[2][i] = row3[i].value;
        }
    }
}

var mc = new MatrixCalculator();