import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Cards, Screen, ScreenView } from "../components/Themed";
import { HomeStackNavProps } from "../types";
import { spacing } from "../constants/Layout";

type deliveryProcess = {
  number: string;
  isCod: boolean;
  addressFrom: string;
  addressTo: string;
};

type promo = {
  image: string;
  key: string;
};

export default function HomeScreen({
  route,
  navigation,
}: HomeStackNavProps<"Home">) {
  const delProcessData: deliveryProcess[] = [
    {
      number: "TR00012342",
      isCod: false,
      addressFrom: "Jl Sudirma 32, Jombang",
      addressTo: "Jl Melati, Jombang",
    },
    {
      number: "TR00012389",
      isCod: true,
      addressFrom: "Jl Soetomo 32, Jombang",
      addressTo: "Jl Gajah, Jombang",
    },
    {
      number: "TR00012319",
      isCod: true,
      addressFrom: "Jl Soetomo 32, Jombang",
      addressTo: "Jl Gajah, Jombang",
    },
    {
      number: "TR00012349",
      isCod: true,
      addressFrom: "Jl Soetomo 32, Jombang",
      addressTo: "Jl Gajah, Jombang",
    },
  ];

  const promoData: promo[] = [
    {
      image: "https://via.placeholder.com/400x250",
      key: "promo1",
    },
    {
      image: "https://via.placeholder.com/400x250",
      key: "promo2",
    },
    {
      image: "https://via.placeholder.com/400x250",
      key: "promo3",
    },
    {
      image: "https://via.placeholder.com/400x250",
      key: "promo4",
    },
  ];

  const [delProcess] = useState<deliveryProcess[]>(delProcessData);
  const [promo] = useState<promo[]>([]);

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Greeting */}
        <ScreenView style={{ marginBottom: spacing }}>
          <View
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
            ]}
          >
            <View>
              <Text style={{ color: "gray", fontSize: 12 }}>
                Selamat Datang,{" "}
              </Text>
              <Text style={styles.greetingText}>Briand</Text>
            </View>
            <View>
              <Ionicons
                name="person-circle-outline"
                size={40}
                color="#536162"
              />
            </View>
          </View>
        </ScreenView>

        {/* Searching */}
        <ScreenView style={{ marginBottom: spacing }}>
          <View
            style={styles.searchContainer}
            onTouchStart={() => navigation.push("Search")}
          >
            <Ionicons
              style={styles.searchIcon}
              name="search"
              size={15}
              color="darkgray"
            />
            <View style={styles.searchText}>
              <Text style={{ color: "darkgray" }}>Lacak pengirimanmu ...</Text>
            </View>
          </View>
        </ScreenView>

        {/* Service */}
        <ScreenView style={{ marginBottom: 25 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Nikmati layanan kami
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Sameday")}
              activeOpacity={0.9}
            >
              <Cards
                style={{
                  elevation: 5,
                  padding: 20,
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/images/delivery-box.png")}
                    style={{ width: 60, height: 60 }}
                  ></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 15 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Same Day
                  </Text>
                  <Text style={{ fontSize: 13, color: "black" }}>
                    Gratis pengambilan barang dan barang dikirim hari ini juga
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                  }}
                >
                  <Ionicons name="chevron-forward-outline" size={18}></Ionicons>
                </View>
              </Cards>
            </TouchableOpacity>
          </View>
        </ScreenView>

        {/* Promo? */}

        {/* Delivery on process */}
        <ScreenView>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Pengiriman sedang berjalan
            </Text>
          </View>
          {delProcess.map((item) => (
            <View key={item.number}>
              <Card
                style={{
                  elevation: 5,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  justifyContent: "center",
                }}
              >
                <View>
                  <View
                    style={{
                      marginBottom: 5,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          color: "#0061a8",
                        }}
                      >
                        {item.number}
                      </Text>
                    </View>
                    <View>
                      {item.isCod ? (
                        <Text
                          style={{
                            paddingVertical: 2,
                            paddingHorizontal: 5,
                            backgroundColor: "#29bb89",
                            borderRadius: 5,
                            fontSize: 10,
                            color: "#fff",
                            fontWeight: "bold",
                          }}
                        >
                          COD
                        </Text>
                      ) : null}
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 5,
                    }}
                  >
                    <View style={{}}>
                      <Ionicons
                        name="location-outline"
                        size={15}
                        color="#1e6f5c"
                      />
                    </View>
                    <View style={{ paddingHorizontal: 5 }}>
                      <Text style={{ color: "#878787" }}>
                        {item.addressFrom}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <Ionicons
                        name="navigate-outline"
                        size={15}
                        color="#ce1212"
                      />
                    </View>
                    <View style={{ paddingHorizontal: 5 }}>
                      <Text style={{ color: "#878787" }}>{item.addressTo}</Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          ))}
        </ScreenView>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderColor: "#d4d4d4",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  searchText: {
    flex: 1,
    justifyContent: "center",
    height: 40,
    paddingLeft: 10,
  },
  searchIcon: {
    paddingTop: 2,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0061a8",
  },
  greetingSubText: {
    fontSize: 15,
    color: "#808080",
  },
});
