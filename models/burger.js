var orm = require("../config/orm.js");

// // Find all the pets ordering by the lowest price to the highest price.

var eaten = {
  selectAll: function (cb) {
    orm.selectAll("heroku_190559482844405.burgers", function(res){

      cb(res);
    });
},

  insertOne: function(bun, cb) {
    orm.insertOne("heroku_190559482844405.burgers", "burger_name", bun, "id", id, function(res){

      cb(res);
      });
},
   updateOne: function(id, cb) {
    orm.updateOne("heroku_190559482844405.burgers", "devoured", true, "id", id, function(res){

      cb(res);
    });
}
}



module.exports = eaten;


// var orm = {

// selectAll: function(tableName, cb) {
//     var queryString = "SELECT * FROM ??";
//     connection.query(queryString,[tableName],function(err, result) {
//       cb(result);
//     });}
// };

// var eaten = {

// selectAll: function(cb) {
//     connection.query("SELECT * FROM burgers_db.burgers", function(err, data) {
//     if (err) {
//       throw err;
//     }
//     cb(data);
// });
//   },

// insertOne: function(bun, cb) {
//   connection.query("INSERT INTO burgers_db.burgers (burger_name) VALUES (?)",[bun], function (err,data){
// if (err) {
//       throw err;
//     }
//     cb(data);
// });
//   },

// updateOne: function(id, cb) {
//   connection.query("UPDATE burgers_db.burgers SET devoured = true WHERE id = ?",[id], function (err,data){
// if (err) {
//       throw err;
//     }
//     cb(data);
// });
//   }


// };

