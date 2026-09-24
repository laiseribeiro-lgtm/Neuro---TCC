import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Codigo() {
  const router = useRouter();
  const [codigo, setCodigo] = useState('');

  function confirmar() {
    if (!codigo) return;

    router.push('/nova-senha');
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>‹</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>Recuperar senha</Text>

      <Text style={styles.subtitulo}>
        Digite o código enviado para seu e-mail.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o código"
        value={codigo}
        onChangeText={setCodigo}
        keyboardType="number-pad"
        maxLength={6}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={confirmar}
      >
        <Text style={styles.textoBotao}>Confirmar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },

  voltar: {
    fontSize: 32,
  },

  logo: {
    width: 120,
    height: 60,
    alignSelf: 'center',
    marginTop: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 8,
  },

  subtitulo: {
    color: '#666',
    marginBottom: 25,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
  },

  botao: {
    height: 45,
    backgroundColor: '#7900FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});