const mongodb=require('mongodb')
const dbName='mentor-student'
const dbUrl=`mongodb+srv://shama:shama@cluster0.kv1f7eb.mongodb.net/${dbName}`
const MongoClient=mongodb.MongoClient
module.exports={mongodb,dbName,dbUrl,MongoClient}