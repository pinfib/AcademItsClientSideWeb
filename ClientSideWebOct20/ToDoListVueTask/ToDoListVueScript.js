function checkInput(validateString) {
    var errorsArray = [];

    if (validateString.trim().length === 0) {
        errorsArray.push({
            message: "Строка не должна быть пустой"
        });
    }

    return errorsArray;
}

Vue.component("error-item", {
    props: {
        message: {
            type: String,
            required: true
        }
    },

    template: "#error-item-template"
});

Vue.component("todo-list-item", {
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    template: "#todo-list-item-template",

    data: function () {
        return {
            errors: [],
            editText: "",
            isEditing: false
        };
    },

    methods: {
        deleteItem: function () {
            this.$emit("delete-item", this.item);
        },

        startEditItem: function () {
            this.editText = this.item.text;
            this.isEditing = true;
        },

        saveEditItem: function () {
            this.errors = checkInput(this.editText);

            if (this.errors.length !== 0) {
                return;
            }

            this.$emit("save-item", this.item, this.editText);

            this.isEditing = false;
            this.editText = this.item.text;
        },

        cancelEdit: function () {
            this.isEditing = false;
            this.editText = this.item.text;
        }
    }
});

Vue.component("todo-list", {
    template: "#todo-list-template",

    data: function () {
        return {
            items: [], // { id, text }
            errors: [],
            newTodoText: "",
            newId: 0
        };
    },

    methods: {
        addNewTodoItem: function () {
            var text = this.newTodoText;

            this.errors = checkInput(text);

            if (this.errors.length !== 0) {
                return;
            }

            this.items.push({
                id: this.newId,
                text: text
            });

            this.newTodoText = "";
            this.newId++;
        },

        deleteItem: function (item) {
            this.items = this.items.filter(function (x) {
                return x !== item;
            });
        },

        saveEditItem: function (item, newText) {
            item.text = newText;
        }
    }
});

new Vue({
    el: "#app"
});