const express = require('express');
const mysql = require('../lib/labels');
const router = express.Router();

// 标签
router.get('/labels', (req, res) => {        // 获取标签
    mysql.findLabel().then(data => {
        res.send(data);
    }).catch(err => {
        res.send('获取失败');
    });
});
router.post('/labels', (req, res) => {        // 新增标签
    let { name } = req.body;
    mysql.findDataByName(name).then(data => {
        if (!data.length) {
            mysql.addedLabel(name).then(succ => {
                res.send('添加成功');
            })
        } else {
            res.send('分类已存在');
        }
    }).catch(err => {
        res.send('出现未知错误');
    })
});
router.put('/labels', (req, res) => {        // 修改标签
    let { name, id } = req.body;
    mysql.updataLabel(name, id).then(succ => {
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
router.delete('/labels', (req, res) => {        // 删除标签
    let { id } = req.body;
    mysql.deleteLabel(id).then(succ => {
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