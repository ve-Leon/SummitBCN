import { Box, Button, Heading, MenuIcon, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
	return (
		<ChakraProvider>

		
			<Head>
				<title>Your Crypto Wallet</title>
			</Head>
			<main>
				<Flex align="center" justify="center" direction="column" height="100vh">
					<Box mb={5}>
						<Button width={['270px', '350px']}>
							<Link href="/steps/create_account_step_1">
								<a>Create a crypto account</a>
							</Link>
						</Button>
					</Box>
					<Box>
						<Button width={['270px', '350px']}>
							<Link href="/dashboard">
								<a>I have a crypto account</a>
							</Link>
						</Button>
					</Box>
				</Flex>
			</main>
		</ChakraProvider>
	);
}
