(function () {
    var ETR = ETR || {};
	
	// 1. Создайте массив чисел
	
	ETR.arrayInt1 = [];
	
	for(var i = 0; i < 20; i++) {
		ETR.arrayInt1.push(Math.round(Math.random () * 50));
	}
	
	console.log("Массив случайных чисел:");
	console.log(ETR.arrayInt1);
	
	// 2. Отсортируйте его по убыванию
	
	ETR.arrayInt1.sort(function (a, b) {
		if (a == b) return 0;
		if (a < b) return 1;
		return -1;
	});
	
	console.log("Массив отсортирован по убыванию:");
	console.log(ETR.arrayInt1);
	
	// 3. Получите подмассив из первых 5 элементов и подмассив из последних 5 элементов

	console.log("Подмассив из первых 5 элементов:");
	console.log(ETR.arrayInt1.slice(0, 5));
		
	console.log("Подмассив из последних 5 элементов:");
	console.log(ETR.arrayInt1.slice(ETR.arrayInt1.length - 5));
	
	// 4. Найдите сумму элементов массива, которые являются четными числами
	
	function isEvenNumber(a) {
		if (a % 2 == 0) {
			return true;
		}
		return false;
	}
	
	ETR.sum = ETR.arrayInt1
		.filter(isEvenNumber)
		.reduce(function (result, number) { 
			return result + number;
		});

	console.log("Сумма чётных:");
	console.log(ETR.sum);
	
	// 5. Создайте массив чисел от 1 до 100, в таком порядке

	ETR.arrayInt2 = [];

	for(var i = 1; i <= 100; i++) {
		ETR.arrayInt2.push(i);
	}
	
	console.log("Массив чисел от 1 до 100:");
	console.log(ETR.arrayInt2);
	
	// 6. Получите список квадратов четных чисел из этого массива	
	
	ETR.arraySquares = ETR.arrayInt2
		.filter(isEvenNumber)
		.map(function (a) {
			return Math.pow(a, 2)
		});
	
	console.log("Список квадратов четных чисел:");
	console.log(ETR.arraySquares);
})();