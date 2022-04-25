import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wallet from '../pages/Wallet';
import Menu from '../pages/Menu';
import Login from '../pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../../App';

const Stack = createNativeStackNavigator();

function NavigationFlow() {
	const { user } = React.useContext(AuthContext);
	console.log('navigation', user);

	return (
		<NavigationContainer>
			{user.email ? (
				<Stack.Navigator initialRouteName="Menu">
					<Stack.Screen name="Menu" component={Menu} />
					<Stack.Screen name="Wallet" component={Wallet} />
				</Stack.Navigator>
			) : (
				<Stack.Navigator
					initialRouteName="Login"
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name="Login" component={Login} />
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
}

export default NavigationFlow;
