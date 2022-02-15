const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    server: 'localhost',
    database: 'testDb',
    options: {
        enableArithAbort: true,
        trustServerCertificate: true
    }
}


const run = async () => {
    let pool;
    try {
        console.log('Connection Opening...');
        pool = await sql.connect(config);
        const { recordset: recordSet } = await sql.query`select * from users; `;

        console.log(recordSet);
    } catch (err) {
        console.log(err)
    } finally {
        await pool.close();
        console.log('Connection Closed');
    }
}

run();