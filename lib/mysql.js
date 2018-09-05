// const mysql = require('mysql');
// const config = require('../config/default');

// const pool = mysql.createPool({
//     host: config.database.HOST,
//     user: config.database.USERNAME,
//     database: config.database.DATABASE
// });

// let query = (sql, values = []) => {
//     return new Promise((resolve, reject) => {
//         pool.getConnection((err, connection) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 connection.query(sql, values, (er, rows) => {
//                     if (err) {
//                         reject(err);
//                     } else {
//                         resolve(rows);
//                     }
//                     connection.release();
//                 });
//             }
//         });
//     });
// }
// let query = function (sql, values) {
//     pool.getConnection(function (err, connection) {
//         // 使用连接
//         connection.query(sql, values, function (err, rows) {
//             // 使用连接执行查询
//             console.log(rows)
//             connection.release();
//             //连接不再使用，返回到连接池
//         });
//     });
// }
const {query} =require('./pool');
let user = `
    create table if not exists user(
        uid INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        PRIMARY KEY ( uid )
    );
`;
// 分类表
let classify = `
    create table if not exists classify(
        cid INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        link VARCHAR(100) NOT NULL,
        PRIMARY KEY ( cid )
    );
`;
// 标签表
let label = `
    create table if not exists label(
        lid INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        PRIMARY KEY ( lid )
    );
`;
// 文章表
let article=`
    create table if not exists article(
        aid INT NOT NULL AUTO_INCREMENT,
        lid INT NOT NULL,
        cid INT NOT NULL,
        title VARCHAR(100) NOT NULL,
        content TEXT(0) NOT NULL,
        createAt VARCHAR(100) NOT NULL,
        pv INT NOT NULL DEFAULT 0,
        star INT NOT NULL DEFAULT 0,
        PRIMARY KEY ( aid )
    );
`;
// 关联表
let article_join=`
    create table if not exists article_join(
        jid INT NOT NULL AUTO_INCREMENT,
        cid INT NOT NULL,
        lid INT NOT NULL,
        aid INT NOT NULL,
        PRIMARY KEY ( jid )
    )
`;
let discuss=`
    create table if not exists discuss(
        did INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(24) NOT NULL,
        time VARCHAR(100) NOT NULL,
        content TEXT(0) NOT NULL,
        PRIMARY KEY ( did )
    );
`;
// 建表
query(user);
query(classify);
query(label);
query(article);
query(article_join);
query(discuss);



