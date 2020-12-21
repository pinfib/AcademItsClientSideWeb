function createRandomNumbersArray(count) {
    var array = [];

    for (var i = 0; i < count; i++) {
        array.push(Math.round(Math.random() * 50));
    }

    return array;
}

function isEvenNumber(number) {
    return number % 2 === 0;
}

function arraySortDescending(array) {
    array.sort(function (number1, number2) {
        return number2 - number1;
    });
};

function getArrayElements(array, count, startIndex) {
    if (startIndex !== undefined) {
        return array.slice(startIndex, count);
    }

    return array.slice(count);
}

function evenNumbersSum(array) {
    return array
        .filter(isEvenNumber)
        .reduce(function (result, number) {
            return result + number;
        }, 0);
}

function createSortedArray(count) {
    var array = [];

    for (var i = 1; i <= count; i++) {
        array.push(i);
    }

    return array;
}

function getEvenNumbersSquared(array) {
    return array
        .filter(isEvenNumber)
        .map(function (number) {
            return Math.pow(number, 2);
        });
}

(function () {
    var randomNumbersArray = createRandomNumbersArray(20);

    console.log("Массив случайных чисел:", randomNumbersArray);

    arraySortDescending(randomNumbersArray);

    console.log("Массив отсортирован по убыванию:", randomNumbersArray);

    console.log("Подмассив из первых 5 элементов:", getArrayElements(randomNumbersArray, 5, 0));

    console.log("Подмассив из последних 5 элементов:", getArrayElements(randomNumbersArray, -5));

    console.log("Сумма чётных:", evenNumbersSum(randomNumbersArray));

    var sortedNumbersArray = createSortedArray(100);

    console.log("Массив чисел от 1 до 100:", sortedNumbersArray);

    console.log("Список квадратов четных чисел:", getEvenNumbersSquared(sortedNumbersArray));
})();