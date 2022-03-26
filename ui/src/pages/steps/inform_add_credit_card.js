import { Button, Heading, Box, Flex, Link, Icon } from '@chakra-ui/react';
import Head from 'next/head';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';

export default function InformAddCreditCard() {
	return (
		<>
			<Head>
				<title>Before Earning Crypto</title>
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
					<Box mt={10} mb={10}>
						<Button width={['270px', '320px']}>
							<Link href="/steps/show_transak">
								<a>Enter details</a>
							</Link>
						</Button>
					</Box>
					<Box>
						<Link href="https://www.avax.network/" isExternal>
							{/* How does this works? <ExternalLinkIcon mx="2px" /> */}
							How does this works?{' '}
							<Icon as={BiLinkExternal} color="#e84142" mx="2px" pt="5px" />
						</Link>
					</Box>
				</Flex>
			</main>
		</>
	);
}
