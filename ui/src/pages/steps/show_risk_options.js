import { Button, Heading, Box, Flex, Link, Icon, Text } from '@chakra-ui/react';
import { BiWifi0 } from '@react-icons/all-files/bi/BiWifi0';
import { BiWifi1 } from '@react-icons/all-files/bi/BiWifi1';
import { BiWifi2 } from '@react-icons/all-files/bi/BiWifi2';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

// TODO: connect to API to get currency symbol and amount
export async function getServerSideProps(context) {
	return {
		props: {
			currencySymbol: 'AVAX',
			amountOfCurrency: '21', // TODO: put correct value
		}, // will be passed to the page component as props
	};
}

export default function ShowRiskOptions({ currencySymbol, amountOfCurrency }) {
	// Three level of risk: 'low', 'medium' and 'high'
	const [levelOfRisk, setLevelOfRisk] = useState();

	const router = useRouter();

	// TODO: fill with the logic
	async function submitLevelOfRisk(level) {
		console.log();
		if (level == 'low') {
			// Connect to API
		} else if (level == 'medium') {
			// Connect to API
		} else {
			// Connect to API
		}

		router.push('/steps/');
	}

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
					<Text mb={10}>
						Currency {currencySymbol} with a quantity of {amountOfCurrency}
					</Text>
					<Heading>How much risk do you want to take?</Heading>
					<Flex alignItems="center" justifyContent="center" width="80vw">
						<Box>
							<Button
								size="sm"
								leftIcon={<Icon as={BiWifi0} color="#e84142" />}
								variant="solid"
								onClick={() => {
									setLevelOfRisk('low');
								}}
							>
								Low
							</Button>
						</Box>
						<Box>
							<Button
								size="sm"
								leftIcon={<Icon as={BiWifi1} color="#e84142" />}
								variant="solid"
								ml={2}
								mr={2}
								onClick={() => {
									setLevelOfRisk('medium');
								}}
							>
								Medium
							</Button>
						</Box>
						<Box>
							<Button
								size="sm"
								leftIcon={<Icon as={BiWifi2} color="#e84142" />}
								variant="solid"
								onClick={() => {
									setLevelOfRisk('high');
								}}
							>
								High
							</Button>
						</Box>
					</Flex>
					<Box mt={10} mb={10}>
						<Button
							width={['270px', '320px']}
							onClick={async () => {
								// TODO: send risk level to the API with variable state `levelOfRisk`

								router.push('/dashboard');
							}}
						>
							Confirm my selection
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
