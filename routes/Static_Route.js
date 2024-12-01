const express=require('express');
const { handlestatic } = require('../controllers/staticroute');
// const { shorturlpost, shorturlget } = require('../controllers/shorturl');

const router=express.Router();

router.get('/',handlestatic);


module.exports=router;