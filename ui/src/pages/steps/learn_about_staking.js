import { Button, Heading, Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

export default function LearnAboutStaking() {
	return (
		<>
			<Head>
				<title>What is Staking?</title>
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
						Through Staking, you can make income just by lending your crypto.
					</Heading>
					<Heading>
						When you Stake your crypto, it helps make crypto more secure.
					</Heading>
					<Box mt={30}>
						<Button width={['250px', '300px']}>
							<Link href="/steps/learn_about_staking_and_lending">
								<a>I want more details</a>
							</Link>
						</Button>
					</Box>
				</Flex>
			</main>
		</>
	);
}
