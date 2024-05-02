const { exec } = require('child_process');

// Команда для выполнения
const command = 'json-server --watch db.json --port 3005';

// Выполнение команды
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Ошибка запуска сервера: ${error}`);
    return;
  }
  console.log(`Сервер JSON успешно запущен: ${stdout}`);
});