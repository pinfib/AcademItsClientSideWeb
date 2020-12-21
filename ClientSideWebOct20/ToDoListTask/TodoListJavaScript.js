document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("task_addition").addEventListener("click", function () {
        var input = document.getElementById("task_input");

        if ((!isValid(document.querySelector(".input_container"), input.value))) {
            return;
        }

        var listItem = document.createElement("li");

        listItem.innerHTML = "<div class='task_body'>\
                                <button class='edit_button'>изменить</button><button class='delete_button'>x</button><span class='text'></span>\
                            </div>\
                            <div class='task_edit'>\
                                <button class='save_button'>сохранить</button><button class='cancel_button'>отмена</button><input type='text' class='edit' /><span class='error_message'></span>\
                            </div>";

        switchEditView(false);

        listItem.querySelector(".text").textContent = input.value;

        // редактирование

        listItem.querySelector(".edit_button").addEventListener("click", function () {
            switchEditView(true);

            listItem.querySelector(".edit").value = listItem.querySelector(".text").textContent;
        });

        // удаление

        listItem.querySelector(".delete_button").addEventListener("click", function () {
            listItem.parentNode.removeChild(listItem);
        });

        // отмена

        listItem.querySelector(".cancel_button").addEventListener("click", function () {
            switchEditView(false);
        });

        // сохранение

        listItem.querySelector(".save_button").addEventListener("click", function () {
            if (!isValid(listItem, listItem.querySelector(".edit").value)) {
                return;
            }

            listItem.querySelector(".error_message").textContent = "";

            listItem.querySelector(".text").textContent = listItem.querySelector(".edit").value;

            switchEditView(false);
        });

        document.getElementById("todo_list").appendChild(listItem);

        input.value = "";
        document.querySelector(".error_message").textContent = "";

        function isValid(element, text) {
            if (text === "" || /^\s+$/.test(text)) {
                element.querySelector(".error_message").textContent = "Ошибка! Текст заметки не должен быть пустым.";

                return false;
            }

            return true;
        }

        function switchEditView(isEdit) {
            if (isEdit) {
                listItem.querySelector(".task_edit").style.display = "block";
                listItem.querySelector(".task_body").style.display = "none";

                return;
            }

            listItem.querySelector(".task_edit").style.display = "none";
            listItem.querySelector(".task_body").style.display = "block";

            listItem.querySelector(".error_message").textContent = "";
        }
    });
});