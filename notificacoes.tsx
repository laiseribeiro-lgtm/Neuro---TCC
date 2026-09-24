import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Notificacoes() {
  const router = useRouter();

  const [notificacoes, setNotificacoes] = useState(true);
  const [lembretes, setLembretes] = useState(true);

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Notificações</Text>

      <View style={styles.opcao}>
        <View style={styles.textos}>
          <Text style={styles.nome}>Notificações</Text>
          <Text style={styles.descricao}>
            Receber notificações do aplicativo
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.switch,
            notificacoes && styles.switchAtivo,
          ]}
          onPress={() => setNotificacoes(!notificacoes)}
        >
          <View
            style={[
              styles.bolinha,
              notificacoes && styles.bolinhaAtiva,
            ]}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.opcao}>
        <View style={styles.textos}>
          <Text style={styles.nome}>Lembretes</Text>
          <Text style={styles.descricao}>
            Receber lembretes de tarefas e metas
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.switch,
            lembretes && styles.switchAtivo,
          ]}
          onPress={() => setLembretes(!lembretes)}
        >
          <View
            style={[
              styles.bolinha,
              lembretes && styles.bolinhaAtiva,
            ]}
          />
        </TouchableOpacity>
      </View>

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
    minHeight: 75,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 12,
  },

  textos: {
    flex: 1,
    paddingRight: 10,
  },

  nome: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },

  descricao: {
    fontSize: 12,
    color: '#777',
  },

  switch: {
    width: 45,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#DDD',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },

  switchAtivo: {
    backgroundColor: '#7900FF',
  },

  bolinha: {
    width: 19,
    height: 19,
    borderRadius: 20,
    backgroundColor: '#FFF',
  },

  bolinhaAtiva: {
    alignSelf: 'flex-end',
  },
});