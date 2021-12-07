import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  PermissionsAndroid,
} from "react-native";
import { HomeStackNavProps } from "../../types";

type coordinate = {
  latitude: number;
  longitude: number;
};

const initialCoordinate: coordinate = {
  latitude: 0,
  longitude: 0,
};

export default function ServicesSameday({
  route,
  navigation,
}: HomeStackNavProps<"Sameday">) {
  const [coordinate, setCoordinate] = useState<coordinate>(initialCoordinate);
  const [paddigTop, setPaddingTop] = useState<number>(0);

  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent?.setOptions({
      tabBarVisible: false,
    });

    // get current location
    setCoordinate({
      ...coordinate,
      latitude: -7.533915,
      longitude: 112.233889,
    });

    return () =>
      parent?.setOptions({
        tabBarVisible: true,
      });
  }, []);

  return (
    <MapView
      style={[styles.map, { paddingTop: paddigTop }]}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      followsUserLocation={true}
      showsMyLocationButton={true}
      initialRegion={{
        ...coordinate,
        latitudeDelta: 0.005,
        longitudeDelta: 0.003,
      }}
      onMapReady={() => setPaddingTop(0)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
  },
});
