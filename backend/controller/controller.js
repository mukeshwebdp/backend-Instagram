const path = require('path')
const registration = require('../model/registrationSchema');

// +++++++++++++++++++++ Data saved in Database. ++++++++++++++++++++++++
const signup = async(req,res)=>{
    try{
        const {name, username, email, password, bio} = req.body;

        const registrationData = new registration({
            name,
            username, 
            email, 
            password, 
            bio,
        })
        await registrationData.save();
        
        res.redirect("/success")

    }catch(e){
        console.log(e);
        res.redirect("/failed")
    }
}

// +++++++++++++++++++++ success pop ++++++++++++++++++++++

const success = (req,res)=>{
    res.render('success')
}
const failed = (req,res)=>{
    res.render('failed')
}

// +++++++++++++++++++++++++ show login page ++++++++++++++++++
const login = (req,res)=>{
    res.render('login')
}

//+++++++++++++++++++++ login data get and database find data.++++++++++++++

const loginP = async(req,res,next)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
        
        const userInfo = await registration.findOne({username: username}, '+password')
        if(userInfo.password == password){
// +++++++++++++++++++++++++++++++++Create new object++++++++++++++++++++++++
            const userInfoWithoutPassword = {...userInfo.toObject()}
            
        // ++++++++++++++++userInfoWithoutPassword for in delete password+++++
            delete userInfoWithoutPassword.password
            return res.render('profile',{userInfoWithoutPassword})
        }else{
            res.send('invalid Password and username')
        }
    }catch(e){
        res.status(400).send('Invalid username and password')
    }
}
module.exports = {signup, success, login, loginP,failed};

