// Что такое Fetch запрос?
// Метод fetch — это XMLHttpRequest нового поколения. Он предоставляет улучшенный интерфейс для осуществления запросов к серверу: как по части возможностей и контроля над происходящим, так и по синтаксису, так как построен на промисах.
// fetch() позволяет вам делать запросы, схожие с XMLHttpRequest (XHR). Основное отличие заключается в том, что Fetch API использует Promises, которые позволяют использовать более простое и чистое API, избегать катастрофического количества callback'ов и необходимости помнить API для XMLHttpRequest


// Promise – это специальный объект, который содержит своё состояние. Вначале pending , затем – одно из: fulfilled или rejected.
// 1.Код, которому надо сделать что-то асинхронно, создаёт объект promise и возвращает его.
// 2.Внешний код, получив promise, навешивает на него обработчики.
// По завершении процесса асинхронный код переводит promise в состояние fulfilled или rejected . При этом автоматически вызываются соответствующие обработчики во внешнем коде.
// В пределах функции значение this зависит от того, каким образом вызвана функция.

//
// Стрелочные функция главное их отличие проявляется в том, как они работают с контекстом. Контекст обычных функций зависит от места вызова, а контекст стрелочных функций — от того места, где они были определены.
//  Стрелочная функция не имеет своего контекста, она связывается с лексическим окружением, то есть функцией, внутри которой определена стрелочная функция.
//  В ES6 JavaScript появились стрелочные функции.Чтобы создать стрелочную функцию, ключевое слово function не нужно. Для ее объявления нужно добавить стрелку сразу после перечисления параметров.
//  Чаще всего стрелочные функции используются в методах массива JavaScript: map(), Reduce(), Filter() и т. д. Используя стрелочные функции, мы можем выполнять преобразования массива в одну строку кода.

frut => {apple,cherry,strawberry };

let printName = (first, last) => console.log(`${first} ${last}`);


// Использование async/await состоит из двух частей.Ключевое слово async
// Прежде всего, у нас есть ключевое слово async, которое мы помещаем перед объявлением функции, чтобы сделать ее асинхронной. Асинхронная функция — это функция, которая предвосхищает возможность использования ключевого слова await для запуска асинхронного кода.
//  Мы можем добавлять async даже в методах создания классов, чтобы они возвращали обещания, и ждать обещания внутри них.
//  Async/await позволяет писать асинхронный код, который легко читать и поддерживать. Несмотря на то, что async/await поддерживается хуже других способов написания асинхронного кода.

button.onclick = async function () {
        const response = await fetch(SEARCH_URL+iput.value);
        const cocktail = await response.json();
            console.log(Cocktail)
    }