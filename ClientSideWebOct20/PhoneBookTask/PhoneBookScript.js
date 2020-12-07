$(document).ready(function () {
    var table = $(".special_table tbody");

    //Тестовые данные
    additionElement("Иван", "Иванов", "88001234567");
    additionElement("Петр", "Петров", "88001234568");
    additionElement("Николай", "Николаев", "87001234567");
    additionElement("Иван", "Петров", "88001234569");
    additionElement("Николай", "Иванов", "89001234567");

    $("#add_contact_button").click(function () {                //добавление новой записи
        var firstName = $("#first_name_input");
        var lastName = $("#last_name_input");
        var phoneNumber = $("#phone_number_input");

        $(".error_message").remove();                           //сбросить стили ошибок
        $(".error").each(function () {
            $(this).removeClass("error");
        });

        validation(firstName, /[^a-zа-я]/i, firstName.val());
        validation(lastName, /[^a-zа-я]/i, lastName.val());
        validation(phoneNumber, /[^0-9#\*]/, phoneNumber.val());

        if ($(".error").length > 0) { return; }                 //если на странице после валидации появились стили ошибок, выход

        var isContactExist = false;

        table.find(".phone_number").each(function () {
            isContactExist = $(this).text() === phoneNumber.val();

            if (isContactExist) {
                return;
            }
        });

        if (isContactExist) {
            setErrorStyle($(this), "Запись с таким номером уже существует");
        } else {
            additionElement(firstName.val(), lastName.val(), phoneNumber.val());

            $(".input_container input[type=text]").each(function () {
                $(this).val("");
            });
        }
    });

    var selectAllCheckbox = $("#select_all");

    function additionElement(firstName, lastName, phoneNumber) {
        var tableRow = $("<tr>");

        tableRow.append($("<td>").html("<input type='checkbox'/>"));
        tableRow.append($("<td class='position'>").text(table.find("tr").length + 1));
        tableRow.append($("<td>").text(firstName));
        tableRow.append($("<td>").text(lastName));
        tableRow.append($("<td class='phone_number'>").text(phoneNumber));
        tableRow.append($("<td>").html("<button class='delete_row_button'>x</button>"));

        table.append(tableRow);

        tableRow.find(".delete_row_button").click(function (e) {
            if (confirm("Вы уверены, что хотите удалить запись?")) {
                tableRow.remove();

                resetIndexes();
            }
        });

        tableRow.find("input[type=checkbox]").click(function (e) {
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

    function resetIndexes() {
        table.find("tr").each(function () {
            $(this).find(".position").text($(this).index() + 1);
        });
    }

    function setErrorStyle(pageElement, message) {
        pageElement.addClass("error");
        pageElement.after("<span class='error_message'>" + message + "</span>");
    }

    selectAllCheckbox.click(function () {
        if (selectAllCheckbox.prop("checked")) {
            table.find("input[type=checkbox]").prop("checked", true);

            return;
        }

        table.find("input[type=checkbox]").prop("checked", false);
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

                    resetIndexes();
                }
            });

            selectAllCheckbox.prop("checked", false);
        }
    });
});