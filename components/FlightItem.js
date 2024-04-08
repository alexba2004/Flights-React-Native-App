import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as VectorIcons from "react-native-vector-icons";

const FlightItem = ({ item, deleteProd, navigation }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.description}>
          VUELO <VectorIcons.Fontisto name="plane" size={30} color="#900" />
        </Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.textItem}>
          <VectorIcons.MaterialCommunityIcons
            name="car-seat"
            size={20}
            color="#900"
          />
          Asiento: {item.seat}
        </Text>
        <Text style={styles.textItem}>
          <VectorIcons.Ionicons
            name="location-outline"
            size={20}
            color="#900"
          />
          Origen: {item.origin}
        </Text>
        <Text style={styles.textItem}>
          <VectorIcons.Ionicons name="location" size={20} color="#900" />
          Destino: {item.destiny}
        </Text>
        <Text style={styles.textItem}>
          <VectorIcons.Fontisto name="date" size={20} color="#900" />
          Fecha: {item.date}
        </Text>
        <Text style={styles.textItem}>
          <VectorIcons.Ionicons name="time" size={20} color="#900" />
          Tiempo: {item.time}
        </Text>
        <Text style={styles.textItem}>
          <VectorIcons.MaterialIcons
            name="attach-money"
            size={20}
            color="#900"
          />
          Precio del boleto: {item.cost}
        </Text>
        <Text style={styles.textItem}>
          <VectorIcons.FontAwesome name="adjust" size={20} color="#900" />
          Activo: {item.status ? "si" : "no"}
        </Text>
        <VectorIcons.AntDesign name="qrcode" size={100} color="#900" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => {
            navigation.navigate("EditFlightFormScreen", { item: item });
          }}
        >
          <Text style={styles.buttonText}>
            Editar
            <VectorIcons.Entypo name="pencil" size={18} color="#900" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => deleteProd(item.seat)}
        >
          <Text style={styles.buttonText}>
            Eliminar
            <VectorIcons.Entypo name="trash" size={18} color="#900" />
          </Text>
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
