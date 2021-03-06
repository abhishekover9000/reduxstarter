// let's go!
// import react
import React from 'react';
import { render } from 'react-dom';

// import css

import css from './styles/style.styl';

// import component

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-router';
import store, { history } from './store';

// store

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/view/:postId" component={Single}></Route>
		</Route>
	</Router>

)

render(router, document.getElementById('root'));
