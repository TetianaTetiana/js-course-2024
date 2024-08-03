let userNumber = +(prompt("Введіть число від 1 до 3, де 1 - камінь, 2 - ножиці, 3 - папір"))
let randomNumber = Math.ceil(Math.random() * 3);

alert(`Комп'ютер обрав ${randomNumber}`)

if (userNumber === 1 && randomNumber > 1 || userNumber === 2 && randomNumber === 3)
    { alert("Ура! Ви перемогли!")}
else if (userNumber === 3 && randomNumber < 3 || userNumber === 2 && randomNumber === 1)
    { alert("Нажаль Ви програли")}
else {alert("Нічия")}