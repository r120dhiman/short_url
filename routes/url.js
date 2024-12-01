const express=require('express');
const { shorturlpost, shorturlget } = require('../controllers/shorturl');
const router=express.Router();

router.post('/', shorturlpost)
router.get('/:id', shorturlget)

module.exports=router;