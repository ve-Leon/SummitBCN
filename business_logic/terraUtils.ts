import {
    Coin,
    Coins,
    Fee,
    LCDClient,
    MnemonicKey,
    Msg,
    MsgTransfer,
    Wallet,
  } from "@terra-money/terra.js";
  import { Height } from "@terra-money/terra.js/dist/core/ibc/msgs/client/Height";
  import { ethers } from "ethers";
  
  const MAP_DENOM_TO_SYMBOL = {
    uusd: "Ust",
    uluna: "Luna",
  };
  
  const TERRA_TO_AXELAR_CHANNEL = "channel-105"; // https://docs.axelar.dev/releases/hacknet
  const TERRA_LCD = "https://bombay-lcd.terra.dev";
  const lcdClient = new LCDClient({
    URL: TERRA_LCD,
    chainID: "bombay-12",
  });
  
  export function createIBCTransferMsg(
    senderAddress: string,
    recipientAddress: string,
    symbol: string,
    amount: string
  ) {
    const coin = new Coin(symbol, amount);
    return new MsgTransfer(
      "transfer",
      TERRA_TO_AXELAR_CHANNEL,
      coin,
      senderAddress,
      recipientAddress,
      new Height(100, 100),
      undefined
    );
  }
  
  export async function signAndBroadcast(wallet: Wallet, msg: Msg) {
    const tx = await wallet.createAndSignTx({
      msgs: [msg],
      fee: new Fee(150000, "30000uluna"),
    });
    return lcdClient.tx.broadcast(tx);
  }
  
  export function importTerraWallet(mnemonic: string) {
    const mnemonicKey = new MnemonicKey({
      mnemonic,
    });
    return lcdClient.wallet(mnemonicKey);
  }
  
  export function printTerraBalance(coins: Coins) {
    for (const coin of coins.toArray()) {
      console.log(
        ethers.utils.formatUnits(coin.amount.toString(), 6),
        MAP_DENOM_TO_SYMBOL[coin.denom]
      );
    }
  }