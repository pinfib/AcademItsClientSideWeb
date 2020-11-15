(function () {
    var ETR = ETR || {};
	
	// 1. Создайте массив объектов-стран
	// У страны есть название и список городов
	// У города есть название и численность населения

	function City(name, population)
	{
		this.name = name;
		this.population = population;
	}

	function Country(name, citiesList)
	{
		this.name = name;
		this.citiesList = citiesList;
	}

	ETR.countries = 
	[
		new Country("Страна 1", 
		[ 
			new City("Город 1", 100), 
			new City("Город 2", 200)
		]),
		new Country("Страна 2", 
		[ 
			new City("Город 1", 300),
			new City("Город 2", 100), 
			new City("Город 3", 200)
		]),	
		new Country("Страна 3", 
		[ 
			new City("Город 1", 300),
			new City("Город 2", 500)
		]),
		new Country("Страна 4", 
		[ 
			new City("Город 1", 300),
			new City("Город 2", 100)
		]),
	];

	console.log(ETR.countries);
	// 2. Найдите страну/страны с максимальным количеством городов

	ETR.maxCities = ETR.countries[0].citiesList.length; 
	
	ETR.countries.forEach(function (e) {ETR.maxCities = Math.max(e.citiesList.length, ETR.maxCities)});
	
	console.log(ETR.maxCities);
	
	ETR.biggestCountries = ETR.countries.filter(function(e) 
	{
		if(e.citiesList.length == ETR.maxCities)
		{
			return true;
		}
		
		return false;
	});
	
	console.log(ETR.biggestCountries);
	
	console.log("--------------");
	
	// 3. Получите объект с информацией по всем странам такого вида: 
	// ключ – название страны, 
	// значение – суммарная численность по стране

	function specialMap(key, value)
	{
		this.key = key;
		this.value = value;
	}

	ETR.countriesMap = ETR.countries.map(function(e) 
	{
		var totalPopulation = 0;
		
		e.citiesList.forEach(function(c) {
			totalPopulation = totalPopulation + c.population;
		});
		
		return new specialMap(e.name, totalPopulation);
	});
	
	console.log(ETR.countriesMap);
	
})();