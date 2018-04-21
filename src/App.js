import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from './components/common';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk'; //middleware
import Router from './Router';

class App extends Component {

	componentWillMount() {
		var config = {
			apiKey: 'AIzaSyAWeGeMIt2En-cDBqoy9R1LwNwv8PGDFJA',
			authDomain: 'manager-1613c.firebaseapp.com',
			databaseURL: 'https://manager-1613c.firebaseio.com',
			projectId: 'manager-1613c',
			storageBucket: 'manager-1613c.appspot.com',
			messagingSenderId: '597230856570'
		};

		firebase.initializeApp(config);
	}

  render() {

		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
			<Provider store={store}>
				<Router />
			</Provider>
    );
  }
}

export default App;