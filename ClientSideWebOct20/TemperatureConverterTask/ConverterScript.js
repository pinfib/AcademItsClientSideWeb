document.addEventListener("DOMContentLoaded", function () {
    function getString(number) {
        return String(Math.floor(number * 1000) / 1000);
    }

    document.getElementById("temperature_input").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            document.getElementById("convert_temperature").dispatchEvent(new Event("click"));
        }
    });

    document.getElementById("convert_temperature").addEventListener("click", function () {
        var temperature = +document.getElementById("temperature_input").value;

        if (isNaN(temperature)) {
            document.getElementById("kelvin").textContent = "0";
            document.getElementById("fahrenheit").textContent = "0";

            document.querySelector(".error_message").textContent = "Ошибка! Нужно ввести число!";

            return;
        }

        document.querySelector(".error_message").textContent = "";

        document.getElementById("kelvin").textContent = getString(temperature + 273.15);
        document.getElementById("fahrenheit").textContent = getString(temperature * 9 / 5 + 32);
    });
});