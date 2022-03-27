import { Heading } from '@chakra-ui/react';
import Head from 'next/head';

import { useEffect } from 'react';
import Wallet from '../../lib/wallet';

export default function ShowTransak() {
	useEffect(() => {
		const email = sessionStorage.getItem('email');
		const password = sessionStorage.getItem('password');

		const wallet = new Wallet();
		const ethereumWallet = wallet.getEthereumWallet('marcoalberto');
		wallet;
		const terraWallet = wallet.getDefaultTerraWallet('marcoalberto');

		wallet.redirectToAddMoney(
			ethereumWallet.address,
			'/steps/show_risk_options'
		);
	}, []);

	return (
		<>
			<Head>
				<title>Add Credit Card Details</title>
			</Head>
		</>
	);
}
