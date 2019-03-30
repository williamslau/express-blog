const express = require('express');
const mysql = require('../lib/classify');
const router = express.Router();

// 分类
router.get('/classify', (req, res) => {        // 获取分类
    mysql.findClassify().then(data => {
        res.send(data);
    }).catch(err => {
        res.send('获取失败');
    });
});
router.post('/classify', (req, res) => {        // 新增分类
    let { name, link } = req.body;
    mysql.findDataByName(name, link).then(data => {
        if (!data.length) {
            mysql.addedClassify(name, link).then(succ => {
                res.send('添加成功');
            })
        } else {
            res.send('分类已存在');
        }
    }).catch(err => {
        res.send('出现未知错误');
    })
});
router.put('/classify', (req, res) => {        // 修改分类
    let { name, link, id } = req.body;
    mysql.updataClassify(name, link, id).then(succ => {
        if (!succ.affectedRows) {
            res.send('未找到要修改的id');
        } else if (!succ.changedRows) {
            res.send('不需要修改');
        } else {
            res.send('修改成功');
        }
    }).catch(err => {
        res.send('修改失败');
    })
});
router.delete('/classify', (req, res) => {        // 删除分类
    let { id } = req.body;
    mysql.deleteClassify(id).then(succ => {
        if (succ.affectedRows) {
            res.send('删除成功');
        } else {
            res.send('未找到要删除的id');
        }
    }).catch(err => {
        res.send('删除失败');
    })
});

module.exports = router;