import { LCDClient, MnemonicKey, Msg, MsgExecuteContract, MsgSend, Tx, Wallet, Fee } from "@terra-money/terra.js";
import { AnchorEarn, CHAINS, NETWORKS, DENOMS, TxOutput, STATUS } from '@anchor-protocol/anchor-earn';


export default class Terra {

    baseNumber = 1000000

    mnemonic = 'fresh burden north daring drink tobacco swarm heart next fluid husband fatigue blast wreck only rotate define aerobic school whip stick tray fever reveal'

    constructor() {
        this.terra = new LCDClient({
            URL: 'https://bombay-lcd.terra.dev/',
            chainID: 'bombay-12',
        });
    }

    getMnemonic() {
        const mk = new MnemonicKey();
        return mk.mnemonic
    }

    createWallet() {
        const mk = new MnemonicKey();
        const wallet = this.terra.wallet(mk);
        return  {
            'address': wallet.key.publicKey.address(),
            'mnemonic': mk.mnemonic,
            'privateKey': mk.privateKey.toString()
        }
    }

    createDefaultWallet() {
        const mk = new MnemonicKey({mnemonic: this.mnemonic});
        const wallet = this.terra.wallet(mk);
        return  {
            'address': wallet.key.publicKey.address(),
            'mnemonic': mk.mnemonic,
            'privateKey': mk.privateKey.toString()
        }
    }

    async getBalance(accAddress){
        const accountInfo = await this.terra.bank.balance(accAddress);
        return accountInfo
    }

    // async estimateFee(wallet:Wallet, amount: number, toAddress){
    //     const {account_number, sequence}  = await wallet.accountNumberAndSequence()

    //     const signer = {
    //         publickKey: wallet.key.publicKey, 
    //         sequenceNumber: sequence
    //     } 

    //     const estimatedTransferFee = await this.terra.tx.estimateFee(
    //         [signer], 
    //         {msgs: [
    //             new MsgSend(
    //                 wallet.key.accAddress,
    //                 toAddress,
    //                 { uusd: amount }
    //             )
    //         ]}
    //     )

    //     const transferFeeAmount = estimatedTransferFee.amount.get('uusd').amount.toNumber() as number
    //     const gasFeeAdjustment = this.terra.config.gasAdjustment as number

    //     const maxTransferFee = (transferFeeAmount * gasFeeAdjustment)  / 1000000

    //     const estimatedExecuteFee = await this.terra.tx.estimateFee(
    //         [signer], 
    //         {msgs: [
    //             new MsgExecuteContract(
    //                 wallet.key.accAddress, // sender
    //                 this.configService.get<string>('ANCHOR_DEPOSIT_CONTRACT_ADDRESS'), // contract account address
    //                 {deposit_stable: {}},
    //                 { uusd: amount }
    //             )
    //         ]}
    //     )

    //     const executeFeeAmount = estimatedExecuteFee.amount.get('uusd').amount.toNumber() as number
    //     const executeGasFeeAdjustment = this.terra.config.gasAdjustment as number

    //     const maxDepositFee = (executeFeeAmount * executeGasFeeAdjustment)  / 1000000


    //     const estimatedFee = new EstimatedFee()
    //     estimatedFee.minDepositFee = executeFeeAmount / 1000000
    //     estimatedFee.maxDepositFee = maxDepositFee
    //     estimatedFee.depositGasLimit = estimatedExecuteFee.gas_limit
    //     estimatedFee.minTransferFee = transferFeeAmount / 1000000
    //     estimatedFee.maxTransferFee = maxTransferFee
    //     estimatedFee.transferGasLimit = estimatedTransferFee.gas_limit

    //     return estimatedFee
        
    // }

    async depositToAddress(amount, gasLimit,  feeAmount,  fromMnemonic, toAddress){

        const mk = new MnemonicKey({mnemonic: fromMnemonic});  
        const wallet = this.terra.wallet(mk);

        const fee = new Fee(gasLimit, { uusd: feeAmount * 1000000 })

        const send = new MsgSend(
            wallet.key.accAddress,
            toAddress,
            { uusd: amount }
        );

        this.logger.debug('Send Terra message {}', send)
        
        const transaction = await wallet.createAndSignTx({
          msgs: [send],
          memo: 'Avalanche transfer!',
          fee
        })

        this.logger.debug(`Terra transaction from company wallet ${transaction}`)
        console.log(transaction)

        const broadcast = await this.terra.tx.broadcast(transaction)

        this.logger.debug(`Broadcast Terra transaction from company wallet ${broadcast}`)
        console.log(broadcast)

        return broadcast.txhash
    }

    // async depositToAnchor(amount, gasLimit: number,  feeAmount, fromMnemonic){

    //     const fromWallet = this.createWallet(fromMnemonic);

    //     const fee = new Fee(gasLimit, { uusd: feeAmount * 1000000 })

    //     console.log('fee offered', feeAmount)

    //     const execute = new MsgExecuteContract(
    //         fromWallet.key.accAddress, // sender
    //         this.configService.get<string>('ANCHOR_DEPOSIT_CONTRACT_ADDRESS'), // contract account address
    //         {deposit_stable: {}},
    //         { uusd: amount }
    //     );
        
    //     const executeTx = await fromWallet.createAndSignTx({
    //         msgs: [execute],
    //         fee
    //     });

    //     console.log('executeTx', executeTx)
            
    //     const executeTxResult = await this.client.tx.broadcast(executeTx);

    //     console.log('executeTxResult', executeTxResult)

    //     return executeTxResult.txhash
        

    // }

    // async withdrawFromAnchor(amount: number, fromMnemonic){
    //     const anchorEarn = new AnchorEarn({
    //         chain: CHAINS.TERRA,
    //         network: NETWORKS.BOMBAY_12,
    //         mnemonic: fromMnemonic,
    //     });

    //     console.log('anchorEarn', anchorEarn, amount.toFixed(1))

    //     const deposit = await anchorEarn.withdraw({
    //         amount: amount.toFixed(2),
    //         currency: DENOMS.UST
    //     });

    //     console.log('deposit', deposit)

    //     return deposit

    // }

    // async balanceFromAnchor(fromMnemonic){
    //     console.log(fromMnemonic)
    //     const anchorEarn = new AnchorEarn({
    //         chain: CHAINS.TERRA,
    //         network: NETWORKS.BOMBAY_12,
    //         mnemonic: fromMnemonic,
    //     });

    //     const balance = await anchorEarn.balance({
    //         currencies: [DENOMS.UST],
    //     });

    //     console.log('balance', balance)

    //     return balance

    // }
}
