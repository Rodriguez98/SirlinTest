import React from "react";
import { ImageBackground, TouchableOpacity, View, Text, TextInput, StyleSheet } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../img/plantilla.png')} style={styles.image}>
        <View style={styles.viewInputs}>
          <Text style={styles.textInput}> Usuario </Text>
          <TextInput
            style={styles.Input}
            placeholder="Usuario"
          />

          <Text style={styles.textInput}> Contraseña </Text>
          <TextInput
            style={styles.Input}
            placeholder="Contraseña"
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
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#2c2c2c',
    borderRadius: 15,
    width: "100%",

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
    backgroundColor: 'black',
    width: '40%',
    height: '5%',
  },
  textInput: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'red',
    marginTop: 10,
    marginBottom: 6,
    marginLeft: 9,
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'red',
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