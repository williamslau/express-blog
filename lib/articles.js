const { query } = require('./pool');
let findArticleList = (cid=null,pageNum=0,pageSize=5) => {
    console.log(cid);
    let sql = `
        select a.aid,a.cid,a.title,a.createAt,
        a.pv,a.star,c.name as classify,
        group_concat(l.name) as label from article as a 
        inner join classify as c on c.cid = a.cid 
        inner join article_join as j on j.aid = a.aid 
        inner join label as l on l.lid = j.lid
        where if(isnull(${cid}),0=0,a.cid = ${cid})
        group by a.aid
        order by a.aid desc
        limit ${pageNum},${pageSize}
    `;
    return query(sql);
};
let findArticle = (id) => {
    let sql = `
        select a.*,group_concat(l.name) as label from article as a 
        inner join classify as c on c.cid = a.cid 
        inner join article_join as j on j.aid = a.aid 
        inner join label as l on l.lid = j.lid
        where a.aid = '${id}'
        group by a.aid
    `;
    return query(sql);
};
let findDataByName = (name, link) => {
    let sql = `
        select * from classify where name = '${name}' or link = '${link}'
    `;
    return query(sql);
};
let addedArticle = (cid, title, content, createAt) => {
    let sql = `
        insert into article(cid,title,content,createAt) 
        value(${cid},'${title}','${content}','${createAt}')
    `;
    return query(sql);
};
let addedArticleLabel = (aid, label) => {
    label.indexOf(',') ? label = label.split(',') : label = [...label];
    let addStr = label.map(item => (`(${aid},${item})`));
    let sql = `
        insert into article_join(aid,lid) value ${addStr.join(',')} 
    `;
    return query(sql);
};
let updataArticle = (aid, cid, title, content, createAt) => {
    let sql = `
        update article set cid = '${cid}',title = '${title}',content = '${content}',createAt = '${createAt}'
        where aid = '${aid}'
    `;
    return query(sql);
};
let deleteArticle = (id) => {
    let sql = `
        delete from article where aid = '${id}'
    `;
    return query(sql);
};
let deleteArticleLabel = (id) => {
    let sql = `
        delete from article_join where aid = '${id}'
    `;
    return query(sql);
};
let articlePv = (id) => {
    let sql=`
        update article set pv = pv+1 where aid ='${id}'
    `;
    return query(sql);
};
let articleStar = (id) => {
    let sql=`
        update article set star = star+1 where aid ='${id}'
    `;
    return query(sql);
};
let comment = (aid,name,time,content) => {
    let sql = `
        insert into discuss(aid,name,time,content) 
        value('${aid}','${name}','${time}','${content}')
    `;
    return query(sql);
};
module.exports = {
    findArticleList,
    findArticle,
    findDataByName,
    addedArticle,
    updataArticle,
    deleteArticle,
    addedArticleLabel,
    deleteArticleLabel,
    articlePv,
    articleStar,
    comment
};