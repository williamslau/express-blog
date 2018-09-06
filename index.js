const express = require('express');
const mysql = require('mysql');
const app = express();
const user = require('./routers/user');
const categories = require('./routers/categories');
const articles = require('./routers/articles');

let bodyParser = require('body-parser');
app.listen(8080, function () {
    console.log('server started at 8080');
});
// 表单头   application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// json头  json/plain;charset=utf-8
app.use(bodyParser.json());

app.use('/api/user', user);
app.use('/api', categories);
app.use('/api', articles);


