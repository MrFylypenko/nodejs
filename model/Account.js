/**
 * Created by vano on 26.09.16.
 */


module.exports = function (sequelize, DataTypes) {
    var Account = sequelize.define('Account', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            status: DataTypes.STRING,
            something: DataTypes.STRING
        }, {
            classMethods: {
                associate: function ({User}) {
                    Account.hasMany(User, {
                        as: 'users',
                        foreignKey: {
                            name: 'accountId',
                            allowNull: true
                        }
                    });
                }
            }
        }
    );

    return Account;
};

//var sequelize = require('../sequelize');
//
////Including dependency
//var Sequelize = require("sequelize");
//
//
////Create Item Table Structure
//
//
//
////Applying Item Table to database
//sequelize.sync({force: false}).then(function (err) {
//    /*if (err) {
//     console.log('An error occur while creating table');
//     } else {
//     console.log('Item table created successfully');
//     }*/
//});
//
//
//module.exports = Account;