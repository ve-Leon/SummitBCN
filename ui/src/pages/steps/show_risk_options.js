import {
	Button,
	Heading,
	Box,
	Flex,
	Link,
	Icon,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';
import Head from 'next/head';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';

export async function getServerSideProps(context) {
	return {
		props: {
			amountOfCurrency: '1', // TODO: put correct value
		}, // will be passed to the page component as props
	};
}

export default function ShowRiskOptions() {
	get;
	return (
		<>
			<Head>
				<title>Risk Options</title>
			</Head>
			<main>
				<Flex
					align="center"
					justify="center"
					direction="column"
					height="100vh"
					px={[15, 50]}
				>
					<Heading>Here is your balance</Heading>
					<Flex direction="row">
						<Box mt={10} mb={10}>
							AVAX
						</Box>
						<Box mt={10} mb={10}>
							{AVAX}
						</Box>
					</Flex>
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
