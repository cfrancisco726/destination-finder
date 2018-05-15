import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ReactDOM.render(<App />, document.querySelector('#root'));

ReactDOM.render(
	<App />,
	// created a redux store an hooked up to react side of app by placing provider tag
	// provider tag knows how to read changes from our redux store
	// anytime the redux store gets new state produced inside it the provider will inform all its children components App and update with new state
	document.querySelector('#root')
);
