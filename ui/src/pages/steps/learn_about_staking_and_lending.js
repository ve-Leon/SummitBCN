import { Button, Heading, Box, Flex, AspectRatio } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function LearnAboutStakingAndLending() {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>More about staking and lending</title>
			</Head>
			<main>
				<Flex
					align="center"
					justify="center"
					direction="column"
					px={[15, 50, 200]}
					py={50}
					overflow="auto"
				>
					<Box>
						<Heading as="h3" size="lg">
							When you <b>stake</b>, you lend to the people who make the network
							run.
						</Heading>
					</Box>
					<AspectRatio ratio={16 / 9} width={['200px', '400px', '500px']}>
						<iframe
							// width="560"
							// height="315"
							src="https://www.youtube.com/embed/vZ2UZdB07fo"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</AspectRatio>
					<Box mt={8}>
						<Heading as="h3" size="lg">
							When you <b>lend</b>, you provide liquidity for people that is
							looking for it.
						</Heading>
					</Box>
					<AspectRatio ratio={16 / 9} width={['200px', '400px', '500px']}>
						<iframe
							src="https://www.youtube.com/embed/dTCwssZ116A"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</AspectRatio>
					<Box mt={30}>
						<Button width={['100px', '120px']} onClick={() => router.back()}>
							Go back
						</Button>
					</Box>
				</Flex>
			</main>
		</>
	);
}
