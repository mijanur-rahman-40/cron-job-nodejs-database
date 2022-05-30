import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ilove@1A44S',
    database: 'testDatabase',
});

export default pool.promise();