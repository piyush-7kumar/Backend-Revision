const {data} = require("../currencies.json");

const getCurrencies = (req,res)=>{
    
    const {min_value}=req.query;
    if(min_value){
        const result = data.filter((item)=>Number(item.min_size) === Number(min_value))
        res.json(result)
    }else{
        res.json(data);
    }
}

const getCurrenciesWithSymbol = (req,res)=>{
    const {symbol} = req.params;
    const result = data.find((item)=>item.id.toLowerCase()===symbol.toLowerCase());
    if(result){
        res.status(200).json(result)
    }else{
        res.sendStatus(404)
    }
}

module.exports = { getCurrencies, getCurrenciesWithSymbol }