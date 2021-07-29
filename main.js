/*- Створити форму з інпутом для введення ім'я, та action="index2.html".
При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
На index2.html виводити записане в localstorage ім'я в div*/

let form = document.forms.form;
let username = form.username;
username.oninput = function () {
    localStorage.setItem('userName', username.value);
};




