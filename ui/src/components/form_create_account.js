import { Input, Button, Flex, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function FormCreateAccount({ nextPagePath }) {
	const router = useRouter();

	// Handles the submit event on form submit.
	// More about forms https://nextjs.org/docs/guides/building-forms
	const handleSubmit = async (event) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault();

		// Get data from the form.
		const data = {
			email: event.target.email.value,
			password: event.target.password.value,
		};

		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(data);

		// API endpoint where we send form data.
		const endpoint = '/api/form';

		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: 'POST',
			// Tell the server we're sending JSON.
			headers: {
				'Content-Type': 'application/json',
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		};

		// // Send the form data to our forms API on Vercel and get a response.
		// const response = await fetch(endpoint, options);

		// // Get the response data from server as JSON.
		// // If server returns the name submitted, that means the form works.
		// const result = await response.json();
		// // TODO: show user a confirmation message
		// // alert(`Is this your full name: ${result.data}`);
		router.push(nextPagePath);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Flex
					align="center"
					justify="center"
					direction="column"
					px={[15, 50, 200]}
				>
					<Box mb={2}>
						<Input
							name="email"
							placeholder="Enter your e-mail..."
							width={['250px', '300px']}
						/>
					</Box>
					<Box mb={5}>
						<Input
							name="password"
							type="password"
							placeholder="Enter your password..."
							width={['250px', '300px']}
						/>
					</Box>
					<Box>
						<Button type="submit">Submit</Button>
					</Box>
				</Flex>
			</form>
		</div>
	);
}
