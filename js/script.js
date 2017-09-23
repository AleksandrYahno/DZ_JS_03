//1.	Напишите функцию для вывода элементов массива в элемент <p id=”new”></p>.

var mas = ['0', 1, 12, 71, 'test', 223, 81, 'lorem'];

function showMas() {
    var a = document.getElementById('new');
    var b = '';
    for (var i = 0; i < mas.length; i++) {
        if (mas[i] != undefined) {
            b += mas[i] + ', ';
        } else {
            b += ', ';
        }
    }
    a.innerHTML = mas;
}
showMas();
console.log(mas);

//2.	Добавьте в предыдущую программу два элемента input, в которые можно ввести индекс массива и значение. По нажатию “ОК” - массив выводится.

document.getElementById('go').onclick = add;

function add() {
    var indexMas = document.getElementById('inpi').value;
    indexMas = parseInt('indexMas');
    var znachMas = document.getElementById('inpz').vslue;
    znachMas = parseInt('znachMas');
    mas[indexMas] = znachMas;
    showMas();
    console.log(mas);
}

//3.    Добавьте кнопку pop реализующую метод pop() для введенного выше массива. 

function metPop() {
    mas.pop();
}
metPop();
console.log(mas);

//4.	Добавьте кнопку shift реализующую метод shift() для введенного выше массива. 

function metShift() {
    mas.shift();
}
metShift();
console.log(mas);

//5     Добавьте кнопку push реализующую метод push() для введенного выше массива. 

function metPush() {
    mas.push('newTextPush');
}
metPush();
console.log(mas);
