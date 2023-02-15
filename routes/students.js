var express = require('express');
var router = express.Router();
const {mongodb,dbName,dbUrl,MongoClient}=require('../config/dbConfig')


router.get('/',async(req,res)=>{
  const client=new MongoClient(dbUrl)
  client.connect()
    try {
      let db=await client.db(dbName)
      let student=await db.collection('student').find().toArray()
      res.send({
        message:"data received ",
        student
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
        let student=await db.collection('student').findOne({_id:new mongodb.ObjectId(req.params.id)})
        res.send({
          message:"data received ",
          student
        })
      } catch (error) {
        console.log(error)
        res.send({message:"internal server error",error})
      }
      finally{
  client.close()
      }
})
router.put('/',async(req,res)=>{
    const client=new MongoClient(dbUrl)
    client.connect()
      try {
        let db=await client.db(dbName)
        let student=await db.collection('student').updateMany({mentor:{$exists:false}},{$set:{mentor:"m1"}})
        res.send({
          message:"data edited successfully ",
          student
        })
      } catch (error) {
        console.log(error)
        res.send({message:"internal server error",error})
      }
      finally{
  client.close()
      }
    
  })
  router.put('/:id',async(req,res)=>{
    const client=new MongoClient(dbUrl)
    client.connect()
      try {
        let db=await client.db(dbName)
        let student=await db.collection('student').updateOne({student:"s1"},{$set:{mentor:"m2"}})
        res.send({
          message:"data edited successfully ",
          student
        })
      } catch (error) {
        console.log(error)
        res.send({message:"internal server error",error})
      }
      finally{
  client.close()
      }
    
  })




  
router.post('/',async(req,res)=>{
  const client=new MongoClient(dbUrl)
  client.connect()
    try {
      let db=await client.db(dbName)
      let student=await db.collection('student').insertOne(req.body)
      res.send({
        message:"data saved successfully ",
        student
      })
    } catch (error) {
      console.log(error)
      res.send({message:"internal server error",error})
    }
    finally{
client.close()
    }
  
})


// router.delete('/:id',(req,res)=>{
//   if(req.params.id<users.length){
  
//     users.splice(req.params.id,1)
//     res.send({
//       statusCode:200,
//       message:"user deleted succseefully"
//     })
//   }else{
// res.send({
//   statusCode:400,
//   message:"id deleted"
// })
//   }
  
// })
module.exports = router;
