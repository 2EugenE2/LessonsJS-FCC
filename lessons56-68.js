//-----56---------------------------------------
/**Назвіть функцію processArg з аргументом 7 і присвойте 
 * її повернене значення змінній processed. */

// Налаштування
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7)
// Змініть код лише під цим рядком

//-----57---------------------------------------
/**В комп'ютерних науках queue це абстрактне поняття Data Structure, де усі елементи зберігають певний порядок. Нові елементи можуть бути додані до черги, а старі елементи - зняті з черги.
Напишіть функцію nextInLine, аргументами якої є масив (arr) та число (item).
Додайте число до кінця масиву, а тоді видаліть перший елемент з масиву.
Функція nextInLine повинна повернути видалений елемент. */

function nextInLine(arr, item) {
    // Змініть код лише під цим рядком
    arr.push(item);
    var removed = arr.shift();
    return removed;
    // Змініть код лише над цим рядком
}

// Налаштування
const testArr = [1, 2, 3, 4, 5];

// Відобразити код
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//-----58---------------------------------------
/*Змініть функцію welcomeToBooleans так, щоб вона повертала 
  true замість false, коли натискається кнопка запуску.*/

function welcomeToBooleans() {
    // Змініть код лише під цим рядком

    return true; // Змініть цей рядок

    // Змініть код лише над цим рядком
}
//-----59---------------------------------------
/**Створіть оператора if всередині функції, щоб повернути Yes, that was true, 
 * якщо параметр wasThatTrue є true та повернути No, that was false у протилежному випадку. */
function trueOrFalse(wasThatTrue) {
    // Змініть код лише під цим рядком
    if (wasThatTrue) {
        return 'Yes, that was true'
    }
    return 'No, that was false'

    // Змініть код лише над цим рядком

}
//-----60---------------------------------------
/**Додайте оператор рівності до зазначеного рядка, щоб функція визначила рядок, 
 * як Equal, коли val еквівалентна 12. */
// Налаштування
function testEqual(val) {
    if (val == 12) { // Змініть цей рядок
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);
//-----61---------------------------------------
/**Використовуйте оператора абсолютної рівності з командою if, щоб функція повернула рядок Equal,
 *  коли val точно дорівнює 7. */
// Налаштування
function testStrict(val) {
    if (val === 7) { // Змініть цей рядок
        return "Equal";
    }
    return "Not Equal";
}
//-----62---------------------------------------
/** Функція compareEquality в редакторі порівнює два значення за допомогою оператора рівності. Змініть функцію так, щоб вона повернула рядок Equal лише тоді,
 *  коли значення абсолютно рівні.*/
// Налаштування
function compareEquality(a, b) {
    if (a === b) { // Змініть цей рядок
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");
//-----63---------------------------------------
/**Додайте оператора нерівності != до команди if, щоб функція повернула рядок Not Equal, 
 * коли val не дорівнює 99. */
// Налаштування
function testNotEqual(val) {
    if (val != 99) { // Змініть цей рядок
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

//-----64---------------------------------------
/**Додайте оператора абсолютної нерівності до команди if, щоб функція визначила рядок Not Equal, 
 * коли val не є абсолютно рівним 17 */
// Налаштування
function testStrictNotEqual(val) {
    if (val !== 17) { // Змініть цей рядок
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);
//-----65---------------------------------------
/**Додайте оператор «більше ніж» до вказаних рядків,
 *  щоб оператор повернення спрацював. */
function testGreaterThan(val) {
    if (val > 100) {  // Змініть цей рядок
        return "Over 100";
    }

    if (val > 10) {  // Змініть цей рядок
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);
//-----66---------------------------------------
/**Додайте оператор "більше ніж дорівнює" до зазначених рядків,
 *  щоб оператор повернення мав сенс. */
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Змініть цей рядок
        return "20 or Over";
    }

    if (val >= 10) {  // Змініть цей рядок
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);
//-----67---------------------------------------
/** Додайте оператор "менше ніж" до вказаних рядків,
 *  щоб оператор повернення спрацював.*/
function testLessThan(val) {
    if (val < 25) {  // Змініть цей рядок
        return "Under 25";
    }
    if (val < 55) {  // Змініть цей рядок
        return "Under 55";
    }
    return "55 or Over";
}

testLessThan(10);
//-----68---------------------------------------
/**Додайте оператор "менше або рівне до вказаних рядків,
 *  щоб оператор повернення спрацював. */

function testLessOrEqual(val) {
    if (val <= 12) {  // Змініть цей рядок
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  // Змініть цей рядок
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

testLessOrEqual(10);
//-----69---------------------------------------
/** Замініть два оператора if statements одним використовуючи && оператор. 
 * Значення рядка буде Yes, якщо val меньше або рівне 50 та більше або рівне 25. 
 * В іншому випадку значення рядка стане No.*/

function testLogicalAnd(val) {
    // Змініть код лише під цим рядком
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    // Змініть код лише над цим рядком
    return "No";
}
testLogicalAnd(10);

//-----70---------------------------------------
/**Combine the two if statements into one statement which returns the string 
 * Outside if val is not between 10 and 20, inclusive. Otherwise, 
 * return the string Inside. */

function testLogicalOr(val) {
    // Змініть код лише під цим рядком
    if (val < 10 || val > 20) {
        return "Outside";
    }
    // Змініть код лише над цим рядком
    return "Inside";
}
testLogicalOr(15);
//-----71---------------------------------------
/** Об’єднайте команди if в єдину команду if/else.*/
function testElse(val) {
    let result = "";
    // Змініть код лише під цим рядком
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        return "5 or Smaller";
    }
    // Змініть код лише над цим рядком
    return result;
}
testElse(4);
//-----72---------------------------------------
//Перетворіть оператори використовуючи команди else if.
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val <5) {
   return "Smaller than 5";
    } else {
    return "Between 5 and 10";
  }}
  
  testElseIf(7);