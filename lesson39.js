//---39--------------------------------------------------
// Змініть масив myArray так, щоб він містив і рядок, і число (у цьому порядку).Змініть код лише під цим рядком
const myArray = ['Hey , Man', 2];
//----40----------------------------------------------
//Створіть вкладений масив під назвою myArray.

const myArray = [['ChikagoBulss'], [22]];

//----41----------------------------------------------
/*Створіть змінну з назвою myData і встановіть її значення
 рівне до першому елементу myArray, використовуючи квадратні дужки.*/

const myArray = [50, 60, 70];
const myData = myArray[0];
//----42----------------------------------------------
/*Змінюйте дані, що зберігаються в індексі 0 масиву myArray до значення 45.*/

// Налаштування
const myArray = [18, 64, 99];
myArray[0] = 45;
// Змініть код лише під цим рядком
//----43----------------------------------------------
/*За допомогою квадратних дужок виберіть елемент 
із myArray таким чином, щоб myData дорівнював 8.*/

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

//----44----------------------------------------------
/*Виштовхніть ["dog", 3] в кінець змінної myArray.*/
// Налаштування
const myArray = [["John", 23], ["cat", 2]];

// Змініть код лише під цим рядком
myArray.push(["dog", 3]);

//----45----------------------------------------------
/*Використовуйте функцію .pop(), щоб видалити останній елемент 
з myArray та призначити значення, яке виводиться для removedFromMyArray.*/
// Налаштування
const myArray = [["John", 23], ["cat", 2]];

// Змініть код лише під цим рядком
const removedFromMyArray = myArray.pop();

//----46----------------------------------------------
/*Використовуйте функцію .shift(), щоб видалити перший елемент з myArray та
 призначивши значення "викреслено" для нової змінної removedFromMyArray.*/

// Налаштування
const myArray = [["John", 23], ["dog", 3]];

// Змініть код лише під цим рядком
const removedFromMyArray = myArray.shift();

//----47----------------------------------------------
/*Додайте ["Paul", 35] на початок змінної myArray,
 використовуючи unshift(). */
// Налаштування
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Змініть код лише під цим рядком
myArray.unshift(["Paul", 35]);
//----48----------------------------------------------
/*У списку повинно бути щонайменше 5 підмасивів.*/
const myList = [
    ["Canned Beans", 3],
    ["Milk Galon", 1],
    ["Cereal", 2],
    ["Toilet Paper", 12],
    ["Sack of Rice", 1]
];
//----49----------------------------------------------
//Створіть функцію, яка називається reusableFunction,
//що друкує рядок Hi World на консоль розробників.
//Викличте функцію.
function reusableFunction() {
    console.log("Hi World");
    };
    reusableFunction();

    //----50----------------------------------------------
//