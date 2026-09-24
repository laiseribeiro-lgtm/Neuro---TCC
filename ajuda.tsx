import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Ajuda() {
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
        <Text style={styles.titulo}>❓ Ajuda</Text>

        <Text style={styles.subtitulo}>
          Encontre respostas, informações e formas de entrar em contato
          conosco.
        </Text>

        {/* Como usar */}
        <TouchableOpacity
          style={styles.opcao}
          onPress={() => router.push('/como-usar')}
        >
          <View style={styles.icone}>
            <Text>📖</Text>
          </View>

          <View style={styles.textos}>
            <Text style={styles.opcaoTitulo}>
              Como usar o aplicativo
            </Text>

            <Text style={styles.opcaoTexto}>
              Aprenda a utilizar os principais recursos.
            </Text>
          </View>

          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

        {/* FAQ */}
        <TouchableOpacity
          style={styles.opcao}
          onPress={() => router.push('/faq')}
        >
          <View style={styles.icone}>
            <Text>❓</Text>
          </View>

          <View style={styles.textos}>
            <Text style={styles.opcaoTitulo}>
              Perguntas Frequentes
            </Text>

            <Text style={styles.opcaoTexto}>
              Confira respostas para dúvidas comuns.
            </Text>
          </View>

          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

        {/* Fale Conosco */}
        <TouchableOpacity
          style={styles.opcao}
          onPress={() => router.push('/fale-conosco')}
        >
          <View style={styles.icone}>
            <Text>💬</Text>
          </View>

          <View style={styles.textos}>
            <Text style={styles.opcaoTitulo}>
              Fale Conosco
            </Text>

            <Text style={styles.opcaoTexto}>
              Entre em contato com nossa equipe.
            </Text>
          </View>

          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

        {/* Reportar Problema */}
        <TouchableOpacity
          style={styles.opcao}
          onPress={() => router.push('/reportar-problema')}
        >
          <View style={styles.icone}>
            <Text>🐞</Text>
          </View>

          <View style={styles.textos}>
            <Text style={styles.opcaoTitulo}>
              Reportar problema
            </Text>

            <Text style={styles.opcaoTexto}>
              Informe problemas encontrados no aplicativo.
            </Text>
          </View>

          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

        {/* Enviar Sugestão */}
        <TouchableOpacity
          style={styles.opcao}
          onPress={() => router.push('/enviar-sugestao')}
        >
          <View style={styles.icone}>
            <Text>💡</Text>
          </View>

          <View style={styles.textos}>
            <Text style={styles.opcaoTitulo}>
              Enviar sugestão
            </Text>

            <Text style={styles.opcaoTexto}>
              Compartilhe ideias para melhorar o aplicativo.
            </Text>
          </View>

          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

        {/* Sobre */}
        <TouchableOpacity
          style={styles.opcao}
          onPress={() => router.push('/sobre')}
        >
          <View style={styles.icone}>
            <Text>📄</Text>
          </View>

          <View style={styles.textos}>
            <Text style={styles.opcaoTitulo}>
              Sobre
            </Text>

            <Text style={styles.opcaoTexto}>
              Saiba mais sobre o aplicativo.
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
    fontSize: 27,
    fontWeight: 'bold',
    color: '#6F4A91',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 14,
    color: '#666',
    lineHeight: 21,
    marginBottom: 25,
  },

  opcao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0D2EF',
  },

  icone: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#F2EAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textos: {
    flex: 1,
    marginLeft: 13,
  },

  opcaoTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6F4A91',
    marginBottom: 4,
  },

  opcaoTexto: {
    fontSize: 12,
    color: '#777',
    lineHeight: 17,
  },

  seta: {
    fontSize: 28,
    color: '#A66DD4',
    marginLeft: 8,
  },
});