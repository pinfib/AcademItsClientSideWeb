document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("temperature_input").addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            document.getElementById("convert_temperature").dispatchEvent(new Event("click"));
        }
    });

    document.getElementById("convert_temperature").addEventListener("click", function () {
        var temperature = +document.getElementById("temperature_input").value;

        if (isNaN(temperature)) {
            document.getElementById("kelvin").textContent = 0;
            document.getElementById("fahrenheit").textContent = 0;

            return;
        }

        document.getElementById("kelvin").textContent = temperature + 273.15;
        document.getElementById("fahrenheit").textContent = temperature * 9 / 5 + 32;
    });
});