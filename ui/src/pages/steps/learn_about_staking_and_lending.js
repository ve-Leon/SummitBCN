import { Button, Heading, Box, Flex, AspectRatio } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

export default function LearnAboutStakingAndLending() {
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
						<Flex
							direction="column"
							alignItems="center"
							justifyContent="center"
							mb="60px"
						>
							<Box>
								<Heading>
									When you <b>stake</b>, you lend to the people who make the
									network run.
								</Heading>
							</Box>
							<AspectRatio ratio={16 / 9} width={['300px', '500px', '600px']}>
								<iframe
									// width="560"
									// height="315"
									src="https://www.youtube.com/embed/vZ2UZdB07fo"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
								{/* <iframe
										src="https://www.youtube.com/watch?v=vZ2UZdB07fo"
										allowFullScreen
									/> */}
							</AspectRatio>

							{/* <Button>
								<a target="_blank" href="https://www.avax.network/">
									Watch more want more details
								</a>
							</Button> */}
						</Flex>
					</Box>
					<Box>
						<Flex>
							<Heading>
								When you <b>lend</b>, you provide liquidity for people that is
								looking for it.
							</Heading>
						</Flex>
					</Box>
				</Flex>
			</main>
		</>
	);
}
