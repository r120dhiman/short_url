const express=require('express');
const { handlesignup } = require('../controllers/signup_login');

const router=express.Router();

router.post("/", handlesignup)
router.get("/", (req, res) => {
  return res.render('signup')
}
)

module.exports=router