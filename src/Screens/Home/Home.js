import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Context } from "../../context/Context";

function HomeScreen({ navigation }) {
	const { userInfo } = useContext(Context);
	return (
		<View style={styles.container}>
			{userInfo && (
				<View style={styles.info}>
					<Text style={styles.saludo}>
						Hola, {`${userInfo.firstName} ${userInfo.lastName}`}
					</Text>
					<Text style={styles.saldo}>
						Saldo:{" "}
						<Text style={styles.cop}>
							{userInfo.saldoActual.toLocaleString("es-CO", {
								style: "currency",
								currency: "COP",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
							})}
						</Text>
					</Text>

					<Text>Gracias por confiar en nosotros</Text>
				</View>
			)}
			<Pressable title="SingOut" onPress={() => navigation.goBack("Login")}>
				<Text style={styles.button}>salir</Text>
			</Pressable>
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
	info: {
		width: "90%",
		alignItems: "center",
	},
	saludo: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 15,
	},
	saldo: {
		fontSize: 25,
		fontWeight: "600",
		marginBottom: 10,
	},
	cop: {
		fontWeight: "normal",
	},
	button: {
		width: "100%",
		fontSize: 20,
		fontWeight: "600",
		textAlign: "center",
		alignSelf: "center",
		backgroundColor: "#13AFF1",
		marginTop: 30,
		padding: 5,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 10,
	},
});
export { HomeScreen };
