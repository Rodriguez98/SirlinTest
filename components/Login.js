import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const Login = ({navigation}) => {
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
        style={styles.button}
       onPress={() => navigation.navigate('Traductor2')}>
          
        <Text style={styles.text}> Entrar </Text>
      </TouchableOpacity>
    </View>
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

export default Login;