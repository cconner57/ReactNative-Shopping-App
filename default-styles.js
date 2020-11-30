import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	Todo: {
		alignItems: 'center',
		flex: 1,
	},
	Todo__Heading: {
		textAlign: 'center',
		textDecorationLine: 'underline',
		paddingTop: 50,
		paddingBottom: 15,
		fontSize: 40,
		width: '100%',
		backgroundColor: 'hsl(175, 50%, 65%)',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		fontFamily: 'grandstander',
	},
	Todo__Container: {
		alignItems: 'center',
		height: 500,
		paddingTop: 40,
		paddingHorizontal: 50,
	},
	Todo__Form: {
		flexDirection: 'row',
		alignItems: 'center',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
	},
	Todo__Input: {
		width: 250,
		height: 45,
		paddingVertical: 5,
		backgroundColor: 'white',
		paddingHorizontal: 10,
		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: 'hsl(175, 50%, 40%)',
		borderTopLeftRadius: 7,
		borderBottomLeftRadius: 7,
	},
	Todo__Button: {
		width: 80,
		height: 45,
		borderColor: 'hsl(175, 50%, 40%)',
		backgroundColor: 'hsl(175, 50%, 75%)',
		borderTopWidth: 2,
		borderRightWidth: 2,
		borderBottomWidth: 2,
		borderTopRightRadius: 7,
		borderBottomRightRadius: 7,
	},
	Todo__List: {
		marginVertical: 25,
		height: 550,
		width: 350,
		backgroundColor: 'white',
		borderWidth: 2,
		borderRadius: 7,
		borderColor: 'hsl(175, 50%, 75%)',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
	},
	Todo__ItemContainer: {
		flexDirection: 'row',
		paddingVertical: 10,
		paddingHorizontal: 50,
	},	
	Todo__Trash: {
		marginRight: 10,
	},
	Todo__Item: {
		fontSize: 24,
		fontFamily: 'grandstander',
	},
	Todo__DashContainer: {
		alignItems: 'center'
	},
	Todo__ItemDash: {
		alignItems: 'center',
		width: 175,
		borderStyle: 'solid',
		borderColor: 'grey',
		borderBottomWidth: 2,
	},
	Todo__Completed: {
		marginTop: 180
	}
});
