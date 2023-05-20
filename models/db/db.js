const DBConfig = require('../../config/db.config')()
const Sequelize = require('sequelize');
const db = {}

let config = { 
        dialect: 'postgres', 
        host: DBConfig.HOST,
        pool: {
            max: 22,
            min: 1,
            acquire: 600000,
            idle: 100000,
        },
        createdAt: false,
        updatedAt: false,
        timestamp: false,
        dialectOptions: {
            connectTimeout: 3000000,
        }
}

const sequelize = new Sequelize(DBConfig.DB, DBConfig.DBUser, DBConfig.PASSWORD, config);
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
    throw 'Unable to connect to the database:', error
}

db.sequelize = sequelize;
module.exports = db