import { Heading, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

import FormFundWallet from '../../components/form_fund_wallet';

export default function FundCryptoAccount() {
	return (
		<>
			<Head>
				<title>Add money to your account</title>
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
					<FormFundWallet />
				</Flex>
			</main>
		</>
	);
}
