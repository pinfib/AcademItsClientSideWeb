function createPeopleList() {
    return [
        {
            name: "Иван",
            lastName: "Иванов",
            age: 20
        },
        {
            name: "Алексей",
            lastName: "Алексеев",
            age: 25
        },
        {
            name: "Олег",
            lastName: "Иванов",
            age: 30
        },
        {
            name: "Алёна",
            lastName: "Петрова",
            age: 27
        },
        {
            name: "Ольга",
            lastName: "Скворцова",
            age: 20
        },
        {
            name: "Оксана",
            lastName: "Алексеева",
            age: 30
        },
        {
            name: "Пётр",
            lastName: "Петров",
            age: 18
        },
        {
            name: "Александр",
            lastName: "Петров",
            age: 26
        },
        {
            name: "Екатерина",
            lastName: "Петрова",
            age: 70
        },
        {
            name: "Надежда",
            lastName: "Иванова",
            age: 60
        }]
}

function getAverageAge(list) {
    return _.reduce(list, function (result, p) {
        return result + p.age;
    }, 0) / _.size(list);
}

function getSortedList(list) {
    return _.chain(list)
        .filter(function (p) { return p.age >= 20 && p.age <= 30; })
        .sortBy("age")
        .value();
}

function addNewField(list) {
    return _.map(list, function (p) {
        p["fullName"] = "".concat(p.name, " ", p.lastName);
        return p;
    });
}

(function () {
    var peopleList = createPeopleList();

    console.log(peopleList);

    console.log("Средний возраст = ", getAverageAge(peopleList));

    console.log("Люди в возрасте от 20 до 30 в порядке возрастания возраста: ", getSortedList(peopleList));

    console.log("Новый список:", addNewField(peopleList));
})();