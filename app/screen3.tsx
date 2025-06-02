import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Cyber from "@/assets/images/jogo-2.png";
import Horizon from "@/assets/images/jogo-3.png";
import Halo from "@/assets/images/jogo-4.png";

export default function GameScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#171717", paddingTop: 20 }}>
      <View style={styles.container}>
        <Text style={styles.title}> Jogos em 4k</Text>
        <Text style={styles.description}>
          Os principais jogos estão aqui. Veja abaixo três exemplos de grande
          sucesso.
        </Text>
        <ImageBackground source={Cyber} style={styles.img}>
          <Text style={styles.subtitle}> Cyberpunk 2077</Text>
        </ImageBackground>

        <Text style={[styles.description, { textAlign: "justify" }]}>
          Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e
          publicado pela CD Projekt.
        </Text>
        <ImageBackground source={Horizon} style={styles.img}>
          <Text style={styles.subtitle}> Forza Horizon 5</Text>
        </ImageBackground>

        <Text style={[styles.description, { textAlign: "justify" }]}>
          Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza
          Horizon e o décimo segundo título principal da franquia Forza. O jogo
          se passa em uma representação ficcional do México.
        </Text>
        <ImageBackground source={Halo} style={styles.img}>
          <Text style={styles.subtitle}> Halo 5</Text>
        </ImageBackground>

        <Text style={[styles.description, { textAlign: "justify" }]}>
          Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da
          franquia Halo e sequência de Halo 4.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#171717",
  },
  img: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#107c0f",
    marginBottom: 10,
  },
  subtitle: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(82,81,82, 0.7)",
  },
  description: {
    color: "white",
    width: 300,
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
