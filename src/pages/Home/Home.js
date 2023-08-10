import { Button, StyleSheet, Text, View } from "react-native";

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
			<Button title="Log out" onPress={() => navigation.goBack("Login")} />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
export { HomeScreen };
