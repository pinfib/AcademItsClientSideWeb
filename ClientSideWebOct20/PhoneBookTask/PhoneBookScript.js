$(document).ready(function () {
    var table = $(".special_table tbody");

    /*addElement("Иван", "Иванов", "88001234567");  //Тестовые данные
    addElement("Петр", "Петров", "88001234568");
    addElement("Николай", "Николаев", "87001234567");
    addElement("Иван", "Петров", "88001234569");
    addElement("Николай", "Иванов", "89001234567");*/

    $("#add_contact_button").click(function () {                // добавление новой записи
        var firstName = $("#first_name_input");
        var lastName = $("#last_name_input");
        var phoneNumber = $("#phone_number_input");

        $(".error_message").remove();                           // сбросить стили ошибок
        $(".error").removeClass("error");

        validation(firstName, /[^a-zа-я]/i, firstName.val());
        validation(lastName, /[^a-zа-я]/i, lastName.val());
        validation(phoneNumber, /[^0-9#\*]/, phoneNumber.val());

        if ($(".error").length > 0) {                           // если на странице после валидации появились стили ошибок, выход
            return;
        }

        addElement(firstName.val(), lastName.val(), phoneNumber.val());

        $(".input_container input[type=text]").val("");
    });

    var selectAllCheckbox = $("#select_all");

    function addElement(firstName, lastName, phoneNumber) {
        var tableRow = $("<tr>");

        tableRow.append($("<td>").html("<input type='checkbox'/>"));
        tableRow.append($("<td class='position'>").text(table.find("tr").length + 1));
        tableRow.append($("<td>").text(firstName));
        tableRow.append($("<td>").text(lastName));
        tableRow.append($("<td class='phone_number'>").text(phoneNumber));
        tableRow.append($("<td>").html("<button class='delete_row_button'>x</button>"));

        table.append(tableRow);

        tableRow.find(".delete_row_button").click(function () {
            if (confirm("Вы уверены, что хотите удалить запись?")) {
                tableRow.remove();

                recalculateIndices();
            }
        });

        tableRow.find("input[type=checkbox]").click(function () {           // Если чекбокс в текущей строке false, то чекбокс в шапке тоже должен быть false
            if (!tableRow.find("input[type=checkbox]").prop("checked")) {
                selectAllCheckbox.prop("checked", false);
            }
        });
    }

    function validation(pageElement, regularExpression, value) {
        if (value === "" || value === null) {
            setErrorStyle(pageElement, "Поле не может быть пустым");

            return;
        }

        if (regularExpression.test(value)) {
            setErrorStyle(pageElement, "Поле содержит недопустимые символы");
        }
    }

    function recalculateIndices() {
        table.find("tr").each(function (index) {
            $(this).find(".position").text(index + 1);
        });
    }

    function setErrorStyle(pageElement, message) {
        pageElement.addClass("error");
        var errorMessage = $("<span>");
        errorMessage.addClass("error_message");
        errorMessage.text(message);
        pageElement.after(errorMessage);
    }

    selectAllCheckbox.click(function () {
        table.find("input[type=checkbox]").prop("checked", selectAllCheckbox.prop("checked"));
    });

    $("#delete_marked_button").click(function () {
        var countDeletedElements = 0;

        table.find("tr").each(function () {
            countDeletedElements += $(this).find("input[type=checkbox]").prop("checked");
        });

        if (countDeletedElements > 0 && confirm("Вы уверены, что хотите удалить отмеченные записи?")) {
            table.find("tr").each(function () {
                if ($(this).find("input[type=checkbox]").prop("checked")) {
                    $(this).remove();

                    recalculateIndices();
                }
            });
            selectAllCheckbox.prop("checked", false);
        }
    });
});