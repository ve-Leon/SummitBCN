import { ethers } from "ethers";

export default class Ethereum {

    createWallet() {
        const ethers = require('ethers')
        const wallet = ethers.Wallet.createRandom()

        // console.log('address:', wallet.address)
        // console.log('mnemonic:', wallet.mnemonic.phrase)
        // console.log('privateKey:', wallet.privateKey)
        
        return  {
            'address': wallet.address,
            'mnemonic': wallet.mnemonic.phrase,
            'privateKey': wallet.privateKey
        }
    }
}
