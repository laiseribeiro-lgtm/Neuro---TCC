import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';
import { useRouter } from 'expo-router';

export default function AlterarEmail() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  function salvar() {
    if (!email) return;

    router.back();
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Alterar e-mail</Text>

      <Text style={styles.subtitulo}>
        Digite o novo e-mail que deseja utilizar.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Novo e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={salvar}
      >
        <Text style={styles.textoBotao}>Salvar</Text>
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

  titulo: {
    fontSize: 24,
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