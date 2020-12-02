document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("task_addition").addEventListener("click", function () {
        var errorMessage = document.querySelector(".error_message p");

        var input = document.getElementById("task_input");

        if (input.value === "") {
            errorMessage.textContent = "ОШИБКА! Текст заметки не должен быть пустым.";

            return;
        }

        var listItem = document.createElement("li");

        listItem.innerHTML = "<div class='task_body'>\
                                <button class='edit_button'>edit</button><button class='delete_button'>x</button><span class='text'></span>\
                            </div>\
                            <div class='task_edit'>\
                                <button class='save_button'>save</button><button class='cancel_button'>cancel</button><input type='text' class='edit' />\
                            </div>";

        switchEditView(false);

        listItem.querySelector(".text").textContent = input.value;

        listItem.querySelector(".edit_button").addEventListener("click", function () {
            switchEditView(true);

            listItem.querySelector(".edit").value = listItem.querySelector(".text").textContent;
        });

        listItem.querySelector(".delete_button").addEventListener("click", function () {
            listItem.parentNode.removeChild(listItem);
        });

        listItem.querySelector(".cancel_button").addEventListener("click", function () {
            switchEditView(false);
        });

        listItem.querySelector(".save_button").addEventListener("click", function () {
            if (listItem.querySelector(".edit").value === "") {
                errorMessage.textContent = "ОШИБКА! Текст заметки не должен быть пустым.";

                return;
            }

            errorMessage.textContent = "";

            listItem.querySelector(".text").textContent = listItem.querySelector(".edit").value;

            switchEditView(false);
        });

        document.getElementById("todo_list").appendChild(listItem);

        input.value = "";
        errorMessage.textContent = "";

        function switchEditView(isEdit) {
            if (isEdit) {
                listItem.querySelector(".task_edit").style.display = "block";
                listItem.querySelector(".task_body").style.display = "none";

                return;
            }

            listItem.querySelector(".task_edit").style.display = "none";
            listItem.querySelector(".task_body").style.display = "block";
        }
    });
});