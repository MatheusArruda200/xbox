import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Back from "@/assets/images/fundo-xcloud.png";
import Xcloud from "@/assets/images/xcloud-2.png";

export default function XcloudScreen() {
  return (
    <ImageBackground source={Back} style={{ flex: 1 }} resizeMode="cover" blurRadius={3.2}>
      <View style={styles.container}>
        <Text style={styles.title}>Xbox Cloud Gaming</Text>
        <Text style={styles.subtitle}>Serviço de streaming de jogos</Text>
        <Text style={styles.description}>
          Jogue mais de 100 jogos de console de alta qualidade no seu
          dispositivo favorito.
        </Text>
        <Text style={styles.description}>
          Desktop, Notebook, console ou até mesmo celular pode se tornar um
          XBOX.
        </Text>
        <Text style={styles.description}>
          Através de uma assinatura você terá um XBOX virtual sempre que
          precisar.
        </Text>
        <Image style={styles.img} source={Xcloud} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#107c0f",
    marginBottom: 10,
  },
  subtitle: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    color: "white",
    width: 350,
    textAlign: "center",
    marginBottom: 20,
  },
});
