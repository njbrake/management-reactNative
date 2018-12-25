/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './store';
import config from './config/keys';
import RouterComponent from './Router';

export default class App extends Component {
	componentWillMount() {
		firebase.initializeApp(config);
	}
	render() {
		return (
			<Provider store={store}>
				<RouterComponent />
			</Provider>
		);
	}
}
