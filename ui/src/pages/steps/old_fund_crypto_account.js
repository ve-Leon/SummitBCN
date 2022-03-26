import { Heading, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

import FormFundWallet from '../../components/form_fund_wallet';
import { useEffect, useState } from 'react';
import Wallet from '../../lib/wallet';

export default function FundCryptoAccount() {
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
				<title>Add Money to Your Account</title>
			</Head>
			<main>
				<Flex
					align="center"
					justify="center"
					direction="column"
					height="100vh"
					px={[15, 50, 200]}
				>
					<Heading>
						Use your credit card to add money to your account, which will then
						start earning crypto.
					</Heading>
					{/* <FormFundWallet /> */}
				</Flex>
			</main>
		</>
	);
}
