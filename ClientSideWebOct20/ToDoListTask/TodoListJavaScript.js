(function() {
    var errorMessage = document.querySelector(".error_message").querySelector("p");


    function createElement(text) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "<div class='task_body'><button class='edit_button'>edit</button><button class='delete_button'>x</button><span class='text'></span></div><div class='task_edit'><button class='save_button'>save</button><button class='cancel_button'>cancel</button><input type='text' class='edit' /></div >";

        listItem.querySelector(".task_edit").style.display = "none";

        listItem.querySelector(".text").textContent = text;

        listItem.querySelector(".edit_button").addEventListener("click", function() {
            listItem.querySelector(".task_edit").style.display = "block";
            listItem.querySelector(".task_body").style.display = "none";

            listItem.querySelector(".edit").value = listItem.querySelector(".text").textContent;
        });

        listItem.querySelector(".delete_button").addEventListener("click", function() {
            listItem.parentNode.removeChild(listItem);
        });

        listItem.querySelector(".cancel_button").addEventListener("click", function() {
            listItem.querySelector(".task_edit").style.display = "none";
            listItem.querySelector(".task_body").style.display = "block";
        });

        listItem.querySelector(".save_button").addEventListener("click", function () {
            if (listItem.querySelector(".edit").value === "") {
                errorMessage.textContent = "ОШИБКА! Текст заметки не должен быть пустым.";

                return;
            }

            listItem.querySelector(".text").textContent = listItem.querySelector(".edit").value;

            listItem.querySelector(".task_edit").style.display = "none";
            listItem.querySelector(".task_body").style.display = "block";

            errorMessage.textContent = "";
        });

        return listItem;
    }

    document.getElementById("task_addition").addEventListener("click", function() {
        var input = document.getElementById("task_input");

        if (input.value === "") {
            errorMessage.textContent = "ОШИБКА! Текст заметки не должен быть пустым.";

            return;
        }
        
        document.getElementById("todo_list").appendChild(createElement(input.value));

        input.value = "";
        errorMessage.textContent = "";
    });

})();