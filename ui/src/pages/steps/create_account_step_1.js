import { Button, Heading, Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

export default function CreateAnAccount() {
	return (
		<>
			<Head>
				<title>Create an Account</title>
			</Head>
			<main>
				<Flex
					align="center"
					justify="center"
					direction="column"
					height="100vh"
					px={[15, 50]}
				>
					<Heading>Congratulations!</Heading>
					<Heading>You have created a crypto account.</Heading>
					<Box mt={10} mb={3}>
						<Button width={['270px', '320px']}>
							<Link href="/steps/create_account_step_2">
								<a>Add money to earn more?</a>
							</Link>
						</Button>
					</Box>
					<Box>
						<Button width={['270px', '320px']}>
							<Link href="/steps/ask_learn_about_crypto">
								<a>Not right now</a>
							</Link>
						</Button>
					</Box>
				</Flex>
			</main>
		</>
	);
}
