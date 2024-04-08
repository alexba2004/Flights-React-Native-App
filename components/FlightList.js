import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FlightItem from "./FlightItem";
import { deleteFlight, getFlights } from "../api";

const FlightList = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [flights, setFlights] = useState([]);

  const loadFlights = async () => {
    const data = await getFlights();
    setFlights(data);
  };

  const deleteProd = async (seat) => {
    const res = await deleteFlight(seat);
    await loadFlights();
    console.log(JSON.stringify(res));
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadFlights();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    loadFlights();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <FlightItem item={item} deleteProd={deleteProd} navigation={navigation} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={flights}
        renderItem={renderItem}
        keyExtractor={(item) => item.seat}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={["#6c757d"]}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa", // Color de fondo blanco/gris claro
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default FlightList;
