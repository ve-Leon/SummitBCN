import { Button, Heading } from '@chakra-ui/react';
import { Main } from 'next/document';
import Head from 'next/head';
import { Container } from '../../components/steps_container';

export default function CreateAnAccount() {
	return (
		<>
			<Head>
				<title>Your Crypto Wallet</title>
			</Head>
			<div>
				<Button>Create a cryto account</Button>
				<Button>I have a crypto account</Button>
			</div>
		</>
	);
}
