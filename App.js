import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Screens/Home/Home";
import { Login } from "./src/Screens/Login/Login";
import { ContextProvider } from "./src/context/Context";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<ContextProvider>
				<Stack.Navigator>
					<Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</ContextProvider>
		</NavigationContainer>
	);
}

export default App;
