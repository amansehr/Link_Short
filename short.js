const route = require('express').Router()
const {nanoid} = require('nanoid')
const validurl = require('valid-url')
const fs = require('./databse.js')

const db = fs.firestore();
db.settings({timestampsInsnapshots : true })

const baseurl = `https://linkshortapi.herokuapp.com/`


route.get('/',(req,res)=>{
    res.status(200).send('Working')
})

route.post('/',(req,res)=>{
    
    const userid = req.body.id
    const url = req.body.url

    if(!validurl.isUri(url)){
        return res.status(401).send('Wrong Url')
    }
    else{
        var no = nanoid(7)
        var shrturl = baseurl + no
        db.collection('users').doc(userid).set({ 
            [no] : {'shrt' : shrturl,'longurl' : url}},{merge : true});
        db.collection('allurls').doc('List').set({
            [no] : {'shrt' : shrturl,'longurl' : url}},{merge : true});
        return res.status(200).send(shrturl)
    }
})
module.exports = route