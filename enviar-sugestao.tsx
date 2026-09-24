import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function EnviarSugestao() {
  const router = useRouter();

  const [assunto, setAssunto] = useState('');
  const [sugestao, setSugestao] = useState('');

  function enviarSugestao() {
    if (!assunto || !sugestao) {
      return;
    }

    // O envio real será conectado ao backend depois.
    router.back();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.voltar}
        onPress={() => router.back()}
      >
        <Text style={styles.voltarTexto}>‹ Voltar</Text>
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >
        <Text style={styles.titulo}>💡 Enviar Sugestão</Text>

        <Text style={styles.subtitulo}>
          Tem uma ideia para melhorar o aplicativo? Compartilhe com a gente!
        </Text>

        <Text style={styles.label}>Assunto</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Nova funcionalidade"
          value={assunto}
          onChangeText={setAssunto}
        />

        <Text style={styles.label}>Sua sugestão</Text>

        <TextInput
          style={styles.mensagem}
          placeholder="Conte sua ideia..."
          multiline
          textAlignVertical="top"
          value={sugestao}
          onChangeText={setSugestao}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={enviarSugestao}
        >
          <Text style={styles.botaoTexto}>Enviar sugestão</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EAFE',
  },

  voltar: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  voltarTexto: {
    fontSize: 16,
    color: '#8E62B7',
  },

  conteudo: {
    padding: 25,
    paddingTop: 20,
    paddingBottom: 40,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#6F4A91',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 14,
    color: '#666',
    lineHeight: 21,
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6F4A91',
    marginBottom: 7,
    marginTop: 12,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#E0D2EF',
  },

  mensagem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingTop: 15,
    height: 160,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#E0D2EF',
  },

  botao: {
    backgroundColor: '#A66DD4',
    borderRadius: 12,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});