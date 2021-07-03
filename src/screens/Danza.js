
import React from "react";
import { ImageBackground, Image, TouchableHighlight, View, Text, StyleSheet, Linking } from "react-native";

const Danza = ({ navigation }) => {
    return (
        <ImageBackground source={require('../img/plantilla.png')} style={styles.image}>
            <View>
                <Image style={styles.imageHistoria} source={require('../img/wallagallo.jpg')} />
            </View>
            <View style={styles.viewTextContainer}>
                <Text style={styles.text}> Más información </Text>
                <TouchableHighlight
                    style={styles.textButton}
                    underlayColor={'transparent'}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=zGRk_IzbqUs')}
                >
                    <Text style={styles.textButton}>aquí</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    viewTextContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    text: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#EF4E93',
    },

    textButton: {

        alignItems: 'center',
        alignContent: 'center',
        fontSize: 18,
        letterSpacing: 0.25,
        fontWeight: 'bold',
        color: '#4B7EFB',
        textDecorationLine: 'underline',
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },

    imageHistoria: {
        flex: 2,
        justifyContent: "center",
        width: '20%',
        height: '20%',
    },
});

export default Danza;