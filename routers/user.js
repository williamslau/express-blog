const express = require('express');
const session = require('express-session');
const mysql = require('../lib/user');
const router = express.Router();
// express.use(session(
    
// ));
router.post('/signup', (req, res) => {     // 注册
    mysql.findDataByName(req.body.username).then(data => {
        if (data.length) {
            res.send('用户名重复');
        } else {
            mysql.signup(req.body).then((req) => {
                res.send('注册成功');
            })
        }
    }).catch(err => {
        res.send('注册失败');
    });
});
router.post('/signin', (req, res) => {     // 登陆
    let { username, password } = req.body;
    mysql.findDataByName(username).then(data => {
        let result = data[0];
        if (result) {
            if (result.username == username && result.password == password) {
                res.send({ success: true, message: '登陆成功' });
            } else {
                res.send({ success: false, message: '用户名或密码错误' });
            }
        } else {
            res.send({ success: false, message: '用户不存在' });
        }
    }).catch(err => {
        res.send({ success: false, message: '登陆失败' });
    })
});
router.get('/signout', (req, res) => {      //退出登陆
    res.send('退出登陆');
});
module.exports = router;