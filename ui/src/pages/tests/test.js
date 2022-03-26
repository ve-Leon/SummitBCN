import { Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Test() {
	return (
		<>
			<Head>
				<title>Test</title>
			</Head>
			<Heading>Test</Heading>
			<h2>
				<Link href="/">
					<a>Go to base route</a>
				</Link>
			</h2>
		</>
	);
}
