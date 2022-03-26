import { Heading, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import FormCreateAccount from '../../components/form_create_account';

export default function DontCreateAccount() {
	return (
		<>
			<Head>
				<title>What is staking?</title>
			</Head>
			<main>
				<Flex
					align="center"
					justify="center"
					direction="column"
					height="100vh"
					px={[15, 50, 200]}
				>
					<Heading>OK, to add money, let's make an e-mail and password</Heading>
					<FormCreateAccount nextPagePath="/steps/fund_crypto_account" />
				</Flex>
			</main>
		</>
	);
}
