const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "my_database",
});

const query = `
  SELECT 
    CONCAT(users.Name, ' ', users.Surname) AS \`Name Surname\`, 
    devices.OS 
  FROM 
    devices 
  INNER JOIN 
    users 
  ON 
    devices.phone_number = users.Phone;
`;
connection.query(query, (error, results) => {
  if (error) {
    console.error('Ошибка выполнения запроса:', error);
  } else {
    console.log('Результаты запроса:', results);
  }
connection.end();
});