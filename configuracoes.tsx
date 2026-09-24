import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Configuracoes() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Configurações</Text>

      <TouchableOpacity
        style={styles.opcao}
        onPress={() => router.push('/alterar-email')}
      >
        <Text style={styles.icone}>✉️</Text>
        <Text style={styles.texto}>Alterar e-mail</Text>
        <Text style={styles.seta}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.opcao}
        onPress={() => router.push('/alterar-senha')}
      >
        <Text style={styles.icone}>🔒</Text>
        <Text style={styles.texto}>Alterar senha</Text>
        <Text style={styles.seta}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
            style={styles.opcao}
            onPress={() => router.push('/notificacoes')}
        >
            <Text style={styles.icone}>🔔</Text>
            <Text style={styles.texto}>Notificações</Text>
            <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

      <TouchableOpacity
            style={styles.opcao}
            onPress={() => router.push('/acessibilidade')}
        >
            <Text style={styles.icone}>♿</Text>
            <Text style={styles.texto}>Acessibilidade</Text>
            <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

      <TouchableOpacity
            style={styles.opcao}
            onPress={() => router.push('/ajuda')}
        >
            <Text style={styles.icone}>❓</Text>
            <Text style={styles.texto}>Ajuda</Text>
            <Text style={styles.seta}>›</Text>
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
    color: '#111',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25,
  },

  opcao: {
    height: 60,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 12,
  },

  icone: {
    fontSize: 20,
    marginRight: 15,
  },

  texto: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },

  seta: {
    fontSize: 25,
    color: '#888',
  },
});