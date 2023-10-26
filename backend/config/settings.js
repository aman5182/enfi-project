exports.dbConfig = {
    user: "enfipay",
    password: "Finance1q2w3e@",
    //server: "103.118.16.129",
    server: "85.25.185.85",
    port:5757,
    database: "EnfiPay",
    //user: "HatzOff",
    //password: "123",
    //server: "LAPTOP-8ME6P59I\\MSSQLSERVER01",
    //database: "HatzOff",
    option: { encrypt: true },
    enableArithAbort: true,
    multipleStatements: true,
    dialect: "mssql",   
    dialectOptions: {
        "instanceName": "SQLEXPRESS"
    }
};  
