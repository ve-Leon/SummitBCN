# UI

UI code.

It should not contain to business logic (e.g., backend).

## Resources

- UI library is Chakra. See docs [here](https://chakra-ui.com/guides/first-steps)

## TODOs

- Add connection to API. Pages who have this TODOs:
  - `show_risk_option`
- After click "Buy" in Transak screen, redirect to page `show_risk_options`
- Page `show_transak` needs to use user's email and password.
- Dashboard
- Change urls links:
  - Add a url or link to a new page to the link of `create_account_step_two`
  - Change links `avax.network` one some pages (e.g. page `show_risk_options` )
- Change home url of the website (How to change it? The <Head> tag in `index.js`)

## Nice TODOs

- Animation during navigation between screens
- Menu icon to navigate to these pages: team, purpose
- Back button for navigation in some screens
- Handle "no page" errors
- System of URLs based on ids + plain text, not only url plain text. And if plain text changes, system can still find the page via id
- Solve TODOs
- Put duplicated style on the global theme
- Multilingual
- Dark mode
