const { Sequelize, Model, DataTypes } = require("sequelize");

const connect = () => {

    const hostName = process.env.host;
    const userName = process.env.user;
    const password = process.env.password;
    const database = process.env.db;
    const dialect = process.env.dialect;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.books = require("../models/book")(sequelize, DataTypes, Model);
    db.users = require("../models/user")(sequelize, DataTypes, Model);
    return db;

}

module.exports = {
    connect
}