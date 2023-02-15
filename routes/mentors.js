var express = require('express');
var router = express.Router();
const {mongodb,dbName,dbUrl,MongoClient}=require('../config/dbConfig')


router.get('/',async(req,res)=>{
  const client=new MongoClient(dbUrl)
  client.connect()
    try {
      let db=await client.db(dbName)
      let mentor=await db.collection('mentor').find().toArray()
      res.send({
        message:"data received ",
        mentor
      })
    } catch (error) {
      console.log(error)
      res.send({message:"internal server error",error})
    }
    finally{
client.close()
    }
  
})

router.get('/:id',async(req,res)=>{
  const client=new MongoClient(dbUrl)
  client.connect()
    try {
      let db=await client.db(dbName)
      let mentor=await db.collection('mentor').find({_id:new mongodb.ObjectId("63ecee809ddf1c11020842fc")}).toArray()
                                                    
      res.send({
        message:"data received ",
        mentor
      })
    } catch (error) {
      console.log(error)
      res.send({message:"internal server error",error})
    }
    finally{
client.close()
    }
})
router.put('/:id',(req,res)=>{
  if(req.params.id<users.length){
  
    users.splice(req.params.id,1,req.body)
    res.send({
      statusCode:200,
      message:"user upated succseefully"
    })
  }else{
res.send({
  statusCode:400,
  message:"id not found"
})
  }
  
})

router.post('/',async(req,res)=>{
  const client=new MongoClient(dbUrl)
  client.connect()
    try {
      let db=await client.db(dbName)
      let =await db.collection('mentor').insertOne(req.body)
      res.send({
        message:"data saved successfully ",
        mentor
      })
    } catch (error) {
      console.log(error)
      res.send({message:"internal server error",error})
    }
    finally{
client.close()
    }
  
})
module.exports = router;
