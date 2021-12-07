import * as React from "react";
import { StyleSheet } from "react-native";
import { Screen, Text, View } from "../components/Themed";

export default function NotificationScreen() {
  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Notication</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
