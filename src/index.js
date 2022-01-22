import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setConfig } from 'react-google-translate'

setConfig({
	clientEmail: process.env.REACT_APP_GCP_CLIENT_EMAIL ?? '',
	privateKey: process.env.REACT_APP_GCP_PRIVATE_KEY ?? '',
	projectId: process.env.REACT_APP_GCP_PROJECT_ID ?? ''
})

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
