import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FlightFormScreen from "./screens/FlightFormScreen";
import HomeScreen from "./screens/HomeScreen";
import EditFlightFormScreen from "./screens/EditFlightFormScreen";
import { TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#253746", // Color de fondo del header
            borderBottomColor: "#16A085", // Color del borde inferior del header
            borderBottomWidth: 2, // Grosor del borde inferior del header
          },
          headerTintColor: "#fff", // Color del texto del header
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Vuelos",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("FlightFormScreen")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginRight: 16,
                    color: "#16A085",
                  }}
                >
                  Nuevo
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="FlightFormScreen"
          component={FlightFormScreen}
          options={{
            title: "Agregar Vuelo",
          }}
        />
        <Stack.Screen
          name="EditFlightFormScreen"
          component={EditFlightFormScreen}
          options={{
            title: "Editar Vuelo",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
