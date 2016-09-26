/**
 * Created by vano on 26.09.16.
 */

var sequelize = require('./sequelize');


//Including dependency
var Sequelize = require("sequelize");



//Create Item Table Structure
var Item = sequelize.define('Item', {
    id: {
     type: Sequelize.INTEGER,
     autoIncrement: true,
     primaryKey: true
     },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    qty: Sequelize.INTEGER
});

//Applying Item Table to database
sequelize.sync({force: false}).then(function (err) {
    if (err) {
        console.log('An error occur while creating table');
    } else {
        console.log('Item table created successfully');
    }
});


/*
 //There is two way of inserting data into database
 //One way: Forming object from modal
 var item1 = Item.create({
 //id: 1,
 name: 'Laptop',
 description: 'Acer 2340TL',
 qty: 23
 });
 //Inserting Data into database
 item1.then(function (err) {
 if (err) {
 console.log('Error in Inserting Record');
 } else {
 console.log('Data successfully inserted');
 }
 });

 */



module.exports = Item;