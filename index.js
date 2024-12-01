const express=require ("express");
const app=express();
const port=3001;
const staticrouter=require('./routes/Static_Route')
const cookieparser=require('cookie-parser')
const loginrouter=require('./routes/login')
const path=require("path")
const urlrouter=require('./routes/url')
const {restricttologgedinuser, checkAuth}=require('./middleware/auth')
const signuprouter=require('./routes/signup')
const {connectdb}=require('./connections/connection')

//Middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser())



app.set('view engine', "ejs");
app.set("views",path.resolve('./view') )
connectdb("mongodb+srv://120dhiman:Rohitgreat@shorter.kkqfu.mongodb.net/auth")
// connectdb("mongodb://localhost:27017/auth")
.then(() => {
  console.log('Database conenctoin successful');
  
}
).catch((error) => {
  console.log('There is some in the connection of the db please check the console\n', error);
  
}
)
app.use('/',checkAuth, staticrouter)
app.use('/url',restricttologgedinuser,urlrouter)
app.use('/login', loginrouter)
app.use("/signup/",signuprouter)
app.listen(port, () => {
  console.log("App is listening on https://localhost:",port);
  
}
)