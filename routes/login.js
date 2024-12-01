const express=require('express');
const { handlelogin } = require('../controllers/signup_login');

const router=express.Router();

router.post("/", handlelogin)
router.get("/", (req, res) => {
  return res.render('login')
}
)
module.exports=router