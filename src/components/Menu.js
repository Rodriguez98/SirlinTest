import React from "react";
import { ImageBackground, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Menu = ({ navigation }) => {

  return (
    <>
      <ImageBackground source={require('../img/plantilla.png')} style={styles.image}>
        <View style={[{ marginLeft: "20%", width: "60%", borderColor: "blue", marginTop: "12%" }, styles.viewPickerSelect]}>
          <RNPickerSelect
            placeholder={{
              label: 'Seleccione un lenguaje',
              color: "fff",
              value: null,
            }}
            style={picketSelectStyles}
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

        <View style={styles.viewButton1}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Traductor')}>

            <Text style={styles.text}> Danza </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Traductor')}>

            <Text style={styles.text}> Historia </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewButton2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Traductor')}>

            <Text style={styles.text}> Musica </Text>
          </TouchableOpacity>
    
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Traductor')}>

            <Text style={styles.text}> Ubicacion </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  viewPickerSelect: {
    marginTop: '-25%',
  },
  viewButton1: {
    flexDirection: "row",
    alignItems: 'baseline',
    justifyContent:'space-around',
    marginLeft: 5,
    marginTop:'35%',
  },
  viewButton2: {
    flexDirection: "row",
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginRight: 5,
    marginTop:'50%',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:12,
    paddingHorizontal:32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: '40%',
  },
 
  text: {
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

const picketSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
});

export default Menu;