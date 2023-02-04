//задание 1

const array = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] == 10) break;
}

//задание 2

const array2 = [1, 5, 4, 10, 0, 3];
let item = array.indexOf(4);
console.log(item);

//задание 3

const array3 = [1, 3, 5, 10, 20];
whiteSpace = array3.join(' ');
console.log(whiteSpace);

//задание 4

const array4 = [];
for (let i = 0; i < 10; i++) {
    array4.push(Math.round(Math.random() * 10));
}
console.log(array4);

const evenNumbers = (el) => {
    return el % 2 == 0;
}
const newArray4 = array4.filter(evenNumbers);
console.log(newArray4);

//задание 5

const array5 = [];

for (let i = 0; i < 3; i++) {
    array5[i] = [];
    for (let j = 0; j < 3; j++) {
        array5[i].push(1);
    }
}
console.log(array5);

//задание 6

const array6 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    array6.push(2);
}
console.log(array6);

//задание 7

const array7 = [9, 8, 7, 'a', 6, 5];
console.log(array7.sort());
array7.pop();
console.log(array7);

//задание 8

const array8 = [9, 8, 7, 6, 5];
let userAnswer = +prompt('Назовите число от 1 до 10');
let answer = array8.includes(userAnswer);
const checkAnswer = function(answer) {
    if (answer == true) {
        return 'число содержится в массиве';
    } else {
        return 'число не содержится в массиве';
    }
}
console.log(answer);
console.log (checkAnswer(answer));
alert(checkAnswer(answer));

//задание 9

const letters = 'abcdef';
console.log(letters.split('').reverse().join(''));

//задание 10

const array10 = [];
for (let i = 0; i < 6; i++) {
    array10.push(Math.round(Math.random() * 10));
}
console.log(array10);
let sum = 0;
for (i = 0; i < array10.length; i++) {
    sum += array10[i];
}
let arithmeticMean = sum / array10.length;
console.log(arithmeticMean);

//задание 11

const array11 = [[1, 2, 3,], [4, 5, 6]];
const newArray11 = [];
for (let subElem of array11) {
    for (let elem of subElem) {
        newArray11.push(elem);
    }
}
console.log(newArray11);

//задание 12

const array12 = [];
for (let i = 0; i < 10; i++) {
    array12.push(Math.round(Math.random() * 10));
}
console.log(array12);
for (i = 0; i < array12.length - 1; i++) {
    console.log(array12[i] + array12[i + 1]);
}


