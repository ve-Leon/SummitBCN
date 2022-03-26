import { extendTheme, theme } from '@chakra-ui/react';

// https://github.com/o1123pq/tfwebapp/blob/edad976eeaf6be692fe32574e64cf64e5135ac9b/src/styles/ChakraTheme.js
// https://github.com/digital-dahal/TOTICKDO/blob/76c898df0dccb97497880e7f7ea3b452d79582fa/src/presentation/theme.js
export const customTheme = extendTheme({
	styles: {
		global: {},
	},
	components: {
		Button: {
			baseStyle: {
				borderRadius: '15px',
			},
			variants: {
				outline: {
					color: '#e84142',
					borderColor: '#e84142',
				},
			},
			defaultProps: {
				variant: 'outline',
			},
		},
		Heading: {
			baseStyle: {
				color: '#e84142',
				textAlign: 'center',
				marginBottom: 5,
			},
		},
	},
	config: {
		initialColorMode: 'light',
	},
});
