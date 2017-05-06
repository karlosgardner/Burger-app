/**
 * Created by imac on 5/5/17.
 */
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host:'localhost',
        user:"root",
        password:'mpc@3000',
        database:"burger_db"
    });
}



connection.connect();

module.exports = connection;