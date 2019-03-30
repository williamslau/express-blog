const { query } = require('./pool');

let findDataByName = (name) => {
    let sql = `
        select * from label where name = '${name}'
    `;
    return query(sql);
};
let findLabel = () => {
    let sql = `
        select * from label
    `;
    return query(sql);
};
let addedLabel = (value) => {
    let sql = `
        insert into label(name) value(${value})
    `;
    return query(sql);
};
let updataLabel = (value, id) => {
    let sql = `
        update label set name = '${value}' where lid = '${id}'
    `;
    return query(sql);
};
let deleteLabel = (id) => {
    let sql = `
        delete from label where lid = '${id}'
    `;
    return query(sql);
};

module.exports = {
    findDataByName,
    findLabel,
    addedLabel,
    updataLabel,
    deleteLabel
};