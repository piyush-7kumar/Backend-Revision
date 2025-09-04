const {data} = require("../users.json");
const getQueryErrors = require("../validators/user.validators")

const getAllUsers = (req,res)=>{
    res.json(data)
}

const getUserByUuid =(req,res)=>{
    const {uuid} = req.params;
    const result = data.find((item)=>item.login.uuid===uuid);
    res.json(result);
}

const searchUsersByQuery = (req,res)=>{
    const {gender,age}=req.query;

    const error = getQueryErrors({age,gender})
    if(error){
        return res.status(422).json(error)
    }


    if(age&&gender){
        const results = data.filter((item)=>item.gender===gender && Number(item.dob.age)>=Number(age))
        res.json(results)
    }else if(gender){
        const results = data.filter((item)=>item.gender===gender)
        res.json(results)
    }else if(age){
        const results = data.filter((item)=> Number(item.dob.age)>=Number(age))
        res.json(results)
    }else{
        res.sendStatus(404)
    }


    
}

module.exports = {getAllUsers,getUserByUuid,searchUsersByQuery}