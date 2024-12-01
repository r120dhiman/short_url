const shorturl=require('../models/shorturl')
async function handlestatic(req, res){

    if(!req.user)return res.redirect('/login')
const allshorturl= await shorturl.find({createddBy:req.user._id})

    return res.render('home', {allshorturl})
}

module.exports={handlestatic}