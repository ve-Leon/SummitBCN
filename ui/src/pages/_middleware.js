import { NextResponse, NextRequest } from 'next/server';
import Router from 'next/router';

// TODO: implement redirection along with putting current content on
// `index.js` to steps folder.
export function middleware(request, event) {
	const { pathname, basePath } = request.nextUrl;
	console.log(basePath);
	// if (pathname == '/') {
	// 	return NextResponse.rewrite(
	// 		new URL('/steps/1_create_account', request.url)
	// 	);
	// const url = request.nextUrl.clone();
	// url.pathname = '/steps/1_create_account';
	// return NextResponse.rewrite(url);
	// return NextResponse.redirect('/');
	// return NextResponse.rewrite('/steps/1_create_account');
	// return NextResponse.redirect('/steps/1_create_account');
	// return Router.push(`/steps/1_create_account`);
	// }
	return NextResponse.next();
}

// TODO: if user returns to the home url, we can redirect him to
// the last step he took.
const Allowance = () => {
	const stepsRequired = ['create_account', 'submit_credit_card_info'];
};

/**
 * Check if step is notrequired a
 * @param {string} step
 * @param {array} stepsRequired
 * @returns
 */
function isAllowed(step, stepsRequired) {
	return stepsRequired.includes(step) == false;
}
