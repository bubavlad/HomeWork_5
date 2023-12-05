
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaRectangle = (a, b) => (a * b);

let result = areaRectangle(5, 15);
console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circleArea = (radius) => (radius * radius * Math.PI);

let result = circleArea (7);
console.log(result);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaCylinder = (h, radius) => (2 * Math.PI * radius * (radius + h))

let result = areaCylinder(2, 5)
console.log(result)


// - створити функцію яка приймає масив та виводить кожен його елемент

let elemOfArr = (items) => {
    for (const elem of items) {
        {
            console.log (elem)
        }
    }
}
elemOfArr([11, 22, 33, 44])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let parWithText = (p) => {
    document.write (`<p> ${p} </p>`)
}
parWithText('bla bla')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list = (text) => {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
list('brainstorm');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let list2 = (text, quan) => {
    document.write(`<ul>`)
    for (let i = 0; i < quan; i++) {
        document.write(`<li> ${text} </li>`)
    }
    document.write(`</ul>`)
}
list2('hello', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const arr = [11, 'Lorem', true]
let primElem = (items) => {
    document.write (`<ul>`)
    for (const elemOfArr of items) {
        document.write(`<li> ${elemOfArr} </li>`)
    }
    document.write (`</ul>`)
}
primElem(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const users = [
    {name: 'Petro', age: 31, id: true},
    {name: 'Max', age: 24, id: true},
    {name: 'Drew', age: 42, id: false},
    {name: 'Josh', age: 50, id: true},
    {name: 'Nathan', age: 19, id: false},
]

let arrUsers = (arr) => {
    for (let i = 0; i < arr.length; i++){
        const arrElement = arr[i]
        document.write(`<div> id: ${arrElement.id}, name: ${arrElement.name}, age: ${arrElement.age}</div>`)
    }
}
arrUsers(users)

// - створити функцію яка повертає найменьше число з масиву

let numbers = [35, -7, 103, -29.5, 283]

let minNumber = (arr) => {
    let smallNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallNum) {
            smallNum = arr[i];
        }
    }
    return smallNum
}
let a = minNumber(numbers);
console.log(a);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let numbers = [50, 20, 40]

let  sum = (arr) => {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        const arrElem = arr[i]
        result = result + arr[i]
    }
    return result
}
let b = sum(numbers)
console.log (b)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let numbers = [11,22,33,44]

let swap = (arr, index1, index2) => {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    return arr
}
let c = swap(numbers, 0, 1)
console.log(c)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let exchangeValue = 0
    for (let i = 0; i < currencyValues.length; i++){
        if (currencyValues[i].currency === exchangeCurrency){
            exchangeValue = currencyValues[i].value
        }
    }
    let result = sumUAH / exchangeValue
    return result
}
let y = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(y)