import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function RecuperarSenha() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  function enviar() {
    if (!email) return;

    router.push('/codigo');
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
        Digite seu e-mail para receber o código de recuperação.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={enviar}
      >
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },

  voltar: {
    fontSize: 32,
    color: '#111',
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
    fontSize: 13,
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