import React from "react";
import { Image, ScrollView, Text,View } from "react-native";

import FotoCapa from '../../assets/foto-capa.jpg'
import Preparacao from '../../assets/preparacao.png'
import rei from '../../assets/rei-da-chuva.png'
import reiM from '../../assets/rei-de-monaco.png'
import silva from '../../assets/silvastone.png'

import styles from './style'

export default function TelaSobre(){
    return(

        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <Text style={styles.TxtTitulo}>Ayrton Senna</Text>
                <Image source={FotoCapa} style={styles.imgCapa}/>
                <Text style={styles.TxtParagrafo}> orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
            
            </View>
            <ScrollView>
                <View style={styles.CardContainer}>
                    <Image source={rei} style={styles.ImgContainer}/>
                    <View style={styles.CardTxt}>
                        <Text style={styles.Txt1}>Rei da chuva</Text>
                        <Text style={styles.Txt2}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</Text>
                    </View>
                </View>

                <View style={styles.CardContainer}>
                    <Image source={reiM} style={styles.ImgContainer}/>
                    <View style={styles.CardTxt}>
                        <Text style={styles.Txt1}>Rei de Monaco</Text>
                        <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</Text>
                    </View>
                </View>

                <View style={styles.CardContainer}>
                    <Image source={silva} style={styles.ImgContainer}/>
                    <View style={styles.CardTxt}>
                        <Text style={styles.Txt1}>silvastone</Text>
                        <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </Text>
                    </View>
                </View>

                <View style={styles.CardContainer}>
                    <Image source={Preparacao} style={styles.ImgContainer}/>
                    <View style={styles.CardTxt}>
                        <Text style={styles.Txt1}>Preparacao</Text>
                        <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}
