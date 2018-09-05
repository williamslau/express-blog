const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {     // 注册
    res.send('注册');
})
router.post('/signin', (req, res) => {     // 登陆
    res.send('登陆');
})
router.get('/signout', (req, res) => {      //退出登陆
    res.send('退出登陆');
})
module.exports = router;