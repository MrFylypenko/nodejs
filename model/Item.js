/**
 * Created by vano on 26.09.16.
 */


module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define('Item', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        description: DataTypes.STRING,
        qty: DataTypes.INTEGER
    });
    return Item;
};