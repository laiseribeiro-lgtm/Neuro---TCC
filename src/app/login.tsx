import React, { useState } from 'react';
import {View,Text,StyleSheet, TextInput,TouchableOpacity,Image, KeyboardAvoidingView,Platform,ScrollView,} from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
  if (!email || !senha) {
    return;
  }

  router.replace('/home');
}

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        {/* LOGO */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* TÍTULO */}
        <Text style={styles.titulo}>
          Bem-vindo(a)!
        </Text>

        <Text style={styles.subtitulo}>
          Faça login para continuar!
        </Text>

        {/* EMAIL */}
        <View style={styles.inputContainer}>
          <Text style={styles.icone}>✉</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        {/* SENHA */}
        <View style={styles.inputContainer}>
          <Text style={styles.icone}>🔒</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </View>

        {/* ESQUECEU A SENHA */}
        <TouchableOpacity style={styles.esqueceu}>
          <Text style={styles.esqueceuTexto}>
            Esqueceu sua senha?
          </Text>
        </TouchableOpacity>

        {/* BOTÃO ENTRAR */}
        <TouchableOpacity
          style={styles.botao}
          onPress={entrar}
        >
          <Text style={styles.botaoTexto}>
            Entrar
          </Text>
        </TouchableOpacity>

        {/* DIVISOR */}
        <View style={styles.divisor}>
          <View style={styles.linha} />

          <Text style={styles.ou}>
            ou continue com
          </Text>

          <View style={styles.linha} />
        </View>

        {/* GOOGLE E APPLE */}
        <View style={styles.redesSociais}>

          <TouchableOpacity style={styles.socialBotao}>
            <Text style={styles.google}>
              G
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBotao}>
            <Text style={styles.apple}>
              
            </Text>
          </TouchableOpacity>

        </View>

        {/* CADASTRO */}
        <View style={styles.cadastroContainer}>
          <Text style={styles.cadastroTexto}>
            Não tem uma conta?
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/cadastro')}
          >
            <Text style={styles.criarConta}>
              Crie uma conta
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  conteudo: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 45,
    paddingBottom: 40,
  },

  logo: {
    width: 150,
    height: 80,
    marginBottom: 20,
  },

  titulo: {
    width: '100%',
    fontSize: 24,
    fontWeight: '800',
    color: '#171717',
    marginBottom: 5,
  },

  subtitulo: {
    width: '100%',
    fontSize: 14,
    color: '#666666',
    marginBottom: 28,
  },

  inputContainer: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 14,
    backgroundColor: '#FFFFFF',
  },

  icone: {
    fontSize: 18,
    marginRight: 10,
    color: '#777777',
  },

  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#222222',
  },

  esqueceu: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },

  esqueceuTexto: {
    color: '#7B2CBF',
    fontSize: 12,
    fontWeight: '600',
  },

  botao: {
    width: '100%',
    height: 50,
    backgroundColor: '#7600FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  divisor: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDDDDD',
  },

  ou: {
    marginHorizontal: 12,
    color: '#777777',
    fontSize: 12,
  },

  redesSociais: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 25,
  },

  socialBotao: {
    width: 55,
    height: 48,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  google: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4285F4',
  },

  apple: {
    fontSize: 23,
    color: '#000000',
  },

  cadastroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cadastroTexto: {
    color: '#666666',
    fontSize: 12,
    marginRight: 5,
  },

  criarConta: {
    color: '#7B2CBF',
    fontSize: 12,
    fontWeight: '700',
  },
});