// //lesson - 2
// //6.Работа с переменными:
// let user = "John Doe";
// console.log(user);
// let student = "Anastasya Meleshko";
// console.log(student);
// user = student;
// // Anastasya Meleshko
// console.log(user);
// //7. Работа с примитивами:
// let test = 1;
// test = 2;
// test = test + "1";
// // test = 21
// console.log(test);
// test = test - 1;
// // 20
// console.log(test);
// test = Boolean(test);
// // true
// console.log(test);
// //Дан массив [2, 3, 5, 8]. С помощью цикла for найдите произведение элементов этого массива.
// // Результат выведите в консоль.
// const array = [2, 3, 5, 8];
// let multiply = 1;
// for (let i = 0; i < array.length; i++) {
//     multiply = multiply * array[i];
// }
// console.log(multiply);
// //Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль
// // те элементы массива, которые больше 5-ти, но меньше 10-ти.
// const initialArray = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < initialArray.length; i++) {
//     if (initialArray[i] > 5 && initialArray[i] < 10) {
//         console.log(initialArray[i]);
//     }
// }
// //Дан массив [2, 5, 8, 15, 0, 6, 20, 3].
// // С помощью цикла for и оператора if выведите в консоль четные элементы массива.
// const arr = [2, 5, 8, 15, 0, 6, 20, 3];
// console.log("Дан массив: " + arr)
// console.log("Четные элементы массива: ")
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

//lesson - 3
// 6. Функция palindrome (Слово палиндром может читаться справа-налево и слева-направо одинаково. Прим "шалаш".):
// - создайте функцию `palindrome`, которая будет возвращать bool значение в зависимости от того,
// является ли переданное функции слово палиндромом или нет.

const initialStr = prompt("Введите слово для проверки является ли оно паллиндромом. Выведет true если да, false - если нет");
let str = initialStr.toUpperCase().replace(/\s/g, '');

function palindrome(str) {
    if (str.length === 1) {
        return true;
    }
    if (str.length === 2) {
        return str[0] === str[1];
    }
    if (str[0] === str.slice(-1)) {
        return palindrome(str.slice(1, -1));
    }
    return false;
}

console.log(palindrome(str));

// 7. Функция min(a, b) и функция max(a,b):
// - напишите функцию `min(a,b)`, которая возвращает меньшее из чисел;

function min(a, b) {
    if (a === b) {
        return "Числа равны";
    } else if (a < b) {
        return ("Меньшее из чисел: " + a);
    }
    return ("Меньшее из чисел: " + b);
}

console.log(min(45, 2));

// - напишите функцию `max(a,y)`, которая возвращает большее из чисел;

function max(a, y) {
    if (a === y) {
        return "Числа равны";
    } else if (a > y) {
        return ("Наибольшее из чисел: " + a);
    }
    return ("Наибольшее из чисел: " + y);
}

console.log(max(56, 33));
//
// // - попробуйте переписать функцию, используя тернарный оператор.
//
function minimum(a, b) {
    if (a === b) {
        return "Числа равны";
    } else {
        (a < b) ? (console.log("Меньшее из чисел: " + a)) : (console.log("Меньшее из чисел: " + b));
    }
}

minimum(4, 566);

function maximum(a, b) {
    if (a === b) {
        return "Числа равны";
    } else {
        (a > b) ? (console.log("Большее из чисел: " + a)) : (console.log("Большее из чисел: " + b));
    }
}

maximum(5, 35);

// 8. Замена элементов массива:
// - создайте массив с десятью случайными элементами от 0 до 100;
// - напишите функцию, которая будет заменять все 0 на строку 'zero';
// - выведите полученный массив в консоль
// (пример: `[12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]`).

let initialArray = [];
let initialString = "";
for (let i=0; i<10; i++) {
    initialArray.push((Math.floor(Math.random() * 101)));
}
console.log("Исходный массив: ");
console.log(initialArray);
initialString = initialArray.join(" ");
let replace = /0/gi;
let newString= initialString.replace(replace, 'zero');
console.log("Полученный массив: ");
console.log(newString.split(" "));
