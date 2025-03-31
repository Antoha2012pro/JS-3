// 1. Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
const result = 5+5+`5`;
console.log(result);


// 2. Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
const email = prompt(`Введіть вашу електронну пошту: `);
console.log(`Ваша електронна пошта є ${email.includes(`@`)}\nДовжина вашої електронної пошти - ${email.length} символа`);


// 3. Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
const my = `My`;
const name = `name`;
const is = `is`;
const yourName = prompt(`Введіть ваше ім'я: `);
const fullName = `${my} ${name} ${is} ${yourName}`;
console.log(fullName);


// 4. Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
const userName = prompt(`Введіть ваше ім'я: `);
const payment = prompt(`Ваша сума до оплати: `);
console.log(alert(`Дякуємо, ${userName}! До сплати ${payment} гривень.`));
