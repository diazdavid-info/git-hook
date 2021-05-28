module.exports = (connection) => {
    const save = (event) => {
        const sql = "INSERT INTO event (type, data) VALUES ?";
        const values = [[event.getType(), JSON.stringify(event.getData())]];
        connection.query(sql, [values], function (err) {
            if (err) throw err;
        });
    };

    return {
        save,
    };
};