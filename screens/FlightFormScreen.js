import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Switch,
} from "react-native";
import { insertFlight } from "../api";

const FlightFormScreen = ({ navigation }) => {
  const [flight, setFlight] = useState({
    seat: "",
    origin: "",
    destiny: "",
    date: "",
    time: "",
    cost: 0,
    status: false, // Cambiado a false para representar "inactivo" por defecto
  });

  const handleChange = (name, value) => setFlight({ ...flight, [name]: value });

  const handleEnviarFormulario = async () => {
    const res = await insertFlight(flight);
    console.log(JSON.stringify(flight));
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nuevo Vuelo</Text>
      <TextInput
        placeholder="Asiento"
        onChangeText={(text) => handleChange("seat", text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Origen"
        onChangeText={(text) => handleChange("origin", text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Destino"
        onChangeText={(text) => handleChange("destiny", text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Fecha"
        onChangeText={(text) => handleChange("date", text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Hora"
        onChangeText={(text) => handleChange("time", text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Precio del boleto"
        keyboardType="numeric"
        onChangeText={(text) => handleChange("cost", parseInt(text))}
        style={styles.input}
      />
      {/* Interruptor para el estado */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Inactivo</Text>
        <Switch
          value={flight.status}
          onValueChange={(value) => handleChange("status", value)}
        />
        <Text style={styles.switchText}> Activo</Text>
      </View>

      <Button title="Enviar" onPress={handleEnviarFormulario} color="#16A085" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#314D70",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#3D7EAA",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#fff",
    backgroundColor: "#3D7EAA",
  },
  button: {
    padding: 15,
    borderRadius: 5,
    color: "#fff",
    fontWeight: "bold",
    width: "40%",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  switchText: {
    marginRight: 10,
    color: "#fff",
  },
});

export default FlightFormScreen;
