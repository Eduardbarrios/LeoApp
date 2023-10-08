import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Image } from "react-native-elements";
import { Context } from "../../context/Context";
import Logo from "../../assets/LogoComercio.png";
const ima = require("../../assets/LogoComercio.png");
//importacion de herramienta para la validación de formularios
import { useFormik } from "formik";
import * as Yup from "yup";
import { userDetails, user } from "../../Utils/dataBaseMook";

function SignUp({ navigation }) {
	const { setCurrentUser, setNewUserData, newUserData, createUserFn } =
		useContext(Context);
	const formik = useFormik({
		initialValues: {
			primer_nombre: "",
			segundo_nombre: "",
			primer_apellido: "",
			segundo_apellido: "",
			numero_telefono: "",
			correo_electronico: "",
			numero_cedula: "",
			password: "",
			direccion: "",
		},
		validationSchema: Yup.object(validationSchema()),
		validateOnChange: false,
		onSubmit: (values) => {
			console.log("1");
			setNewUserData(values);
			newUserData && createUserFn(newUserData);
		},
	});
	return (
		<View style={style.loginView}>
			<View style={style.hero}>
				<Image source={ima} style={{ width: 200, height: 200 }} />
			</View>
			<View style={style.formView}>
				<Text style={style.title}>Registrate</Text>
				<TextInput
					style={style.input}
					placeholder="Primer nombre"
					keyboardType="default"
					value={formik.values.primer_nombre}
					onChangeText={(text) => {
						formik.setErrors({});
						formik.setFieldValue("primer_nombre", text);
					}}
				/>
				<TextInput
					style={style.input}
					placeholder="Segundo nombre"
					keyboardType="default"
					value={formik.values.segundo_nombre}
					onChangeText={(text) => {
						formik.setErrors({});
						formik.setFieldValue("segundo_nombre", text);
					}}
				/>
				<TextInput
					style={style.input}
					placeholder="Primer apellido"
					keyboardType="default"
					value={formik.values.primer_apellido}
					onChangeText={(text) => {
						formik.setErrors({});
						formik.setFieldValue("primer_apellido", text);
					}}
				/>
				<TextInput
					style={style.input}
					placeholder="Segundo apellido"
					keyboardType="default"
					value={formik.values.segundo_apellido}
					onChangeText={(text) => {
						formik.setErrors({});
						formik.setFieldValue("segundo_apellido", text);
					}}
				/>
				<TextInput
					style={style.input}
					placeholder="Numero de celular"
					keyboardType="phone-pad"
					value={formik.values.numero_telefono}
					onChangeText={(text) => {
						formik.setErrors({});
						formik.setFieldValue("numero_telefono", text);
					}}
				/>
				<TextInput
					style={style.input}
					placeholder="Numero de identificación"
					keyboardType="numeric"
					value={formik.values.numero_cedula}
					onChangeText={(text) => {
						formik.setErrors({});
						formik.setFieldValue("numero_cedula", text);
					}}
				/>
				<TextInput
					style={style.input}
					placeholder="Dirección"
					keyboardType="default"
					value={formik.values.direccion}
					onChangeText={(text) => {
						formik.setErrors({});
						formik.setFieldValue("direccion", text);
					}}
				/>
				<TextInput
					style={style.input}
					placeholder="Email"
					keyboardType="email-address"
					value={formik.values.correo_electronico}
					onChangeText={(text) => {
						formik.setErrors({});
						formik.setFieldValue("correo_electronico", text);
					}}
				/>
				<TextInput
					style={style.input}
					placeholder="Contraseña"
					secureTextEntry={true}
					value={formik.values.password}
					onChangeText={(text) => {
						formik.setErrors({});
						formik.setFieldValue("password", text);
					}}
				/>
				<Pressable title="Login" onPress={formik.handleSubmit}>
					<Text style={style.button}>Sign Up</Text>
				</Pressable>
			</View>
			<Text style={style.error}>
				{formik.errors.primer_nombre ||
					formik.errors.primer_apellido ||
					formik.errors.numero_telefono ||
					formik.errors.numero_cedula ||
					formik.errors.direccion ||
					formik.errors.correo_electronico ||
					formik.errors.password}
			</Text>
		</View>
	);
}
const validationSchema = () => {
	return {
		primer_nombre: Yup.string().required("El primer nombre es obligatorio"),
		segundo_nombre: Yup.string(),
		primer_apellido: Yup.string().required("El primer apellido es obligatorio"),
		segundo_apellido: Yup.string(),
		numero_telefono: Yup.string()
			.matches(/^[3][0-9]{9}$/, "Ingrese un número de teléfono válido")
			.required("El número de telefono es obligatorio"),
		correo_electronico: Yup.string()
			.email("Ingrese una dirección de correo válida")
			.required("El correo electrónico es obligatorio"),
		numero_cedula: Yup.string().required("El número de cédula es obligatorio"),
		password: Yup.string().required("La contraseña es obligatoria"),
		direccion: Yup.string().required("La dirección es obligatoria"),
	};
};
const style = StyleSheet.create({
	hero: {
		width: "100%",
		height: "50%",
		alignItems: "center",
		position: "absolute",
		top: 0,
		backgroundColor: "#000000",
	},
	loginView: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},

	title: {
		fontSize: 50,
		fontWeight: "bold",
		paddingBottom: 10,
	},
	formView: {
		zIndex: 1,
		width: "100%",
		height: "75%",
		alignItems: "center",
		position: "absolute",
		top: 190,
		paddingTop: 30,
		backgroundColor: "white",
		borderTopLeftRadius: 80,
		borderTopRightRadius: 80,
		justifyContent: "space-between",
	},
	input: {
		fontSize: 20,
		width: "80%",
		borderColor: "#282727",
		borderWidth: 1,
		borderRadius: 10,
		paddingLeft: 15,
	},
	button: {
		width: "70%",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		alignSelf: "center",
		backgroundColor: "#FF0000",
		padding: 7,
		borderRadius: 10,
	},
	error: {
		textAlign: "center",
		color: "#f00",
		marginTop: 20,
	},
});

export { SignUp };
