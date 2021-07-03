import React from "react";
import { ImageBackground, Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Menu = ({ navigation }) => {

  return (
    <>
      <ImageBackground source={require('../img/plantilla.png')} style={styles.image}>
        <View style={[{ marginLeft: "20%", width: "60%", borderColor: "blue", marginTop: "12%", color: 'black', }, styles.viewPickerSelect]}>
          <RNPickerSelect
            placeholder={{
              label: 'Seleccione una cultura',
              color: "fff",
              value: null,
            }}
            style={picketSelectStyles}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Español', value: 'Español' },
              { label: 'Miskitu', value: 'Miskitu' },
              { label: 'Rama', value: 'Rama' },
              { label: 'Mayangna', value: 'Mayangna' },
              { label: 'Ulwa', value: 'Ulwa' },
              { label: 'Garifuna', value: 'Garifuna' },
            ]}
          />
        </View>

        <View style={styles.viewButton1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Danza')}>

            <Image source={require('../img/danza.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Historia')}>

            <Image source={require('../img/historia.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.viewButton2}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Musica')}>

            <Image source={require('../img/musica.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Turismo')}>

            <Image source={require('../img/turismo.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  viewPickerSelect: {
    marginTop: '-11%',
  },
  viewButton1: {
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '6%',
  },
  viewButton2: {
    flexDirection: "row",
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '15%',
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
});

const picketSelectStyles = StyleSheet.create({
  inputAndroid: {
    width:'104%',
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