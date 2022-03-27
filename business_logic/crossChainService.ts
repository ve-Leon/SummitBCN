import "dotenv/config";
import {
  GetDepositAddressPayload,
  TransferAssetBridge,
} from "@axelar-network/axelarjs-sdk";
import { BigNumber, ethers } from "ethers";
import {
  createIBCTransferMsg,
  importTerraWallet,
  printTerraBalance,
  signAndBroadcast,
} from "./terraUtils";

// Config your own here.
const terraMnemonic = process.env.TERRA_MNEMONIC;
const transferToken = "uusd"; // UST

async function getDepositAddress(destinationAddress: string, env = "devnet") {
  const client = new TransferAssetBridge(env);
  const payload: GetDepositAddressPayload = {
    fromChain: "terra",
    toChain: "avalanche",
    asset: transferToken,
    destinationAddress,
  };
  return client.getDepositAddress({ payload });
}
async function investLowRisk(currencySymbol: string, amountOfCurrency:string, evmAddress:string){
  
const transferAmount = ethers.utils.parseUnits(amountOfCurrency, 6); // 10 UST
 transferUSTtoAvalanche( transferAmount, evmAddress );
// depositUSTAnchor();
//TODO: user anchor-earn sdk to deposit to new native Avalanche deployment
}
async function transferUSTtoAvalanche( transferAmount:BigNumber, evmAddress:string){
  (async () => {
    // Import existing terra wallet
    const wallet = importTerraWallet(terraMnemonic);
    console.log("==== Your terra wallet info ==== ");
    console.log("Address:", wallet.key.accAddress);
  
    // Print terra balances
    const coins = await wallet.lcd.bank
      .balance(wallet.key.accAddress)
      .then(([coins]) =>
        coins.filter((coin) => ["uusd", "uluna"].includes(coin.denom))
      );
    printTerraBalance(coins);
  
    // Generate deposit address
    console.log("\n==== Generating deposit address... ====");
    const depositAddress = await getDepositAddress(evmAddress);
    console.log("Deposit Address:", depositAddress);
  
    // IBC transfer UST token
    const transferCoin = coins.get(transferToken);
    const ibcMsg = createIBCTransferMsg(
      wallet.key.accAddress,
      depositAddress,
      transferCoin.denom,
      transferAmount.toString()
    );
    const receipt = await signAndBroadcast(wallet, ibcMsg);
    console.log("IBC Tx:", receipt.txhash);
  })();
}
