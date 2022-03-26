const Web3 = require('web3')
const ethUtils = require('ethereumjs-util')
const moment = require('moment')
moment().format()

//const CONTRACT_ABI = require('./data/contract_abi.json') 

let web3 = new Web3("https://api.avax.network/ext/bc/C/rpc")
// const contract = new web3.eth.Contract(
//     CONTRACT_ABI,
//     '0x82a85407bd612f52577909f4a58bfc6873f14da8', 
// )

const shortenAddress = (address) => address.substr(0, 5) + "..." + address.substr(-3)
const MAX_GAS_GWEI = "100"
web3.eth.handleRevert = true 

const mainState = () => {
    // const response = await axios.get('https://idle-api.crabada.com/public/idle/crabadas/lending?orderBy=time_point&order=desc&page=1&limit=1000')
    // const resp = await response.data.result.data
    const state = {
        client: null,
        reloadSec: 30,
        reloadAt: null,
        startCooldowns: {},

    initAccount: async function() {
        try {
            const secretKey = 'xyz' //or load from env file that is not submitted
            console.log(secretKey)
            let account = web3.eth.accounts.privateKeyToAccount(secretKey)
            console.log('\x1b[36m%s\x1b[0m', `Successfully auth. to account ${shortenAddress(account.address)}`)
            
            // Make Client
            this.client = makeClient(account.address)

            // Adds an account using a private key or account object to the wallet.
            web3.eth.accounts.wallet.add(secretKey)

            // Start auto mining
            this.startAutoMining()

            } catch (err) {
                console.log(err)
            }
        }
    }

    return state
}

const makeClient = (publicAddress) => {

    const client = {
        // Based on observing actual tx.
        gasLimit: process.env.GAS_LIMIT,
        // Public key.
        publicAddress: publicAddress,
        //"tip" to the miner, defaulted to 1
        maxPriorityFeePerGas: process.env.MAX_PRIORITY_FEE_PER_GAS,

        getRecentGas: async function() {
            return await web3.eth.getGasPrice()
        },

        getTransactionCount: async function() {
            return await web3.eth.getTransactionCount(this.publicAddress, 'latest')
        },
      
        getPendingTransactionCount: async function () {
            return await web3.eth.getTransactionCount(this.publicAddress, "pending")
        },

        estimateMaxFeePerGasInGwei: async function () {
            const latestBlock = await web3.eth.getBlock("pending")
            const baseFeeInWei = latestBlock.baseFeePerGas
            const toBN = web3.utils.toBN(baseFeeInWei)
            const baseFeeInGwei = web3.utils.fromWei(toBN, 'gwei')

            // Tweaks from Tactical.
            // 2 * baseFee + MaxPrority (default: 1)
            const maxFee = parseInt((1.5 * baseFeeInGwei) + this.maxPriorityFeePerGas)
            return web3.utils.toWei(`${maxFee}`, 'gwei')
        },

        isGasValid: async function() {
            const recentGasPrice = await this.getRecentGas()
            const validGasPrice = parseInt(recentGasPrice) < parseInt(web3.utils.toWei(MAX_GAS_GWEI, 'gwei'))

            if(!validGasPrice) {
                return false
            }

            return true
        },

        isGasValid: async function() {
            const recentGasPrice = await this.getRecentGas()
            const validGasPrice = parseInt(recentGasPrice) < parseInt(web3.utils.toWei(MAX_GAS_GWEI, 'gwei'))

            if(!validGasPrice) {
                return false
            }

            return true
        }
    }

    return client
}

// Start everything
const state = mainState()
state.initAccount()