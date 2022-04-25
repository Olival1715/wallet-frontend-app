import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	TouchableOpacity,
	ScrollView,
	Platform,
} from 'react-native';
import React, { useState, Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NfcManager, {
	NfcTech,
	Ndef,
	ByteParser,
} from 'react-native-nfc-manager';

function wallet() {
	return <Text>{'Hello world'}</Text>;
}

export default wallet;
