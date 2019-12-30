var express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.render('login')
})


router.route('/process/login').post((req, res)=>{
    console.log("/process/login 처리함")
    
    var paramId = req.body.id || req.query.id
    var paramPwn = req.body.pwn || req.query.pwn
    
    res.writeHead('200', {'Content-Type':'text/html; charset=utf8'})
    res.write('<h1>Responds</h1>');
    res.write('<div><p> pram Id :'+ paramId+'</p></div>')
    res.write('<div><p> pram PassWord :'+ paramPwn+'</p></div>')
    res.end();
})

module.exports = router;