const mysql = require('mysql')

module.exports = ({host, port, user, password, database}) => {
    const con = mysql.createConnection({
        host,
        port,
        user,
        password,
        database,
    });

    con.connect(function(err) {
        if (err) throw err;
    });

    return {
        con,
    };
};