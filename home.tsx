import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>

        <View>
          <Text style={styles.ola}>Olá! 👋</Text>
          <Text style={styles.bemVindo}>
            Que bom ter você aqui!
          </Text>
        </View>

        <View style={styles.headerBotoes}>

          <TouchableOpacity
            onPress={() => router.push('/configuracoes')}
          >
            <Text style={styles.configuracao}>⚙️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/perfil')}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarTexto}>👤</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >

        {/* MENSAGEM */}
        <View style={styles.mensagem}>
          <Text style={styles.mensagemTitulo}>
            Vamos organizar seu dia? 🌟
          </Text>

          <Text style={styles.mensagemTexto}>
            Escolha uma opção para começar.
          </Text>
        </View>

        {/* CARDS */}
        <View style={styles.grid}>

          <TouchableOpacity
            style={[styles.card, styles.cardRoxo]}
          >
            <Text style={styles.emoji}>🎯</Text>
            <Text style={styles.cardTitulo}>Metas</Text>
            <Text style={styles.cardTexto}>
              Organize seus objetivos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, styles.cardVerde]}
          >
            <Text style={styles.emoji}>💰</Text>
            <Text style={styles.cardTitulo}>Finanças</Text>
            <Text style={styles.cardTexto}>
              Organize seu dinheiro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, styles.cardAzul]}
          >
            <Text style={styles.emoji}>✅</Text>
            <Text style={styles.cardTitulo}>Tarefas</Text>
            <Text style={styles.cardTexto}>
              Veja suas atividades
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, styles.cardAmarelo]}
          >
            <Text style={styles.emoji}>🏆</Text>
            <Text style={styles.cardTitulo}>Conquistas</Text>
            <Text style={styles.cardTexto}>
              Veja seu progresso
            </Text>
          </TouchableOpacity>

        </View>

        {/* AGENDA */}
        <TouchableOpacity style={styles.agenda}>
          <View>
            <Text style={styles.agendaTitulo}>
              📅 Agenda
            </Text>

            <Text style={styles.agendaTexto}>
              Confira seus próximos compromissos
            </Text>
          </View>

          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

        {/* BIBLIOTECA */}
        <TouchableOpacity
          style={styles.biblioteca}
          onPress={() => router.push('/biblioteca')}
        >
          <View style={styles.bibliotecaIcone}>
            <Text style={styles.bibliotecaEmoji}>📚</Text>
          </View>

          <View style={styles.bibliotecaTextos}>
            <Text style={styles.bibliotecaTitulo}>
              Biblioteca de dicas
            </Text>

            <Text style={styles.bibliotecaTexto}>
              Aprenda coisas novas para sua vida
            </Text>
          </View>

          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ola: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222222',
  },

  bemVindo: {
    fontSize: 13,
    color: '#777777',
    marginTop: 4,
  },

  headerBotoes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  configuracao: {
    fontSize: 25,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#EAD9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarTexto: {
    fontSize: 22,
  },

  conteudo: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  mensagem: {
    backgroundColor: '#F3E8FF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
  },

  mensagemTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5D2A91',
    marginBottom: 6,
  },

  mensagemTexto: {
    fontSize: 13,
    color: '#666666',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    minHeight: 145,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    justifyContent: 'center',
  },

  cardRoxo: {
    backgroundColor: '#EAD9FF',
  },

  cardVerde: {
    backgroundColor: '#DDF4E4',
  },

  cardAzul: {
    backgroundColor: '#DDEBFF',
  },

  cardAmarelo: {
    backgroundColor: '#FFF1C9',
  },

  emoji: {
    fontSize: 28,
    marginBottom: 10,
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },

  cardTexto: {
    fontSize: 11,
    color: '#666666',
    marginTop: 4,
  },

  agenda: {
    minHeight: 80,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  agendaTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },

  agendaTexto: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
  },

  biblioteca: {
    minHeight: 85,
    backgroundColor: '#F4EAFE',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  bibliotecaIcone: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  bibliotecaEmoji: {
    fontSize: 25,
  },

  bibliotecaTextos: {
    flex: 1,
  },

  bibliotecaTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
  },

  bibliotecaTexto: {
    fontSize: 11,
    color: '#777777',
    marginTop: 4,
  },

  seta: {
    fontSize: 28,
    color: '#888888',
  },
});