import { Button, Heading, Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

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
					px={[15, 50]}
				>
					<Heading>
						Through Staking, you can make income just by lending your crypto.
					</Heading>
					<Heading>
						When you Stake your crypto, it helps make crypto more secure.
					</Heading>
					<Box mt={30}>
						<Button width={['250px', '300px']}>
							<a target="_blank" href="https://www.avax.network/">
								I want more details
							</a>
						</Button>
					</Box>
				</Flex>
			</main>
		</>
	);
}
