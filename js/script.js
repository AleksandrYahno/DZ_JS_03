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

//2.	Добавьте в предыдущую программу два элемента input, в которые можно ввести индекс массива и значение. По нажатию “ОК” - массив выводится.

document.getElementById('go').onclick = add;

function add() {
    var indexMas = document.getElementById('inpi').value;
    indexMas = parseInt(indexMas);
    var znachMas = document.getElementById('inpz').value;
    znachMas = parseInt(znachMas);
    mas[indexMas] = znachMas;
    showMas();
}

//3.    Добавьте кнопку pop реализующую метод pop() для введенного выше массива. 

document.getElementById('pop').onclick = metPop;

function metPop() {
    mas.pop();
    showMas();
}

//4.	Добавьте кнопку shift реализующую метод shift() для введенного выше массива. 

document.getElementById('shift').onclick = metShift;

function metShift() {
    mas.shift();
    showMas();
}

//5     Добавьте кнопку push реализующую метод push() для введенного выше массива. 

document.getElementById('push').onclick = metPush;

function metPush() {
    var znachMas = document.getElementById('inpz').value;
    mas.push(znachMas);
    showMas();
}

//6     Добавьте кнопку push реализующую метод unshift() для введенного выше массива. 

document.getElementById('unshift').onclick = metUnshift;

function metUnshift() {
    var znachMas = document.getElementById('inpz').value;
    mas.unshift(znachMas);
    showMas();
}
