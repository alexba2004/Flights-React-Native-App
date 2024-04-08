import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Switch,
} from "react-native";
import { updateFlight } from "../api";
import * as VectorIcons from "react-native-vector-icons";

const EditFlightFormScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const [flight, setFlight] = useState({
    seat: item.seat,
    origin: item.origin,
    destiny: item.destiny,
    date: item.date,
    time: item.time,
    cost: item.cost.toString(),
    status: item.status.toString(),
  });

  const handleChange = (name, value) => {
    setFlight({ ...flight, [name]: value });
  };

  const handleEnviarFormulario = async () => {
    const res = await updateFlight(flight.seat, flight);
    console.log(res);
    console.log(JSON.stringify(flight));
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Editar Vuelo{"  "}
        <VectorIcons.Fontisto name="plane" size={30} color="#900" />
      </Text>
      <TextInput
        placeholder="Asiento"
        onChangeText={(text) => handleChange("seat", text)}
        style={styles.input}
        value={flight.seat}
      />
      <TextInput
        placeholder="Origen"
        onChangeText={(text) => handleChange("origin", text)}
        style={styles.input}
        value={flight.origin}
      />
      <TextInput
        placeholder="Destino"
        onChangeText={(text) => handleChange("destiny", text)}
        style={styles.input}
        value={flight.destiny}
      />
      <TextInput
        placeholder="Date"
        onChangeText={(text) => handleChange("date", text)}
        style={styles.input}
        value={flight.date}
      />
      <TextInput
        placeholder="Tiempo"
        onChangeText={(text) => handleChange("time", text)}
        style={styles.input}
        value={flight.time}
      />
      <TextInput
        placeholder="Precio del boleto"
        keyboardType="numeric"
        onChangeText={(text) => handleChange("cost", text)}
        style={styles.input}
        value={flight.cost}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Inactivo</Text>
        <Switch
          value={flight.status === "1"} // Convierte a booleano
          onValueChange={(value) => handleChange("status", value ? "1" : "0")} // Convierte a cadena
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
    backgroundColor: "#314D70", // Color de fondo azul oscuro
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff", // Texto blanco para destacar sobre el fondo azul
  },
  input: {
    height: 40,
    borderColor: "#3D7EAA",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#fff", // Texto negro para mejor legibilidad
    backgroundColor: "#3D7EAA", // Fondo blanco para los campos de entrada
  },
  switchContainer: {
    fontSize: 500,
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

export default EditFlightFormScreen;
