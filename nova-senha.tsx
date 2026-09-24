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

export default function NovaSenha() {
  const router = useRouter();

  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');

  function salvar() {
    if (!senha || !confirmar) return;

    if (senha !== confirmar) return;

    router.replace('/login');
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

      <Text style={styles.titulo}>Nova senha</Text>

      <Text style={styles.subtitulo}>
        Digite sua nova senha abaixo.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nova senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar nova senha"
        secureTextEntry
        value={confirmar}
        onChangeText={setConfirmar}
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