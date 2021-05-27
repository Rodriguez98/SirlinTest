
import React from "react";
import { TouchableOpacity, View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Traductor2 = ({ navigation }) => {
  return (
    <>
      <View style={styles.viewInputs}>
        <RNPickerSelect
          placeholder={{
            label: 'Seleccione un lenguaje',
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

        <RNPickerSelect
          placeholder={{
            label: 'Seleccione un lenguaje',
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

      <View>
        <TextInput
          style={styles.Input}
          placeholder="Escriba texto..."
        />

        <TextInput
          style={styles.Input}
          placeholder="Escriba texto..."
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Menu')}>

          <Text style={styles.text}> Explorar </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewInputs: {
   // flexDirection: 'row',
  },
  Input: {
    height: 100,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#2c2c2c',
    borderRadius: 5,
    width: "100%",
    marginTop: 10,
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#ff0000",
    paddingHorizontal: 20,
  },
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
    width:'40%',
    marginTop: 2,
    marginBottom: 2,
    marginRight: 3,
    marginLeft: 3,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'red',
  },
});


export default Traductor2;