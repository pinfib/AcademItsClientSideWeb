(function () {
    // 1. Создайте массив чисел

    var shortIntArray = [];

    (function () {
        for (var i = 0; i < 20; i++) {
            shortIntArray.push(Math.round(Math.random() * 50));
        }

        console.log("Массив случайных чисел:");
        console.log(shortIntArray);
    })();

    // 2. Отсортируйте его по убыванию

    (function () {
        shortIntArray.sort(function (e1, e2) {
            return e2 - e1;
        });

        console.log("Массив отсортирован по убыванию:");
        console.log(shortIntArray);
    })();

    // 3. Получите подмассив из первых 5 элементов и подмассив из последних 5 элементов

    (function () {
        console.log("Подмассив из первых 5 элементов:");
        console.log(shortIntArray.slice(0, 5));

        console.log("Подмассив из последних 5 элементов:");
        console.log(shortIntArray.slice(shortIntArray.length - 5));
    })();

    // 4. Найдите сумму элементов массива, которые являются четными числами

    function isEvenNumber(number) {
        return number % 2 === 0;
    }

    (function () {
        var sum = shortIntArray
            .filter(isEvenNumber)
            .reduce(function (result, number) {
                return result + number;
            }, 0);

        console.log("Сумма чётных:");
        console.log(sum);
    })();

    // 5. Создайте массив чисел от 1 до 100, в таком порядке

    var bigIntArray = [];

    (function () {
        for (var i = 1; i <= 100; i++) {
            bigIntArray.push(i);
        }

        console.log("Массив чисел от 1 до 100:");
        console.log(bigIntArray);
    })();

    // 6. Получите список квадратов четных чисел из этого массива	

    (function () {
        var arraySquares = bigIntArray
            .filter(isEvenNumber)
            .map(function (number) {
                return Math.pow(number, 2);
            });

        console.log("Список квадратов четных чисел:");
        console.log(arraySquares);
    })();
})();