import { Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import Wyre from '../../lib/wyre';	
import Wallet from '../../lib/wallet';	
import Terra from '../../lib/terra';	
import { useState, useEffect } from 'react'

const wallet = new Wallet()

export async function getStaticProps() {
	// Fetch data from external API
	// console.log('getServerSideProps')

	// const wyre = new Wyre();
	// // console.log('wyre', wyre.generateSecret)
	// const {apiKey, authenticatedAs} = await wyre.generateSecret()

	// // console.log(wyre.getApiPath('sessions/auth/key'))
	// console.log('apiKey', apiKey)

	// const account = await wyre.createAccount(apiKey)

	// console.log('account', account)


	// const wallet = new Wallet()
	// const walletCreated = wallet.getWallet('Mi password')

	// console.log('walletCreated', walletCreated)
  
	// Pass data to the page via props
	return { props: { bla:1 } }
}

export default function Test() {

	useEffect(() => {

		// const terra = new Terra()
		// terra.getMnemonic()

		const password = 'Mi password'
	
		// const terraWallet = wallet.getTerraWallet(password)
		const terraWallet = wallet.getDefaultTerraWallet(password)
		const ethereumWallet = wallet.getEthereumWallet(password)

		console.log('ethereumWallet', ethereumWallet)
		console.log('terraWallet', terraWallet.address)

		// const terraAddress = terra.createWallet(terra.getMnemonic())
		// console.log('terraAddress ==>', terraAddress.key.publicKey.address())
		wallet.redirectToAddMoney(ethereumWallet.address)
	}, [])

	
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
