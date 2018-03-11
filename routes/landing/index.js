const express = require('express');
const router = express.Router();

router.all('/*', (req, res, next)=>{
    req.app.locals.layout = 'landing';
    next();
});

router.get('/', (req, res)=>{
    res.render('landing/index');        
});

module.exports = router;