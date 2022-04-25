// In App.js in a new project

import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationFlow from './src/utils/Navigation';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();
export const AuthContext = React.createContext();

function App({ Navigation }) {
	const [user, setUser] = useState({ email: null });

	return (
		<AuthContext.Provider
			value={{
				signIn: async data => {
					// In a production app, we need to send some data (usually username, password) to server and get a token
					// We will also need to handle errors if sign in failed
					// After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
					// In the example, we'll use a dummy token
					//password => data.password

					setUser({ email: data.email });
				},
				signOut: () => {
					setUser({});
				},
				user,
			}}
		>
			<NavigationFlow />
		</AuthContext.Provider>
	);
}

export default App;
