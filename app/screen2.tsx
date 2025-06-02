import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import S from "@/assets/images/console-1.png";
import X from "@/assets/images/console-2.png";

export default function ConsoleScreen() {
  return (
    <View style={styles.container}>
      <Image source={S} style={styles.img} />
      <Text style={styles.title}>
        XBOX SERIES S
      </Text>
      <Text style={styles.description}>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
      <Text style={{textAlign: 'center', maxWidth:350}}>O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance.</Text>
      <Image source={X} style={styles.img} />
      <Text style={styles.title}>
     XBOX SERIES X
      </Text>
      <Text style={styles.description}>O Xbox mais rápido e poderoso de todos os tempos.</Text>
      <Text style={{textAlign: 'center', maxWidth:350}}>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f6f6",
  },
  img: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#107c0f",
    marginBottom: 10,
  },
  description: {
    color: "black",
    width: 350,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 16
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
