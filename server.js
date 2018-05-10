const express= require('express');
const MongoClient = require('mongodb').MongoClient;
const URL= 'mongodb://localhost:27017';
const app= express();
const port =5000;
const customers=[];
customers.splice(0,customers.length)
app.get('/api/customers',(req,res)=>{ 
    MongoClient.connect(URL,{native_parser:true},function(err,client){
        if(err) return
        const db= client.db('mydatabase');
        // db.collection('customers').insertOne({name:"juan1",lastname:"juanes1"});  
        // client.close();  
        db.collection('customers').find({}).toArray(function(err,docs){
            for (var i = 0; i < docs.length; i++) {
                 customers[i] = {"id":docs[i]._id,"name":docs[i].name,"lastname":docs[i].lastname,"tipo":docs[i].tipo};
            }  
            client.close();      
        });
    });   
    res.json(customers);
});
app.get('/api/customersType/:id',(req,res)=>{      
    MongoClient.connect(URL,{native_parser:true},function(err,client){
        if(err) return
        const db= client.db('mydatabase');
        db.collection('customers').find({tipo:parseInt(req.params.id)}).toArray(function(err,docs){
            customers.splice(0,customers.length)
            console.log(docs.length);             
            for (var i = 0; i < docs.length; i++) {
                 customers[i] = {"id":docs[i]._id,"name":docs[i].name,"lastname":docs[i].lastname,"tipo":docs[i].tipo};
            }  
            client.close();   
            console.log(customers);                             
        });
    }); 
    console.log(customers); 
    res.json(customers);
});

app.listen(port,()=>{console.log("server running at port 5000");});