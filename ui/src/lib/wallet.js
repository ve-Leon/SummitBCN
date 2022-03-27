import * as CryptoJS from 'crypto-js';
import transakSDK from '@transak/transak-sdk';
import Ethereum from './ethereum';
import Terra from './terra';
var randomToken = require('random-token');

export default class Wallet {
	transakApiKey = '87df8e71-2741-4b92-9bc2-88796a141892';
	transakSecret =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBUElfS0VZIjoiODdkZjhlNzEtMjc0MS00YjkyLTliYzItODg3OTZhMTQxODkyIiwiaWF0IjoxNjQ4MzA0NDIyfQ.Bsw7J5K07UHRm2unfN45-qY_7Go3Tosd4zoY79XL0EY';

	encrypt(textToEncrypt, key) {
		return CryptoJS.AES.encrypt(textToEncrypt, key).toString();
	}

	decrypt(cipherText, key) {
		var bytes = CryptoJS.AES.decrypt(cipherText, key);
		return bytes.toString(CryptoJS.enc.Utf8);
	}

	getEthereumWallet(password) {
		const ethereum = new Ethereum();

		const wallet = ethereum.createWallet();
		console.log('address:', wallet.address);
		console.log('mnemonic:', wallet.mnemonic);
		console.log('privateKey:', wallet.privateKey);

		const encryptedKey = this.encrypt(wallet.address, password);
		const encryptedMnemonic = this.encrypt(wallet.mnemonic, password);

		console.log('Ecnrypted address:', encryptedKey);
		console.log('Ecnrypted mnemonic:', encryptedMnemonic);

		console.log('Decrypted address:', this.decrypt(encryptedKey, password));
		console.log(
			'Decrypted mnemonic:',
			this.encrypt(encryptedMnemonic, password)
		);

		return {
			address: wallet.address,
			encryptedKey: encryptedKey,
			encryptedMnemonic: encryptedMnemonic,
		};
	}

	getTerraWallet(password) {
		const terra = new Terra();
		const wallet = terra.createWallet();

		console.log('address:', wallet.address);
		console.log('mnemonic:', wallet.mnemonic);
		console.log('privateKey:', wallet.privateKey);

		const encryptedKey = this.encrypt(wallet.address, password);
		const encryptedMnemonic = this.encrypt(wallet.mnemonic, password);

		console.log('Ecnrypted address:', encryptedKey);
		console.log('Ecnrypted mnemonic:', encryptedMnemonic);

		console.log('Decrypted address:', this.decrypt(encryptedKey, password));
		console.log(
			'Decrypted mnemonic:',
			this.encrypt(encryptedMnemonic, password)
		);

		return {
			address: wallet.address,
			encryptedKey: encryptedKey,
			encryptedMnemonic: encryptedMnemonic,
		};
	}

	getDefaultTerraWallet(password) {
		const terra = new Terra();
		const wallet = terra.createDefaultWallet();

		console.log('address:', wallet.address);
		console.log('mnemonic:', wallet.mnemonic);
		console.log('privateKey:', wallet.privateKey);

		const encryptedKey = this.encrypt(wallet.address, password);
		const encryptedMnemonic = this.encrypt(wallet.mnemonic, password);

		console.log('Ecnrypted address:', encryptedKey);
		console.log('Ecnrypted mnemonic:', encryptedMnemonic);

		console.log('Decrypted address:', this.decrypt(encryptedKey, password));
		console.log(
			'Decrypted mnemonic:',
			this.encrypt(encryptedMnemonic, password)
		);

		return {
			address: wallet.address,
			encryptedKey: encryptedKey,
			encryptedMnemonic: encryptedMnemonic,
		};
	}

	redirectToAddMoney(address, redirectPath) {
		console.log('transakApiKey', this.transakApiKey);
		console.log('random', randomToken(10));
		let transak = new transakSDK({
			apiKey: this.transakApiKey, // Your API Key
			environment: 'STAGING', // STAGING/PRODUCTION
			hostURL: window.location.origin,
			// widgetHeight: '625px',
			// widgetWidth: '500px',
			widgetHeight: '90vh',
			widgetWidth: '90vw',
			// Examples of some of the customization parameters you can pass
			defaultCryptoCurrency: 'USDC', // Example 'ETH'
			walletAddress: address, // Your customer's wallet address
			themeColor: '#000', // App theme color
			fiatCurrency: 'EUR', // If you want to limit fiat selection eg 'USD'
			email: randomToken(10) + '@test.com', // Your customer's email address
			redirectURL: redirectPath,
		});

		transak.init();

		// To get all the events
		transak.on(transak.ALL_EVENTS, (data) => {
			console.log(data);
		});

		// This will trigger when the user marks payment is made.
		transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
			console.log(orderData);
			transak.close();
		});
	}
}
