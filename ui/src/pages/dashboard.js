import { Heading, Flex, Box } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
	Stat,
	StatArrow,
	StatLabel,
	StatGroup,
	StatNumber,
	StatUpArrow,
	StatHelpText,
	StatDownArrow,
} from '@chakra-ui/stat';
import Head from 'next/head';

export default function Dashboard() {

	const [items, setItems] = useState([]);
	
	const [currentValue, setCurrentValue] = useState([]);

	const [todayValue, setTodayValue] = useState([]);
	const [todayPercentage, setTodayPercentage] = useState([]);

	const [lastWeekValue, setLastWeekValue] = useState([]);
	const [lastWeekPercentage, setLastWeekPercentage] = useState([]);

	const [lastMonthValue, setLastMonthValue] = useState([]);
	const [lastMonthPercentage, setLastMonthPercentage] = useState([]);

	let apiResponse;

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		
		//using axios
		try {
		const response = await axios.get('https://api.covalenthq.com/v1/43114/address/0x89da56e409dDef3C52BdCfBeFC9b595870880bAA/portfolio_v2/?quote-currency=USD&format=JSON&key=ckey_4dc37b7f69b2402b817bb51c5a0');
		//console.log(response.data.data);
		setItems(response.data.data);
		
		let _todayValue = await getTodayValue(response.data.data);
		let _lastWeekValue = await getLastWeekValue(response.data.data);
		let _lastMonthValue = await getLastMonthValue(response.data.data);
		
		let _currentValue = await getCurrentValue(response.data.data);

		setCurrentValue(_currentValue);
		setTodayValue(_todayValue);
		setLastWeekValue(_lastWeekValue);
		setLastMonthValue(_lastMonthValue);

		} catch (err) {
			// Handle Error Here
			console.error(err);
		}
	};

	const getCurrentValue = async (items) => {
		return items.items[0].holdings[0].quote_rate;
	}

  	const getTodayValue = async (items) => {
    
		let i_1 = items.items[0].holdings[0].quote_rate;
		let i_0 = items.items[0].holdings[1].quote_rate;
		setTodayPercentage((i_1 / i_0 - 1) * 100);

		return i_1 - i_0;
	};

	const getLastWeekValue = async (items) => {
		let i_1 = items.items[0].holdings[0].quote_rate;
		let i_0 = items.items[0].holdings[6].quote_rate;

		setLastWeekPercentage((i_1 / i_0 - 1) * 100);

		return i_1 - i_0;
	};

	const getLastMonthValue = async (items) => {
		let i_1 = items.items[0].holdings[0].quote_rate;
		let i_0 = items.items[0].holdings[29].quote_rate;

		setLastMonthPercentage((i_1 / i_0 - 1) * 100);

		return i_1 - i_0;
	};

	return (
		<>
			
			
			
			
			<center>
			<h1 style={{color: "red"}}><strong>Crypto Wallet!</strong></h1>
			<br/>

			<h2 ><strong style={{color: "red"}}>Balance: </strong> <strong>${parseFloat(currentValue).toFixed(2)}</strong></h2>
			
			<br/>
			<StatGroup>
				<Stat>
				<StatLabel>Today</StatLabel>
				<StatNumber>${parseFloat(todayValue).toFixed(2)}</StatNumber>
				<StatHelpText>
				{
					parseFloat(todayPercentage) > 0.0 ?
					<StatArrow type='increase' /> 
					: 
					<StatArrow type='decrease' /> 
					}
					{parseFloat(todayPercentage).toFixed(2)}%
				</StatHelpText>
				
				</Stat>
      			<Stat>
					<StatLabel>Last Week</StatLabel>
					<StatNumber>${parseFloat(lastWeekValue).toFixed(2)}</StatNumber>
					<StatHelpText>
						{
						parseFloat(lastWeekPercentage) > 0 ?
						<StatArrow type='increase' /> 
						: 
						<StatArrow type='decrease' /> 
						}
						{parseFloat(lastWeekPercentage).toFixed(2)}%
					</StatHelpText>
				</Stat>
				
				<Stat>
				<StatLabel>Last Month</StatLabel>
				<StatNumber>${parseFloat(lastMonthValue).toFixed(2)}</StatNumber>
				<StatHelpText>
				{
					parseFloat(lastMonthPercentage) > 0 ?
					<StatArrow type='increase' /> 
					: 
					<StatArrow type='decrease' /> 
					}
					{parseFloat(lastMonthPercentage).toFixed(2)}%
				</StatHelpText>
				</Stat>
    
    		</StatGroup>

			</center>
			
		</>
	);
}
