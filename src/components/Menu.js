import React from "react";
import { ImageBackground, Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
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
            onPress={() => navigation.navigate('Traductor')}>

            <Image source={require('../img/danza.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Traductor')}>

            <Image source={require('../img/historia.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.viewButton2}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Traductor')}>

            <Image source={require('../img/musica.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Traductor')}>

            <Image source={require('../img/turismo.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  viewPickerSelect: {
    marginTop: '28%',
  },
  viewButton1: {
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '-4%',
    marginTop: '15%',
  },
  viewButton2: {
    flexDirection: "row",
    alignItems: 'flex-end',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '-65%',
  },

  viewIconContainer: {
    flexDirection: "row",
    marginTop: '-17%',
    marginRight: '-16%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    height: '48%',
    width: '48%',
    resizeMode: "cover",
  },
  icon: {
    height: '95%',
    width: '48%',
    resizeMode: "cover",
    justifyContent: "center",

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