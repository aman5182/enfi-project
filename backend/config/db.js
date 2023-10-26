var sqlDb = require("mssql");
var settings = require("./settings");

exports.executeSql = function (sql, callback) {

    const pool = new sqlDb.ConnectionPool(settings.dbConfig);

    pool.connect().then(function () {
        console.log('Connected to the database server');
        var req = new sqlDb.Request(pool);
        req.query(sql).then(function (resultSet) {
            pool.close();
            console.log('Query executed successfully');
            // callback(resultSet);
        }).catch(function (error) {
            console.error('Error executing query:', error);
            console.log(error);
            // callback(null, error);
        });
    }).catch(function (error) {
        console.error('Error connecting to the database server:', error);
        console.log(error);
        // callback(null, error);
    });
};