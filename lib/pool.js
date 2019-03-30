const mysql = require('mysql');
const config = require('../config/default');

const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    database: config.database.DATABASE
});

let query = (sql, values = []) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (er, rows) => {
                    if (er) {
                        reject(er);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    });
};

module.exports = {
    query
};