import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text>Conteúdo do componente Inicio</Text>
      <TouchableOpacity onPress={() => alert('Botão pressionado!')}>
        <Text style={styles.botao}>Botão de Entrada</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 5,
  },
});

export default Inicio;