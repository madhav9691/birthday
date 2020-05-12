 var express = require('express');
 var router = express.Router();
 var monk =require('monk');
 var moment=require('moment');
 var database=monk('localhost:27017/birthday')
 var colec=database.get('birthdays')

 /* GET home page. */
 router.get('/', function(req, res) {
 	res.render('index');
 });

 router.post('/postbirthday',function(req,res){
 	console.log(req.body);
 	var Data={
 		Name:req.body.name,
 		Email:req.body.email,
 		DOB:moment(req.body.date).format('DD-MM-YYYY'),
 		Mobile:req.body.number
 	}
 	var datat=moment().format('DD-MM-YYYY');
 	console.log(datat);
 	colec.insert(Data,function(err,docs) {
 		if(err){
 			console.log(err);
 		}
 		else{
 			console.log(docs);
 			res.send(docs);
 		}
 	})
 	
 })
 /*retrive data*/
 router.get('/getdetailes',function(req,res){

 	// colec.find({}.sort({'date':-1}),function(err,docs){
 		colec.find({},function(err,docs){

 		if(err){
 			console.log("err");

 		}
 		else{
 			console.log("docs");
 			res.send(docs);
 		}
 	})
 })
 module.exports = router;