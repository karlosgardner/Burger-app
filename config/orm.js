/**
 * Created by imac on 5/5/17.
 */
var connection = require("./connection");


var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if(err) throw err;
            cb(data);
        });

    },
    insertOne: function (name, devoured, date) {
        connection.query("INSERT INTO burgers(burger_name, devoured, date) VALUES(?, ?, ?)", [name, devoured, date], function (err, data) {
            if(err) throw err;
            console.log("Data has been posted!!");
        });
    },
    updateOne: function (id) {
        connection.query("UPDATE burgers SET devoured= false WHERE ID = ?", [id], function (err, data) {
            if(err) throw err;
            console.log("Data has successfully been updated");

        });
    }
};


module.exports = orm;