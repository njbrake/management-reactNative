/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './store';
import config from './config/keys';
import RouterComponent from './Router';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

type Props = {};
export default class App extends Component<Props> {
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});
