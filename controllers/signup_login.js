const user=require('../models/user')
const {v4:uuidv4}=require('uuid');
const { setuser } = require('../service/auth');
async function handlesignup(req, res){
    const {name, email, password}=req.body;
    await user.create({
        name, email, password
    })
    return res.render("home")
    

}

async function handlelogin(req, res) {
  const { email, password } = req.body;
  const result = await user.findOne({ email, password });
  if (!result) {
    console.log("I am here")
    return res.render('login', {
      error: "Invalid username or password",
    });
  }
  // const session_id=uuidv4();
  const token=setuser(result);
  res.cookie('uid', token)
  return res.redirect('/');
}


module.exports={handlesignup, handlelogin}