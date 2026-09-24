import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Sobre() {
  const router = useRouter();

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
        <Text style={styles.icone}>🌟</Text>

        <Text style={styles.titulo}>Sobre o aplicativo</Text>

        <Text style={styles.nome}>Autonomia+</Text>

        <Text style={styles.descricao}>
          O Autonomia+ foi desenvolvido para ajudar pessoas neurodivergentes
          que estão entrando na fase adulta a desenvolver mais autonomia e
          organização no dia a dia.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>🎯 Nosso objetivo</Text>

          <Text style={styles.cardTexto}>
            Oferecer ferramentas e conteúdos que auxiliem na organização,
            planejamento e aprendizado de atividades importantes para a vida
            adulta.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>📚 O que você encontra</Text>

          <Text style={styles.cardTexto}>
            • Organização de tarefas{'\n'}
            • Metas e objetivos{'\n'}
            • Organização financeira{'\n'}
            • Biblioteca de dicas{'\n'}
            • Agenda e compromissos{'\n'}
            • Recursos de acessibilidade
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>💜 Desenvolvido com carinho</Text>

          <Text style={styles.cardTexto}>
            Este aplicativo foi pensado para tornar o aprendizado e a
            organização da vida adulta mais simples, acessível e acolhedora.
          </Text>
        </View>

        <Text style={styles.versao}>Versão 1.0.0</Text>
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
    paddingTop: 15,
    paddingBottom: 40,
  },

  icone: {
    fontSize: 45,
    textAlign: 'center',
    marginBottom: 10,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#6F4A91',
    textAlign: 'center',
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A66DD4',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 18,
  },

  descricao: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0D2EF',
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6F4A91',
    marginBottom: 8,
  },

  cardTexto: {
    fontSize: 14,
    color: '#666',
    lineHeight: 21,
  },

  versao: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9B85AD',
    marginTop: 10,
  },
});