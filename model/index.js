/**
 * Created by vano on 26.09.16.
 */
const fs = require('fs');
const path = require('path');

var {Sequelize, sequelize} = require('../sequelize');

var db = {sequelize, Sequelize};

fs.readdirSync(__dirname).forEach(file => {
    if (file != 'index.js') {
        let model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    }
});

Object.keys(db).forEach(modelName => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});


module.exports = db;