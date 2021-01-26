function checkInput(errorsList, value, regularExpression, fieldName) {
    var errorObject = null;

    if (value.trim().length === 0) {
        errorObject = {
            message: `Необходимо заполнить поле ${fieldName}`
        };
    }

    if (regularExpression.test(value)) {
        errorObject = {
            message: `Поле ${fieldName} содержит недопустимые символы`
        };
    }

    if (errorObject !== null) {
        errorsList.push(errorObject);
    }
}

Vue.component("contact-item",
    {
        props: {
            contact: {
                type: Object,
                required: true
            }
        },

        template: "#contact-item-template",

        data: function () {
            return {
                id: 0,
                index: 0,
                firstName: "",
                lastName: "",
                phoneNumber: ""
            }
        },

        methods: {
            deleteContact: function () {
                this.$emit("delete-contact", this.contact);
            }
        }
    });

Vue.component("new-contact-input",
    {
        template: "#new-contact-input-template",
        data: function () {
            return {
                newContactFirstName: "",
                newContactLastName: "",
                newContactPhoneNumber: "",
                newId: 6,
                contactFilter: "",
                contacts: [
                    { id: 1, index: 1, firstName: "Иван", lastName: "Иванов", phoneNumber: "88001234567" }, //Тестовые данные
                    { id: 2, index: 2, firstName: "Петр", lastName: "Петров", phoneNumber: "88001234568" },
                    { id: 3, index: 3, firstName: "Николай", lastName: "Николаев", phoneNumber: "87001234567" },
                    { id: 4, index: 4, firstName: "Иван", lastName: "Петров", phoneNumber: "88001234569" },
                    { id: 5, index: 5, firstName: "Николай", lastName: "Иванов", phoneNumber: "89001234567" }
                ], // { id, index, firstName, lastName, phoneNumber }
                errorsList: []
            };
        },

        methods: {
            addNewContact: function () {
                this.errorsList = [];

                checkInput(this.errorsList, this.newContactFirstName, /[^a-zа-я]/i, "Имя");
                checkInput(this.errorsList, this.newContactLastName, /[^a-zа-я]/i, "Фамилия");
                checkInput(this.errorsList, this.newContactPhoneNumber, /[^0-9#\*]/, "Номер телефона");

                if (this.errorsList.length > 0) {
                    return;
                }

                this.contacts.push({
                    id: this.newId,
                    index: this.contacts.length + 1,
                    firstName: this.newContactFirstName,
                    lastName: this.newContactLastName,
                    phoneNumber: this.newContactPhoneNumber
                });

                this.newId++;
                this.newContactFirstName = "";
                this.newContactLastName = "";
                this.newContactPhoneNumber = "";
            },

            deleteContact: function (contact) {
                this.contacts = this.contacts.filter(function (x) {
                    return x !== contact;
                });

                _.each(this.contacts, function (element, index) {
                    element.index = index + 1;
                });
            },

            clearFilterInput: function () {
                this.contactFilter = "";
            }
        },

        computed: {
            filteredContacts: function () {
                var currentFilter = this.contactFilter;

                return this.contacts.filter(function (contact) {
                    if (currentFilter === "") {
                        return true;
                    }

                    return (contact.firstName.indexOf(currentFilter) > -1 ||
                        contact.lastName.indexOf(currentFilter) > -1 ||
                        contact.phoneNumber.indexOf(currentFilter) > -1);
                });
            }
        }
    });

new Vue({
    el: "#app"
});