const express = require('express');
const mysql = require('../lib/user');
const router = express.Router();

router.post('/signup', (req, res) => {     // 注册
    // let query = '';
    // req.on('data', (chunk) => {
    //     query += chunk;
    // });
    // req.on('end',()=>{
    //     console.log(query);
    //     signup(query);
    // })
    mysql.findDataByName(req.body.username).then((data) => {
        console.log(data);
        if (data.length) {
            res.send('用户名重复');
        } else {
            console.log(req.body);
            mysql.signup(req.body).then((req) => {
                res.end('注册成功');
            })
        }
    }).catch((err) => {
        console.log(err);
    })
        ;
})
router.post('/signin', (req, res) => {     // 登陆
    res.send('登陆');
})
router.get('/signout', (req, res) => {      //退出登陆
    res.send('退出登陆');
})
module.exports = router;