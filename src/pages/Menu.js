import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../App';

export default function Menu({ navigation }) {
	const { signOut, user } = useContext(AuthContext);
	return (
		<View style={styles.container}>
			<Image source={require('../../assets/logo.png')} style={styles.image} />
			<TouchableOpacity style={styles.roundButton1}>
				<Image
					source={require('../../assets/bulb.png')}
					style={styles.image2}
				/>
			</TouchableOpacity>
			<Text style={styles.text1}>My Learning</Text>
			<TouchableOpacity style={styles.roundButton2}>
				<Image
					source={require('../../assets/calendar.png')}
					style={styles.image2}
				/>
			</TouchableOpacity>
			<Text style={styles.text2}>What's On</Text>
			<TouchableOpacity style={styles.roundButton3}>
				<Image
					source={require('../../assets/union.png')}
					style={styles.image2}
				/>
			</TouchableOpacity>
			<Text style={styles.text3}>Students' Union</Text>
			<TouchableOpacity style={styles.roundButton4}>
				<Image
					source={require('../../assets/finder.png')}
					style={styles.image2}
				/>
			</TouchableOpacity>
			<Text style={styles.text4}>Finder</Text>
			<TouchableOpacity style={styles.roundButton5}>
				<Image
					source={require('../../assets/maps.png')}
					style={styles.image2}
				/>
			</TouchableOpacity>
			<Text style={styles.text5}>Maps</Text>
			<TouchableOpacity style={styles.roundButton6}>
				<Image
					source={require('../../assets/travel.png')}
					style={styles.image2}
				/>
			</TouchableOpacity>
			<Text style={styles.text6}>Travel</Text>
			<TouchableOpacity style={styles.roundButton7}>
				<Image
					source={require('../../assets/info.png')}
					style={styles.image2}
				/>
			</TouchableOpacity>
			<Text style={styles.text7}>Essential Info</Text>
			<TouchableOpacity style={styles.roundButton8}>
				<Image
					source={require('../../assets/message.png')}
					style={styles.image2}
				/>
			</TouchableOpacity>
			<Text style={styles.text8}>Messages</Text>
			<TouchableOpacity
				style={styles.roundButton9}
				onPress={() => navigation.navigate('Wallet')}
			>
				<Image
					source={require('../../assets/wallet.png')}
					style={styles.image2}
				/>
			</TouchableOpacity>
			<Text style={styles.text9}>Digital Wallet</Text>
			<TouchableOpacity
				style={styles.logoutbtn}
				onPress={() => {
					signOut(user);
				}}
			>
				<Text style={{ textAlignVertical: 'center', textAlign: 'center' }}>
					LOG OUT
				</Text>
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

	logoutbtn: {
		width: 100,
		borderRadius: 30,
		height: 20,
		top: 5,
		right: 10,
		position: 'absolute',
		marginTop: 40,
		backgroundColor: '#9C9494',
	},

	image2: {
		width: 50,
		height: 50,
	},

	image: {
		width: 200,
		height: 150,
		bottom: 100,
		top: 20,
		position: 'absolute',
	},

	roundButton1: {
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'white',
		position: 'absolute',
		top: 200,
		left: 20,
	},

	roundButton2: {
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'white',
		position: 'absolute',
		top: 200,
		left: 160,
	},

	roundButton3: {
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'white',
		position: 'absolute',
		top: 200,
		left: 300,
	},

	roundButton4: {
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'white',
		position: 'absolute',
		top: 350,
		left: 20,
	},

	roundButton5: {
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'white',
		position: 'absolute',
		top: 350,
		left: 160,
	},

	roundButton6: {
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'white',
		position: 'absolute',
		top: 350,
		left: 300,
	},

	roundButton7: {
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'white',
		position: 'absolute',
		top: 500,
		left: 20,
	},

	roundButton8: {
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'white',
		position: 'absolute',
		top: 500,
		left: 160,
	},

	roundButton9: {
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'white',
		position: 'absolute',
		top: 500,
		left: 300,
	},

	text1: {
		color: 'white',
		position: 'absolute',
		top: 275,
		left: 20,
	},

	text2: {
		color: 'white',
		position: 'absolute',
		top: 275,
		left: 167,
	},

	text3: {
		color: 'white',
		position: 'absolute',
		top: 275,
		left: 288,
	},

	text4: {
		color: 'white',
		position: 'absolute',
		top: 425,
		left: 38,
	},

	text5: {
		color: 'white',
		position: 'absolute',
		top: 425,
		left: 180,
	},

	text6: {
		color: 'white',
		position: 'absolute',
		top: 425,
		left: 318,
	},

	text7: {
		color: 'white',
		position: 'absolute',
		top: 575,
		left: 18,
	},

	text8: {
		color: 'white',
		position: 'absolute',
		top: 575,
		left: 167,
	},

	text9: {
		color: 'white',
		position: 'absolute',
		top: 575,
		left: 300,
	},
});
