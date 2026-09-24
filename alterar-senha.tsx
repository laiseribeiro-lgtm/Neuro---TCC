import React, { useState } from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';
import { useRouter } from 'expo-router';

export default function AlterarSenha() {
  const router = useRouter();

  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  function salvar() {
    if (!senhaAtual || !novaSenha || !confirmarSenha) return;

    if (novaSenha !== confirmarSenha) return;

    router.back();
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Alterar senha</Text>

      <Text style={styles.subtitulo}>
        Digite sua senha atual e escolha uma nova senha.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Senha atual"
        secureTextEntry
        value={senhaAtual}
        onChangeText={setSenhaAtual}
      />

      <TextInput
        style={styles.input}
        placeholder="Nova senha"
        secureTextEntry
        value={novaSenha}
        onChangeText={setNovaSenha}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar nova senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
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