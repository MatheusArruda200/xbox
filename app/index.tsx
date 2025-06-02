import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "@/assets/images/logo.png";
import Console from "@/assets/images/console-1.png";
import Game from "@/assets/images/jogo-1.png";
import Xcloud from "@/assets/images/xcloud-1.png";
import { router, useRouter } from "expo-router";

export default function InitialApp() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>Xbox</Text>
      <Text style={styles.description}>
        Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para
        conhecer.
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/screen2")}
        style={styles.boxTouch}
      >
        <Image style={styles.img} source={Console} />
        <Text style={{ color: "white", maxWidth: 129, margin: 5 }}>
          Conheça os consoles
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/screen3")}
        style={styles.boxTouch}
      >
        <Image style={styles.img} source={Game} />
        <Text style={{ color: "white", maxWidth: 120, margin: 5 }}>
          Conheça os consoles
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/screen4")}
        style={styles.boxTouch}
      >
        <Image style={styles.img} source={Xcloud} />
        <Text style={{ color: "white", maxWidth: 120, margin: 5 }}>
          Conheça os consoles
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c2e2d",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#107c0f",
    marginBottom: 10,
  },
  description: {
    color: "white",
    width: 350,
    textAlign: "center",
    marginBottom: 20,
  },
  boxTouch: {
    width: 200,
    borderRadius: 10,
    backgroundColor: "#107c0f",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 5,
    justifyContent: "center",
  },
});
