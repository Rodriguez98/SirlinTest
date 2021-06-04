
import React, { useState } from "react";
import { ImageBackground, Image, TouchableOpacity, TouchableHighlight, View, Text, StyleSheet, TextInput, Clipboard, } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Traductor = ({ navigation }) => {

  return (
    < View style={styles.container}>
      <ImageBackground source={require('../img/plantilla.png')} style={styles.image}>
        <View style={[{ marginLeft: "20%", width: "60%", borderColor: "blue", marginTop: "12%", color: 'black', }, styles.viewPickerSelect]}>
          <RNPickerSelect
            placeholder={{
              label: 'Seleccione un lenguaje',
              value: null,
            }}  
            style={picketSelectStyles}
            //itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Español', value: 'Español' },
              { label: 'Miskitu', value: 'Miskitu' },
              { label: 'Rama', value: 'Rama' },
              { label: 'Mayagna', value: 'Mayagna' },
              { label: 'Ulwa', value: 'Ulwa' },
              { label: 'Garifuna', value: 'Garifuna' },
            ]}
          />

          <RNPickerSelect
            placeholder={{
              label: 'Seleccione un lenguaje',
              value: null,
            }}
            style={picketSelectStyles.inputAndroid}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Español', value: 'Español' },
              { label: 'Miskitu', value: 'Miskitu' },
              { label: 'Rama', value: 'Rama' },
              { label: 'Mayagna', value: 'Mayagna' },
              { label: 'Ulwa', value: 'Ulwa' },
              { label: 'Garifuna', value: 'Garifuna' },
            ]}
          />
        </View>

        <View style={styles.viewInputs}>
          <TextInput
            style={styles.Input}
            placeholder="Escriba texto..."
            placeholderTextColor= 'pink'
          />

          <TextInput
            style={styles.Input}
            placeholder="Escriba texto..."
            placeholderTextColor= 'pink'
          />
        </View>

        <View style={styles.viewIconContainer1}>
          <TouchableHighlight style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../img/audio.png')} />
          </TouchableHighlight>

          <TouchableHighlight style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../img/imagen.png')} />
          </TouchableHighlight>
        </View>

        <View style={styles.viewIconContainer2}>
          <TouchableHighlight style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../img/audio.png')} />
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Menu')}>

            <Text style={styles.text}> Explorar </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: "cover",
  },
  viewIconContainer1: {
    flexDirection: "row",
    marginTop: '-60%',
    marginLeft:'-30%',
    marginRight: '-15%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  viewIconContainer2: {
    marginTop: '-62%',
    marginLeft:'-30%',
    marginRight: '-15%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  viewInputs: {
    marginTop: '15%',
  },
  viewPickerSelect: {
    //flexDirection: 'row',
    marginTop: '32%',
    marginBottom:'-10%'
  },
  Input: {
    height: '28%',
    borderWidth: 1,
    color: '#2c2c2c',
    borderRadius: 8,
    borderColor: '#4B7EFB',
    width: "96%",
    marginTop: -10,
    marginLeft: '2%',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:12,
    paddingHorizontal:32,
    marginTop: '45%',
    marginBottom: '35%',
    marginLeft: '30%',
    marginRight: '35%',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4B7EFB',
    width: '40%',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  iconContainer: {
    height: 110,
    width: 110,
    marginLeft: '-11%',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  icon: {
    height: '30%',
    width: '33%',
  },
});

const picketSelectStyles = StyleSheet.create({
  inputAndroid: {
    marginBottom: 2,
    marginRight: 3,
    marginLeft: 3,
    fontSize: 16,
    width:'-20%',
  },
});

export default Traductor;