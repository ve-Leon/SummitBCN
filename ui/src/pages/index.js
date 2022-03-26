import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Heading, MenuIcon } from '@chakra-ui/react';
import CreateAnAccount from './steps/1_create_account';

export default function Home() {
	return (
		<>
			<Head>
				<title>Your Crypto Wallet</title>
			</Head>
			<div>
				<Button>
					<Link href="/steps/1_create_account">
						<a>Create a cryto account</a>
					</Link>
				</Button>
				<Button>
					<Link href="/dashboard">
						<a>I have a crypto account</a>
					</Link>
				</Button>
			</div>
		</>
	);
}
