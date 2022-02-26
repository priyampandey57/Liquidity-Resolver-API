var Web3 = require('web3');
const express = require('express');
const router = express.Router();
const config = require('./config.json');
const ethers = require("ethers");

var web3 = new Web3(new Web3.providers.HttpProvider('https://polygon-mainnet.g.alchemy.com/v2/YWi_k9aPJuQd0lqPkKnmY_KWsPRUvPfb'));
const ContractIns = new web3.eth.Contract(config.ContractABI, config.ContractAddr);
router.get('/liquidityResolver/', async (req, res) => {
    let protocol = req.query.protocol.split(',');
    let token = req.query.token.split(',');
    let result = await ContractIns.methods.getInfo(protocol, token).call()
    return res.send(result);
})

router.get('/', async (req, res) => {
    let result = "server running";
    return res.send(result);
})

module.exports = router;
