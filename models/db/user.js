const { Sequelize, DataTypes} = require("sequelize");
const { sequelize } = require("./db");

const User = sequelize.define("user", {
    waddress: {
        type: DataTypes.STRING,
    },

    claimed: {
        type: DataTypes.STRING,
    },

    signature: {
        type: DataTypes.STRING,
    },

    time: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
});

User.sync().then(() => {
    console.log("User Model synced");
});

module.exports = User