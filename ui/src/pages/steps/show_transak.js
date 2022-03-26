import { Heading, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

import FormFundWallet from '../../components/form_fund_wallet';
import { useEffect, useState } from 'react';
import Wallet from '../../lib/wallet';

export default function ShowTransak() {
	useEffect(() => {
		const wallet = new Wallet();
		const ethereumWallet = wallet.getEthereumWallet('marcoalberto');
		wallet;
		const terraWallet = wallet.getDefaultTerraWallet('marcoalberto');

		wallet.redirectToAddMoney(ethereumWallet.address);
	}, []);

	return (
		<>
			<Head>
				<title>Add Credit Card Details</title>
			</Head>
		</>
	);
}
