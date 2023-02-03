//задание 1

const array = [1, 5, 4, 10, 0, 3];
for(let i = 0; i < array.length; i++) {
    if (array[i] == 10) break;
    console.log(array[i]);
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
for(let i = 0; i<10; i++) {
    array4.push(Math.round(Math.random()*10));
}
console.log(array4);

const evenNumbers = (el) => {
    return el % 2 == 0;
}
const newArray4 = array4.filter(evenNumbers);
console.log(newArray4);