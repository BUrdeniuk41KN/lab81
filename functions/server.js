const { exec } = require('child_process');
const ArrdMainURL = "https://main--adorable-praline-baa3f3.netlify.app/api";
let response = null;
let dataR = null;

exports.handler = async (event, context) => {
  let log = null;
  // Запустить json-server через командную строку
  exec('npm install -g json-server && json-server --watch db.json --port 3005', (error, stdout, stderr) => {
    if (error) {
      console.error(`Ошибка запуска сервера: ${error}`);
      return;
    }
    console.log(`Сервер JSON успешно запущен: ${stdout}`);
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
      return resp;
    }).catch(error => {
      console.error('Ошибка при получении данных из API:', error);
      throw error;
    })



}