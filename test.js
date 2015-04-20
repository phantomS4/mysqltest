var mysql = require('mysql');

var db=mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'lab466',
	database:'hello'
});

db.query("CREATE TABLE person("
	+"id INT(10) NOT NULL AUTO_INCREMENT ,"
	+"name char(32),primary key(id)"
	+")",function(err){
		if(err) throw err;
		console.log("create table!!");
	});

db.query("INSERT INTO person (name) values('qqy')",function(err){
	if(err) throw err;
	console.log("insert success!");
});

