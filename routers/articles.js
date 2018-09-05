const express = require('express');
const router = express.Router();

// 文章
router.get('/articles', (req, res) => {        // 获取文章
    res.send('获取文章');

})
router.post('/articles', (req, res) => {        // 新增文章

})
router.put('/articles', (req, res) => {        // 修改文章

})
router.delete('/articles', (req, res) => {        // 删除文章

})

router.get('/articles/pv', (req, res) => {      // 阅读一次

})
router.post('/articles/comment/:id', (req, res) => {        //  评论

})
module.exports = router;