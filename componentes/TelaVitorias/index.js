import React from "react";
import { ImageBackground, ScrollView, Text, View,Image } from "react-native";
import Corrida from "../../assets/corrida1.jpg";
import Vitoria1 from "../../assets/vitoria1.jpg";
import Vitoria2 from "../../assets/vitoria2.jpg";
import Vitoria3 from "../../assets/vitoria3.jpg";

import { Entypo,FontAwesome5 } from '@expo/vector-icons';


import styles from "./style";

export default function TelaVitorias() {
  return (
    <ScrollView>
    <ImageBackground blurRadius={2} style={styles.container} source={Corrida}>
    <View style={styles.Box}>
          <Text style={styles.txt}>Senna em Números</Text>
          <Text style={styles.txt2}>Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole positions.</Text>

          <View style={styles.containerCard}>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text style={styles.destaque}>161</Text>
            <Text style={styles.destaque2}>GPS DISPUTADOS</Text>
          </View>

          <View style={styles.containerCard}>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text style={styles.destaque}>65</Text>
            <Text style={styles.destaque2}>POLE POSITIONS</Text>
          </View>

          <View style={styles.containerCard}>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text style={styles.destaque}>41</Text>
            <Text style={styles.destaque2}>VITÓRIAS</Text>
          </View>

          <View style={styles.containerCard}>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text style={styles.destaque}>3X</Text>
            <Text style={styles.destaque2}>CAMPEÃO MUNDIAL</Text>
          </View>
        </View>

        <View style={styles.containerBox}>
          <Text style={styles.txtBox}>Campeonato Mundial – 1988</Text>
          <Image style={styles.img} source={Vitoria1} />
        </View>

        <View style={styles.containerBox}>
          <Text style={styles.txtBox}>Campeonato Mundial – 1990</Text>
          <Image style={styles.img} source={Vitoria2} />
        </View>

        <View style={styles.containerBox}>
          <Text style={styles.txtBox}>Campeonato Mundial – 1991</Text>
          <Image style={styles.img} source={Vitoria3} />
        </View>
      
    </ImageBackground>
  </ScrollView>
  );
}
