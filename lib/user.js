const { query } = require('./pool');
let findDataByName = (name) => {
    let sql = `
        select * from user where username = '${name}'
    `;
    return query(sql);
};
let signup = (value) => {
    let sql = `
        insert into user(username,password) value(${value.username},${value.password})
    `;
    return query(sql);
};

module.exports = {
    findDataByName,
    signup,
};