import { Heading, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import FormCreateAccount from '../../components/form_create_account';

export default function CreateAccountStepTwo() {
	return (
		<>
			<Head>
				<title>Account Details</title>
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
						OK, to add money, let's make an e-mail and password.
					</Heading>
					<FormCreateAccount nextPagePath="/steps/inform_add_credit_card" />
				</Flex>
			</main>
		</>
	);
}
