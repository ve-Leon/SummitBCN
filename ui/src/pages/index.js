import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Heading, MenuIcon } from '@chakra-ui/react';
import CreateAnAccount from './steps/1_create_account';

export default function Home() {
	return (
		<div className="container">
			<Head>
				{/* <div>
					<MenuIcon />
				</div> */}
			</Head>
		</div>
	);
}
