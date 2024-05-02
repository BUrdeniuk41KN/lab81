const { exec } = require('child_process');
const ArrdMainURL = "https://main--adorable-praline-baa3f3.netlify.app/api";
let response = null;
let dataR = null;

exports.handler = async (event, context) => {
  let log = null;
  // Запустить json-server через командную строку
  exec('json-server --watch TestDB.json --port 3005', (error, stdout, stderr) => {
    if (error) {
      console.error(`Ошибка запуска json-server: ${error.message}`);
      log = `Ошибка запуска json-server: ${error.message}`;
      return;
    }
    if (stderr) {
      console.error(`Ошибка вывода json-server: ${stderr}`);
      log = `Ошибка вывода json-server: ${stderr}`;
      return;
    }
    console.log(`json-server запущен: ${stdout}`);
    log = `json-server запущен: ${stdout}`;

  });

  // Вернуть ответ, например, для CORS
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Сервер JSON успешно запущен: " + fetchData() })
  };
};

async function fetchData() {

  await fetch(ArrdMainURL)
    .then(resp => resp.json())
    .then(r => {
      return r;
    }).catch(error => {
      console.error('Ошибка при получении данных из API:', error);
      throw error;
    })



}