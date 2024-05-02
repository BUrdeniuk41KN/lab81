const { exec } = require('child_process');
import { axios } from 'axios';
const ArrdMainURL = "https://main--adorable-praline-baa3f3.netlify.app/api"; 
let response = null;

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
    fetchData();
  });

  // Вернуть ответ, например, для CORS
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Сервер JSON успешно запущен: " + response})
  };
};

async function fetchData() {
  try {
    response = await axios.get(ArrdMainURL);
    console.log('Данные из API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных из API:', error);
    throw error;
  }
}