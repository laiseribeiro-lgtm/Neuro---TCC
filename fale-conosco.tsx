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

export default function FaleConosco() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function enviarMensagem() {
    if (!nome || !email || !mensagem) {
      return;
    }

    // Por enquanto, apenas volta para a tela de ajuda.
    // O envio real será conectado ao banco/backend depois.
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
        <Text style={styles.titulo}>💬 Fale Conosco</Text>

        <Text style={styles.subtitulo}>
          Envie uma mensagem para nossa equipe. Estamos aqui para ajudar!
        </Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Mensagem</Text>
        <TextInput
          style={styles.mensagem}
          placeholder="Digite sua mensagem..."
          multiline
          textAlignVertical="top"
          value={mensagem}
          onChangeText={setMensagem}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={enviarMensagem}
        >
          <Text style={styles.botaoTexto}>Enviar mensagem</Text>
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
    height: 140,
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