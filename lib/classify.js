const { query } = require('./pool');

let findClassify = () => {
    let sql = `
        select * from classify
    `;
    return query(sql);
};
let findDataByName = (name, link) => {
    let sql = `
        select * from classify where name = '${name}' or link = '${link}'
    `;
    return query(sql);
};
let addedClassify = (name, link) => {
    let sql = `
        insert into classify(name,link) value(${name},${link})
    `;
    return query(sql);
};
let updataClassify = (name, link, id) => {
    let sql = `
        update classify set name = '${name}',link = '${link}' where cid = '${id}'
    `;
    return query(sql);
};
let deleteClassify = (id) => {
    let sql = `
        delete from classify where cid = '${id}'
    `;
    return query(sql);
};
module.exports = {
    findClassify,
    findDataByName,
    addedClassify,
    updataClassify,
    deleteClassify
};