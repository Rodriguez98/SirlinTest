import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Menu = ({ navigation }) => {
  return (
    <>
      <View style={[{  marginLeft: "20%", width: "60%", borderColor: "blue", marginTop: "12%" }, styles.viewInputs]}>
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

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Traductor2')}>

          <Text style={styles.text}> Danza </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Traductor2')}>

          <Text style={styles.text}> Historia </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Traductor2')}>

          <Text style={styles.text}> Musica </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Traductor2')}>

          <Text style={styles.text}> Ubicacion </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
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