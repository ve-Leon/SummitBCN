import { Button, Heading, Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

export default function AskLearnAboutCrypto() {
	return (
		<>
			<Head>
				<title>Learn about crypto?</title>
			</Head>
			<main>
				<Flex
					align="center"
					justify="center"
					direction="column"
					height="100vh"
					px={[15, 50, 200]}
				>
					<Heading>No Worries</Heading>
					<Heading>Wanna know how we help you earn more crypto?</Heading>
					<Box mt={30}>
						<Button width={['250px', '300px']}>
							<Link href="/steps/learn_about_crypto">
								<a>Yeah, I want to know more</a>
							</Link>
						</Button>
					</Box>
				</Flex>
			</main>
		</>
	);
}
