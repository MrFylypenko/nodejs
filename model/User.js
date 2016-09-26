/**
 * Created by vano on 26.09.16.
 */

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
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
    }, {
        classMethods: {
            associate: function ({Account}) {
                User.belongsTo(Account, {
                    as:'account',
                    foreignKey:{
                        name:'accountId',
                        allowNull:true
                    }
                });
            }
        }
    });

    return User;
};