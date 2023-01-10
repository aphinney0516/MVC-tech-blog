const router = require('express').Router()
const {User} = require('../../models')
router.post('/login', (req,res)=>{
    User.findOne({
        where:{email:req.body.email}
    }).then(userData =>{
        // run check password function and validate user
        res.json(userData)
    }).catch(err =>res.json(err))
})
module.exports = router