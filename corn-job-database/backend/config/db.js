const mongoose =  require('mongoose');
const mysql  = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'ilove@1A44S',
//     database: 'testDatabase',
// });

// export default pool.promise();


const databaseUrl = 'mongodb://127.0.0.1:27017/cornTestData';

mongoose
    .connect(databaseUrl,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    .then(() => console.log('MongoDb connected successfully'))
    .catch((error) => console.log(error));
