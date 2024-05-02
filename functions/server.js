const { exec } = require('child_process');
const ArrdMainURL = "https://main--adorable-praline-baa3f3.netlify.app/api";
let response = null;
let dataR = null;

exports.handler = async (event, context) => {
  let log = null;
  // Запустить json-server через командную строку
  const installCommand = 'npm install -g json-server';

  // Команда для запуска json-server
  const startCommand = 'json-server --watch db.json --port 3005';
  
  // Выполнение установочной команды
  exec(installCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Ошибка установки json-server: ${error}`);
      return;
    }
  
    console.log('json-server успешно установлен');
  
    // Выполнение команды для запуска json-server после успешной установки
    exec(startCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Ошибка запуска json-server: ${error}`);
        return;
      }
      console.log(`json-server успешно запущен: ${stdout}`);
    });
  });
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