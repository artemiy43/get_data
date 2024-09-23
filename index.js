fetch("https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available") // запрос делается через обычный fetch. По умолчанию это GET-запрос. Возвращается промис.
  .then((data) => data.json()) // ответ промиса - json-объект приводим к нормальному виду
  .then((res) => console.log(res)) // выводим конечный объект в консоль
  .catch((err) => console.log(err)); // если будут какие-то ошибки - ловим в блоке catch и выводим также в консоль
// проверить работу кода можно через запуск через Node - 'node index'
