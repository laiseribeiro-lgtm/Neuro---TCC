import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function ComoUsar() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Como usar o aplicativo</Text>

      <Text style={styles.subtitulo}>
        Veja algumas dicas para aproveitar melhor o aplicativo.
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >

        <View style={styles.card}>
          <Text style={styles.emoji}>🏠</Text>

          <Text style={styles.cardTitulo}>
            1. Conheça a tela inicial
          </Text>

          <Text style={styles.texto}>
            Na Home você encontra as principais funções do aplicativo,
            como metas, tarefas, finanças, conquistas e agenda.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>🎯</Text>

          <Text style={styles.cardTitulo}>
            2. Organize suas metas
          </Text>

          <Text style={styles.texto}>
            Use a área de Metas para definir objetivos e acompanhar
            seu progresso aos poucos.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>✅</Text>

          <Text style={styles.cardTitulo}>
            3. Organize suas tarefas
          </Text>

          <Text style={styles.texto}>
            Cadastre as atividades que precisa realizar e acompanhe
            o que já foi concluído.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>📚</Text>

          <Text style={styles.cardTitulo}>
            4. Explore a Biblioteca
          </Text>

          <Text style={styles.texto}>
            Na Biblioteca você encontrará dicas e conteúdos sobre
            vida em casa, finanças, trabalho, vida independente,
            cozinha e alimentação.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>⚙️</Text>

          <Text style={styles.cardTitulo}>
            5. Personalize o aplicativo
          </Text>

          <Text style={styles.texto}>
            Em Configurações você pode alterar informações da conta,
            controlar notificações e ajustar opções de acessibilidade.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>💡</Text>

          <Text style={styles.cardTitulo}>
            6. Precisa de ajuda?
          </Text>

          <Text style={styles.texto}>
            Acesse a área de Ajuda para consultar perguntas frequentes,
            entrar em contato, reportar problemas ou enviar sugestões.
          </Text>
        </View>

      </ScrollView>

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
    color: '#111111',
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 25,
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 20,
  },

  conteudo: {
    paddingBottom: 30,
  },

  card: {
    backgroundColor: '#F4EAFE',
    borderRadius: 15,
    padding: 18,
    marginBottom: 14,
  },

  emoji: {
    fontSize: 28,
    marginBottom: 8,
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5D2A91',
    marginBottom: 7,
  },

  texto: {
    fontSize: 13,
    lineHeight: 20,
    color: '#666666',
  },
});