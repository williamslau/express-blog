const express = require('express');
const mysql = require('../lib/articles');
const router = express.Router();

// 文章列表
router.get('/articleList', (req, res) => {        // 获取文章列表
    mysql.findArticleList().then(data => {
        res.send(data);
    }).catch(err => {
        res.send('获取失败');
    });
});

router.get('/article', (req, res) => {        // 获取文章
    let { id } = req.body;
    mysql.findArticle(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send('获取失败');
    });
});

router.post('/article', (req, res) => {        // 新增文章
    let { cid, label, title, content, createAt } = req.body;
    mysql.addedArticle(cid, title, content, createAt).then(data => {
        mysql.addedArticleLabel(data.insertId, label).then(data => {
            res.send('添加成功');
        })
    }).catch(err => {
        res.send('添加失败');
    });
});

router.put('/article', (req, res) => {        // 修改文章
    let { aid, cid, label, title, content, createAt } = req.body;
    mysql.updataArticle(aid, cid, title, content, createAt).then(data => {
        mysql.deleteArticleLabel(aid).then(del => {
            mysql.addedArticleLabel(aid, label).then(() => {
                res.send('修改成功');
            })
        });
    }).catch(err => {
        res.send('修改失败');
    });
});

router.delete('/article', (req, res) => {        // 删除文章
    let { aid } = req.body;
    mysql.deleteArticle(aid).then(data => {
        console.log(data);
        mysql.deleteArticleLabel(aid).then(del => {
            res.send('删除成功');
        });
    }).catch(err => {
        res.send('删除失败');
    });
});

router.get('/article/pv', (req, res) => {      // 阅读一次
    let { aid } = req.body;
    mysql.articlePv(aid).then(data => {
        res.send('增加pv');
    })
});

router.get('/article/star', (req, res) => {      // 阅读一次
    let { aid } = req.body;
    mysql.articleStar(aid).then(data => {
        res.send('增加star');
    })
});

router.post('/article/comment', (req, res) => {        //  评论
    // let id=req.params.id;
    let { aid, name, time, content } = req.body;
    mysql.comment(aid, name, time, content).then(data=>{
        res.send('评论成功');
    });
});

module.exports = router;