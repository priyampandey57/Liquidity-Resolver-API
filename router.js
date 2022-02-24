const Web3 = require('web3');
const express = require('express');
const router = express.Router();
const config = require('./config.json');

//const router = new Router();

const web3 = new Web3(process.env.Alchemy_url);

const ContractIns =  new web3.eth.Contract(config.ContractABI, config.ContractAddr);
    
router.get('/liquidityResolver/', async (req, res) => {
    let protocol = req.query.protocol;
    let token = req.query.token;
    
    let result = await ContractIns
    .methods
    .getInfo([protocol], [token])
    .call()
    return res.send(result);

    })

    router.get('/', async (req, res) => {
let result = "server running";
return res.send(result);
    })

module.exports = router;
