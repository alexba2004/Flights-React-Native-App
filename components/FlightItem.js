import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FlightItem = ({ item, deleteProd, navigation }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.description}>VUELO</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.textItem}>Asiento: {item.seat}</Text>
        <Text style={styles.textItem}>Origen: {item.origin}</Text>
        <Text style={styles.textItem}>Destino: {item.destiny}</Text>
        <Text style={styles.textItem}>Fecha: {item.date}</Text>
        <Text style={styles.textItem}>Tiempo: {item.time}</Text>
        <Text style={styles.textItem}>Precio del boleto: {item.cost}</Text>
        <Text style={styles.textItem}>Activo: {item.status ? "si" : "no"}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => {
            navigation.navigate("EditFlightFormScreen", { item: item });
          }}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => deleteProd(item.seat)}
        >
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#314D70", // Color de fondo azul
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  cardHeader: {
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    paddingBottom: 5,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", // Texto blanco para destacar sobre el fondo azul
  },
  cardBody: {
    marginBottom: 5,
  },
  textItem: {
    fontSize: 14,
    color: "#fff", // Texto blanco para destacar sobre el fondo azul
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonEdit: {
    backgroundColor: "#3D7EAA", // Color de botón azul oscuro
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "45%",
  },
  buttonDelete: {
    backgroundColor: "#F1480F", // Color de botón naranja-rojizo
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "45%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FlightItem;
