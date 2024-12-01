const { getuser } = require("../service/auth");

async function restricttologgedinuser(req, res, next){
    const userUID=req.cookies.uid;
    if(!userUID) return res.redirect('/login');
    const user=getuser(userUID);
    if(!user) return res.redirect('/login')
        req.user=user;
    next();
}

async function checkAuth(req, res, next){
    const userUID=req.cookies.uid;
    const user=getuser(userUID);
        req.user=user;
    next();
}

module.exports={
    restricttologgedinuser,checkAuth
}