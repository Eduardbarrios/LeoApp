import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function Login({ navigation }) {
	return (
		<View style={style.loginView}>
			<Text style={style.title}>Login</Text>
			<View style={style.formView}>
				<TextInput
					style={style.input}
					placeholder="Email"
					keyboardType="email-address"
				/>
				<TextInput
					style={style.input}
					placeholder="Password"
					secureTextEntry={true}
				/>
				<Pressable title="Login" onPress={() => navigation.navigate("Home")}>
					<Text style={style.button}>Login</Text>
				</Pressable>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	loginView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		paddingBottom: 50,
	},
	formView: {
		width: "80%",
		height: 200,
		justifyContent: "space-between",
	},
	input: {
		fontSize: 20,
	},
	button: {
		width: "70%",
		fontSize: 20,
		fontFamily: "bold",
		textAlign: "center",
		alignSelf: "center",
		backgroundColor: "#13AFF1",
		padding: 5,
		borderRadius: 10,
	},
});

export { Login };
