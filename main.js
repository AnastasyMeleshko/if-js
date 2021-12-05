//6.Работа с переменными:
let user = "John Doe";
console.log(user);
let student = "Anastasya Meleshko";
console.log(student);
user = student;
// Anastasya Meleshko
console.log(user);
//7. Работа с примитивами:
let test = 1;
test = 2;
test = test + "1";
// test = 21
console.log(test);
test = test - 1;
// 20
console.log(test);
test = Boolean(test);
// true
console.log(test);
//Дан массив [2, 3, 5, 8]. С помощью цикла for найдите произведение элементов этого массива.
// Результат выведите в консоль.
const array = [2, 3, 5, 8];
let multiply = 1;
for (let i = 0; i < array.length; i++) {
    multiply = multiply * array[i];
}
console.log(multiply);
//Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль
// те элементы массива, которые больше 5-ти, но меньше 10-ти.
const initialArray = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] > 5 && initialArray[i] < 10) {
        console.log(initialArray[i]);
    }
}
//Дан массив [2, 5, 8, 15, 0, 6, 20, 3].
// С помощью цикла for и оператора if выведите в консоль четные элементы массива.
const arr = [2, 5, 8, 15, 0, 6, 20, 3];
console.log("Дан массив: " + arr)
console.log("Четные элементы массива: ")
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}