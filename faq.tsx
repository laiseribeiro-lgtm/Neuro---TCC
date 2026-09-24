import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function FAQ() {
  const router = useRouter();

  const [aberta, setAberta] = useState<number | null>(null);

  const perguntas = [
    {
      pergunta: 'Como começo a usar o aplicativo?',
      resposta:
        'Depois de criar sua conta, você pode acessar a tela inicial e escolher as funções que deseja utilizar, como metas, tarefas, finanças e biblioteca de dicas.',
    },
    {
      pergunta: 'Como criar uma meta?',
      resposta:
        'Na tela inicial, acesse a área de Metas e escolha a opção para adicionar uma nova meta. Você poderá definir o objetivo e acompanhar seu progresso.',
    },
    {
      pergunta: 'Como organizo minhas tarefas?',
      resposta:
        'Na área de Tarefas, você pode cadastrar atividades que precisa realizar e acompanhar o que já foi concluído.',
    },
    {
      pergunta: 'Onde encontro dicas para o dia a dia?',
      resposta:
        'A Biblioteca de dicas reúne conteúdos sobre vida em casa, finanças, trabalho e carreira, vida independente e cozinha e alimentação.',
    },
    {
      pergunta: 'Posso alterar meus dados?',
      resposta:
        'Sim. Acesse seu perfil ou as configurações para alterar informações disponíveis, como e-mail e senha.',
    },
    {
      pergunta: 'Como altero minha senha?',
      resposta:
        'Acesse Configurações e selecione Alterar senha. Você deverá informar sua senha atual e cadastrar uma nova senha.',
    },
    {
      pergunta: 'Esqueci minha senha. O que faço?',
      resposta:
        'Na tela de login, toque em “Esqueceu sua senha?”. Depois, informe seu e-mail e siga as etapas para criar uma nova senha.',
    },
    {
      pergunta: 'Como posso pedir ajuda?',
      resposta:
        'Na área de Ajuda você encontrará opções para falar conosco, reportar problemas e enviar sugestões.',
    },
  ];

  function abrirPergunta(index: number) {
    if (aberta === index) {
      setAberta(null);
    } else {
      setAberta(index);
    }
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Perguntas Frequentes</Text>
      

      <Text style={styles.subtitulo}>
        Encontre respostas para as dúvidas mais comuns.
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      >

        {perguntas.map((item, index) => (
          <View key={index} style={styles.card}>

            <TouchableOpacity
              style={styles.pergunta}
              onPress={() => abrirPergunta(index)}
            >
              <Text style={styles.perguntaTexto}>
                {item.pergunta}
              </Text>

              <Text style={styles.seta}>
                {aberta === index ? '⌃' : '⌄'}
              </Text>
            </TouchableOpacity>

            {aberta === index && (
              <View style={styles.respostaContainer}>
                <Text style={styles.resposta}>
                  {item.resposta}
                </Text>
              </View>
            )}

          </View>
        ))}

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

  lista: {
    paddingBottom: 30,
  },

  card: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },

  pergunta: {
    minHeight: 60,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  perguntaTexto: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    paddingRight: 10,
  },

  seta: {
    fontSize: 22,
    color: '#7900FF',
  },

  respostaContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  resposta: {
    fontSize: 13,
    lineHeight: 20,
    color: '#666666',
  },
});