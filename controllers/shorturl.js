const { nanoid } = require("nanoid");
const shorturl = require("../models/shorturl");

async function shorturlpost(req, res){
    const shortid=nanoid(8);
    const body=req.body;
    if(!body.redirecturl){
        return res.redirect('/');
    }
    await shorturl.create({
      shortid:shortid,
        redirecturl:body.redirecturl,
        viewhistory:[],
        createddBy:req.user._id
    })
    return res.render('home', { id: shortid });
}

async function shorturlget(req, res){
    const shortid=req.params.id;
    const user=await shorturl.findOneAndUpdate({shortid},
        {$push:{
            viewhistory:{timestamp:Date.now()},
          }}
    )
    return res.redirect(user.redirecturl)
}

module.exports={shorturlpost, shorturlget}