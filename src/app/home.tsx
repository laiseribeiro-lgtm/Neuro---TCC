import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,StatusBar,} from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const abrirTela = (tela: string) => {
    router.push(tela as any);
  };

  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.appContainer}>

        {/* TOPO */}
        <View style={styles.topo}>
          <TouchableOpacity>
            <Text style={styles.configuracao}>⚙️</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => abrirTela('/perfil')}>
            <View style={styles.avatar}>
              <Text style={styles.avatarTexto}>👩🏻‍🦱</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* CONTEÚDO */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.conteudo}
        >

          {/* SAUDAÇÃO */}
          <View style={styles.saudacao}>
            <Text style={styles.titulo}>
              Olá, Pessoa! 👋
            </Text>

            <Text style={styles.subtitulo}>
              Que bom te ver por aqui!
            </Text>
          </View>

          {/* PRIMEIRA LINHA */}
          <View style={styles.linha}>

            <TouchableOpacity
              style={[styles.card, styles.cardMetas]}
              onPress={() => console.log('Metas')}
            >
              <Text style={styles.icone}>🎯</Text>

              <Text style={styles.nomeCard}>
                Metas
              </Text>

              <Text style={styles.seta}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.card, styles.cardFinancas]}
              onPress={() => console.log('Finanças')}
            >
              <Text style={styles.icone}>🐷</Text>

              <Text style={styles.nomeCard}>
                Finanças
              </Text>

              <Text style={styles.seta}>→</Text>
            </TouchableOpacity>

          </View>

          {/* SEGUNDA LINHA */}
          <View style={styles.linha}>

            <TouchableOpacity
              style={[styles.card, styles.cardTarefas]}
              onPress={() => console.log('Tarefas')}
            >
              <Text style={styles.icone}>📚</Text>

              <Text style={styles.nomeCard}>
                Tarefas
              </Text>

              <Text style={styles.seta}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.card, styles.cardConquistas]}
              onPress={() => console.log('Conquistas')}
            >
              <Text style={styles.icone}>🏆</Text>

              <Text style={styles.nomeCard}>
                Conquistas
              </Text>

              <Text style={styles.seta}>→</Text>
            </TouchableOpacity>

          </View>

          {/* TERCEIRA LINHA */}
          <View style={styles.linha}>

            <TouchableOpacity
              style={[styles.card, styles.cardAgenda]}
              onPress={() => console.log('Agenda')}
            >
              <Text style={styles.icone}>📅</Text>

              <Text style={styles.nomeCard}>
                Agenda
              </Text>

              <Text style={styles.seta}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.card, styles.cardBiblioteca]}
              onPress={() => abrirTela('/biblioteca')}
            >
              <Text style={styles.icone}>▶️</Text>

              <Text style={styles.nomeCard}>
                Biblioteca
              </Text>

              <Text style={styles.nomeCard}>
                de dicas
              </Text>

              <Text style={styles.seta}>→</Text>
            </TouchableOpacity>

          </View>

          {/* NUVENS DECORATIVAS */}
          <View style={styles.nuvens}>
            <View style={styles.nuvem1} />
            <View style={styles.nuvem2} />
            <View style={styles.nuvem3} />
            <View style={styles.nuvem4} />
          </View>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  /* FUNDO CINZA */
  background: {
    flex: 1,
    backgroundColor: '#9B9698',
  },

  /* ÁREA DO APLICATIVO */
  appContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* TOPO */
  topo: {
    height: 105,
    paddingHorizontal: 18,
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  configuracao: {
    fontSize: 40,
  },

  avatar: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#E7D995',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarTexto: {
    fontSize: 43,
  },

  /* CONTEÚDO */
  conteudo: {
    paddingHorizontal: 28,
    paddingBottom: 100,
  },

  /* SAUDAÇÃO */
  saudacao: {
    marginTop: 8,
    marginBottom: 18,
  },

  titulo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111111',
    marginBottom: 4,
  },

  subtitulo: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222222',
  },

  /* LINHAS DOS CARDS */
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  /* CARD */
  card: {
    width: '48%',
    height: 125,
    borderRadius: 20,
    padding: 12,
    justifyContent: 'center',
    position: 'relative',
  },

  /* CORES DOS CARDS */
  cardMetas: {
    backgroundColor: '#EEDFFF',
  },

  cardFinancas: {
    backgroundColor: '#DDF6F0',
  },

  cardTarefas: {
    backgroundColor: '#FFF0CD',
  },

  cardConquistas: {
    backgroundColor: '#E9D2FA',
  },

  cardAgenda: {
    backgroundColor: '#CFE2FF',
  },

  cardBiblioteca: {
    backgroundColor: '#FFD7C7',
  },

  /* ÍCONES */
  icone: {
    fontSize: 54,
    textAlign: 'center',
    marginBottom: 3,
  },

  /* TEXTO DOS CARDS */
  nomeCard: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111111',
    textAlign: 'center',
  },

  /* SETA */
  seta: {
    position: 'absolute',
    right: 10,
    bottom: 8,
    fontSize: 23,
    color: '#6E36A8',
    fontWeight: 'bold',
  },

  /* NUVENS */
  nuvens: {
    height: 90,
    marginTop: 5,
    position: 'relative',
    overflow: 'hidden',
  },

  nuvem1: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E2D3FF',
    left: -40,
    top: 25,
  },

  nuvem2: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E2D3FF',
    left: 20,
    top: 35,
  },

  nuvem3: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E2D3FF',
    right: 15,
    top: 30,
  },

  nuvem4: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#E2D3FF',
    right: -40,
    top: 25,
  },

});