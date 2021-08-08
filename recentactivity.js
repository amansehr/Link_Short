const route = require('express').Router()
const { app } = require('firebase-admin');
const fs = require('./databse.js')
const db= fs.firestore();

route.post('/',(req,res)=>{
    let id = req.body.id
    console.log(id)
    db.collection('users').get().then(snap =>{
        snap.forEach( doc => {
            if(doc.id === id){
                return res.status(200).json(doc.data())
            }
        })
    })
})

module.exports = route