import React from "react";
import { ImageBackground, Image, TouchableOpacity, View, Text, TextInput, StyleSheet } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../img/plantilla.png')} style={styles.image}>
        <View style={styles.viewInputs}>
          <Text style={styles.textInput}> Usuario </Text>
          <TextInput
            style={styles.Input}
            placeholder="Usuario"
            placeholderTextColor= 'pink'
          />

          <Text style={styles.textInput}> Contraseña </Text>
          <TextInput
            style={styles.Input}
            placeholder="Contraseña"
            placeholderTextColor= 'pink'
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Traductor')}>

          <Text style={styles.text}> Entrar </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInputs: {
    // flexDirection: 'row',
    marginTop: '15%',
  },
  Input: {
    height: 70,
    borderWidth: 1.5,
    borderColor: '#4B7EFB',
    borderRadius: 15,
    width: "94%",
    marginLeft: '2%',

    marginBottom: 10,
    color: "white",
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:12,
    paddingHorizontal:32,
    marginTop: '35%',
    marginBottom: '35%',
    marginLeft: '30%',
    marginRight: '35%',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4B7EFB',
    width: '40%',
  },
  textInput: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#EF4E93',
    marginTop: 10,
    marginBottom: 6,
    marginLeft: 9,
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
});

export default Login;