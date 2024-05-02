const { exec } = require('child_process');

exports.handler = async (event, context) => {
  let log = "";
  // Запустить json-server через командную строку
  exec('json-server --watch TestDB.json --port 3005', (error, stdout, stderr) => {
    if (error) {
      log += `Ошибка запуска json-server: ${error.message}`;
      console.error(`Ошибка запуска json-server: ${error.message}`);
      return;
    }
    if (stderr) {
      log += `\nОшибка вывода json-server: ${stderr}`;
      console.error(`Ошибка вывода json-server: ${stderr}`);
      return;
    }
    log += `\njson-server запущен: ${stdout}`;
    console.log(`json-server запущен: ${stdout}`);

  });

  // Вернуть ответ, например, для CORS
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Сервер JSON успешно запущен\n" + log})
  };
};