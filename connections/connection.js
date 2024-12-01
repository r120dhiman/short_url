const mongodb=require('mongoose');


async function connectdb(url){

    return mongodb.connect(url);
}

module.exports={connectdb}
