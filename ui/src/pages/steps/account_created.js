import Head from 'next/head';
import Link from 'next/link';

export default function AccountCreated() {
	return (
		<>
			<Head>
				<title>Account Created</title>
			</Head>
			<h1>Congratulations!\n You have created a crypto account.</h1>
			<h2>
				<Link href="/">
					<a>Back</a>
				</Link>
			</h2>
		</>
	);
}
