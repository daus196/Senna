import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import Fundo from "../../assets/fundo.jpg";
import styles from "./style";

import Capa from "../../assets/foto-capa.jpg";

export default function TelaInicio() {
  return (
    <ImageBackground blurRadius={5} style={styles.container} source={Fundo}>
      <Image style={styles.ImgCapa} source={Capa} />

      <View style={styles.boxParagrafo}>
        <Text style={styles.texto}>Ayrton senna</Text>

        <Text style={styles.texto2}>
          {" "}
          atraves desse app, voce vai conhecer um pouco sobre quem foi esse
          grande piloto
        </Text>
      </View>
    </ImageBackground>
  );
}
