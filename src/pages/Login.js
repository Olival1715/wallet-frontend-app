import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './Menu.js';
import { AuthContext } from '../../App';
import { auth } from '../../firebase.js';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';

export default function App({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signIn } = useContext(AuthContext);

	const handleSignUp = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				// Signed in
				const user = userCredential.user;
				// ...
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};

	const handleSignIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				// Signed in
				const user = userCredential.user;
				signIn(user);
				// ...
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};

	return (
		<View style={styles.container}>
			<Image source={require('../../assets/logo.png')} style={styles.image} />
			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Email"
					value={email}
					placeholderTextColor="#003f5c"
					onChangeText={text => setEmail(text)}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Password"
					value={password}
					placeholderTextColor="#003f5c"
					secureTextEntry={true}
					onChangeText={text => setPassword(text)}
				/>
			</View>
			<TouchableOpacity style={styles.loginBtn} onPress={handleSignIn}>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
				<Text style={styles.loginText}>Register</Text>
			</TouchableOpacity>
		</View>
	);
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',
	},

	image: {
		width: 200,
		height: 150,
		bottom: 100,
	},

	inputView: {
		backgroundColor: '#FFFFFF',
		borderRadius: 30,
		width: '70%',
		height: 45,
		marginBottom: 20,
		alignItems: 'center',
	},

	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
	},

	loginBtn: {
		width: '70%',
		borderRadius: 30,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		backgroundColor: '#9C9494',
	},
});
