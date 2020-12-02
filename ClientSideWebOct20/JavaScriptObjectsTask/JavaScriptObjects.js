(function () {

    // 1. Создайте массив объектов-стран
    // У страны есть название и список городов
    // У города есть название и численность населения

    var countries = [
        {
            "countryName": "Страна 1",
            "citiesList": [
                {
                    "cityName": "Город 1",
                    "population": 100
                },
                {
                    "cityName": "Город 2",
                    "population": 200
                }
            ]
        },
        {
            "countryName": "Страна 2",
            "citiesList": [
                {
                    "cityName": "Город 1",
                    "population": 200
                },
                {
                    "cityName": "Город 2",
                    "population": 300
                },
                {
                    "cityName": "Город 3",
                    "population": 100
                }
            ]
        },
        {
            "countryName": "Страна 3",
            "citiesList": [
                {
                    "cityName": "Город 1",
                    "population": 100
                }
            ]
        },
        {
            "countryName": "Страна 4",
            "citiesList": [
                {
                    "cityName": "Город 1",
                    "population": 150
                },
                {
                    "cityName": "Город 2",
                    "population": 100
                },
                {
                    "cityName": "Город 3",
                    "population": 100
                }
            ]
        },
        {
            "countryName": "Страна 5",
            "citiesList": []
        }
    ];

    (function () {
        console.log("Список стран:");
        console.log(countries);
    })();

    // 2. Найдите страну/страны с максимальным количеством городов

    (function () {
        var maxCitiesCount = countries.reduce(function (result, country) {
            return Math.max(country.citiesList.length, result);
        }, 0);

        var biggestCountries = countries.filter(function (country) {
            return country.citiesList.length === maxCitiesCount;
        });

        console.log("Список стран c максимальным количеством городов:");
        console.log(biggestCountries);
    })();

    // 3. Получите объект с информацией по всем странам такого вида: 
    // ключ – название страны, 
    // значение – суммарная численность по стране

    (function () {
        var countriesMap = countries.map(function (country) {
            var totalPopulation = country.citiesList.reduce(function (result, city) { return result + city.population; }, 0);

            return {
                "countryName": country.countryName,
                "totalPopulation": totalPopulation
            }
        });

        console.log("Информация по странам:");
        console.log(countriesMap);
    })();
})();