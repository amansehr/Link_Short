const route = require('express').Router()
const fs = require('./databse.js')
const db = fs.firestore()

route.get('/',(req,res)=>{
    res.send('Working')
})
route.get('/:code',(req,res) =>{
    const v = req.params.code
    const base = `https://linkshortapi.herokuapp.com/` + v
    db.collection('allurls').get().then((snapshot) =>{
        snapshot.docs.forEach((doc) =>{
            var d = doc.data()
            if(base === d[v].shrt)
                return res.status(200).redirect(d[v].longurl)
        })
    }).catch(()=>{
        return res.status(404).send('Not found')
    })

})

module.exports = route