(function () {
    // 1. Создайте массив чисел

    var randomNumbersArray = [];

    (function () {
        for (var i = 0; i < 20; i++) {
            randomNumbersArray.push(Math.round(Math.random() * 50));
        }

        console.log("Массив случайных чисел:");
        console.log(randomNumbersArray);
    })();

    // 2. Отсортируйте его по убыванию

    (function () {
        randomNumbersArray.sort(function (number1, number2) {
            return number2 - number1;
        });

        console.log("Массив отсортирован по убыванию:");
        console.log(randomNumbersArray);
    })();

    // 3. Получите подмассив из первых 5 элементов и подмассив из последних 5 элементов

    (function () {
        console.log("Подмассив из первых 5 элементов:");
        console.log(randomNumbersArray.slice(0, 5));

        console.log("Подмассив из последних 5 элементов:");
        console.log(randomNumbersArray.slice(randomNumbersArray.length - 5));
    })();

    // 4. Найдите сумму элементов массива, которые являются четными числами

    function isEvenNumber(number) {
        return number % 2 === 0;
    }

    (function () {
        var sum = randomNumbersArray
            .filter(isEvenNumber)
            .reduce(function (result, number) {
                return result + number;
            }, 0);

        console.log("Сумма чётных:");
        console.log(sum);
    })();

    // 5. Создайте массив чисел от 1 до 100, в таком порядке

    var sortedNumbersArray = [];

    (function () {
        for (var i = 1; i <= 100; i++) {
            sortedNumbersArray.push(i);
        }

        console.log("Массив чисел от 1 до 100:");
        console.log(sortedNumbersArray);
    })();

    // 6. Получите список квадратов четных чисел из этого массива	

    (function () {
        var numbersSquaredArray = sortedNumbersArray
            .filter(isEvenNumber)
            .map(function (number) {
                return Math.pow(number, 2);
            });

        console.log("Список квадратов четных чисел:");
        console.log(numbersSquaredArray);
    })();
})();