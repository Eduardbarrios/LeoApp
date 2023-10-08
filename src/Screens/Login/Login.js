import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Image } from "react-native-elements";
import { Context } from "../../context/Context";
import Logo from "../../assets/LogoComercio.png";

//importacion de herramienta para la validación de formularios
import { useFormik } from "formik";
import * as Yup from "yup";
import { userDetails, user } from "../../Utils/dataBaseMook";

function Login({ navigation }) {
	const { setCurrentUser } = useContext(Context);
	const [error, setError] = useState("");
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object(validationSchema()),
		validateOnChange: false,
		onSubmit: (userInfo) => {
			setError("");
			const { email, password } = userInfo;
			loginFn(userInfo);
			/* if (email !== user.email || password !== user.password) {
				setError("El usuario o la contaseña no son correctos");
			} else {
				formik.setFieldValue("email", "");
				formik.setFieldValue("password", "");
				navigation.navigate("Home");
				setCurrentUser(userDetails);
			} */
		},
	});
	return (
		<View style={style.loginView}>
			<Text style={style.title}>Login</Text>
			<View style={style.formView}>
				<TextInput
					style={style.input}
					placeholder="Email"
					keyboardType="email-address"
					value={formik.values.email}
					onChangeText={(text) => formik.setFieldValue("email", text)}
				/>
				<TextInput
					style={style.input}
					placeholder="Password"
					secureTextEntry={true}
					value={formik.values.password}
					onChangeText={(text) => formik.setFieldValue("password", text)}
				/>
				<Pressable title="Login" onPress={formik.handleSubmit}>
					<Text style={style.button}>Login</Text>
				</Pressable>
			</View>
			<Text style={style.error}>
				{formik.errors.email}
				{"\n"}
				{error}
				{"\n"}
				{formik.errors.password}
			</Text>
		</View>
	);
}
function validationSchema() {
	return {
		email: Yup.string()
			.email("Ingrese una dirección de correo válido")
			.required("Email no puede estar vacio"),
		password: Yup.string().required("La contraseña es requerida"),
	};
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
		fontWeight: "bold",
		textAlign: "center",
		alignSelf: "center",
		backgroundColor: "#13AFF1",
		padding: 5,
		borderRadius: 10,
	},
	error: {
		textAlign: "center",
		color: "#f00",
		marginTop: 20,
	},
});

export { Login };
