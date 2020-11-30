import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	ScrollView,
	Button,
	TouchableOpacity,
} from 'react-native';
import { AppLoading } from 'expo';
import { FontAwesome5 } from '@expo/vector-icons';

import DefaultStyles from './default-styles';
import * as Font from 'expo-font';

const fetchFonts = () => {
	return Font.loadAsync({
		'grandstander': require('./assets/fonts/Grandstander-Regular.ttf'),
	});
};

export default function App() {
	const [newTodo, setNewTodo] = useState('');
	const [todos, setTodos] = useState(['Orange juice', 'Cheese', 'Carrots']);
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	const handleAdd = () => {
		if (newTodo === '') return;
		setTodos([...todos, newTodo]);
		setNewTodo('');
	};

	const handleDelete = (todoValue) => {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo !== todoValue);
		});
	};

	return (
		<View style={DefaultStyles.Todo}>
			<Text style={DefaultStyles.Todo__Heading}>Shopping List</Text>
			<View style={DefaultStyles.Todo__Container}>
				<View style={DefaultStyles.Todo__Form}>
					<TextInput
						style={DefaultStyles.Todo__Input}
						value={newTodo}
						placeholder='Enter todo'
						onChangeText={(text) => setNewTodo(text)}
					/>
					<View style={DefaultStyles.Todo__Button}>
						<Button title='ADD' onPress={handleAdd} color='white' />
					</View>
				</View>
				<View style={DefaultStyles.Todo__List}>
					<ScrollView>
						{todos.map((todo, key) => (
							<TouchableOpacity
								key={key}
								activeOpacity={0.6}
								onPress={() => handleDelete(todo)}>
								<View style={DefaultStyles.Todo__ItemContainer}>
									<FontAwesome5
										name='trash-alt'
										size={20}
										color='black'
										style={DefaultStyles.Todo__Trash}
									/>
									<Text style={DefaultStyles.Todo__Item}>{todo}</Text>
								</View>
								<View style={DefaultStyles.Todo__DashContainer}>
									<View style={DefaultStyles.Todo__ItemDash}></View>
								</View>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
			</View>
			<View style={DefaultStyles.Todo__Completed}>
				<Button color='hsl(175, 50%, 40%)' title='Show Completed' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
