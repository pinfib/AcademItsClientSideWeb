// 1. Создайте массив объектов-стран
// У страны есть название и список городов
// У города есть название и численность населения

function createCountriesList() {
    return [
        {
            name: "Страна1",
            cities: [
                {
                    name: "Город1",
                    population: 100
                },
                {
                    name: "Город2",
                    population: 200
                }
            ]
        },
        {
            name: "Страна2",
            cities: [
                {
                    name: "Город1",
                    population: 200
                },
                {
                    name: "Город2",
                    population: 300
                },
                {
                    name: "Город3",
                    population: 100
                }
            ]
        },
        {
            name: "Страна3",
            cities: [
                {
                    name: "Город1",
                    population: 100
                }
            ]
        },
        {
            name: "Страна4",
            cities: [
                {
                    name: "Город1",
                    population: 150
                },
                {
                    name: "Город2",
                    population: 100
                },
                {
                    name: "Город3",
                    population: 100
                }
            ]
        },
        {
            name: "Страна5",
            cities: []
        }
    ];
}

// 2. Найдите страну/страны с максимальным количеством городов

function getCountriesByMaxCitiesCount(countriesList) {
    var maxCitiesCount = countriesList.reduce(function (result, country) {
        return Math.max(country.cities.length, result);
    }, 0);

    return countriesList.filter(function (country) {
        return country.cities.length === maxCitiesCount;
    });
}

// 3. Получите объект с информацией по всем странам такого вида: 
// ключ – название страны, 
// значение – суммарная численность по стране

function getSpecialObject(countriesList) {
    return countriesList.reduce(function (specialObject, country) {
        var totalPopulation = country.cities.reduce(function (result, city) {
            return result + city.population;
        }, 0);

        specialObject[country.name] = totalPopulation;

        return specialObject;
    }, {});
}

(function () {
    var countries = createCountriesList();

    console.log("Список стран:", countries);

    console.log("Список стран c максимальным количеством городов:", getCountriesByMaxCitiesCount(countries));

    console.log("Информация по странам:", getSpecialObject(countries));
})();