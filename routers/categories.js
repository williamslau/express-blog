const express = require('express');
const router = express.Router();

// 分类
router.get('/categories', (req, res) => {        // 获取分类
    res.send('aaa');
})
router.post('/categories', (req, res) => {        // 新增分类

})
router.put('/categories', (req, res) => {        // 修改分类

})
router.delete('/categories', (req, res) => {        // 删除分类

})

module.exports = router;