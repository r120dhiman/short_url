const express=require('express');
const router=express.Router();
const {handlerestrictedfile}=require('../controllers/restrictedfile')


router.get('/', (req,res) => {
  return res.render('restrictedfile')
}
);

module.exports=router;