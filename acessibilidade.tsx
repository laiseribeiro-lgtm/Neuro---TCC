import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Acessibilidade() {
  const router = useRouter();

  const [textoMaior, setTextoMaior] = useState(false);
  const [altoContraste, setAltoContraste] = useState(false);
  const [animacoes, setAnimacoes] = useState(true);

  return (
    <View
      style={[
        styles.container,
        altoContraste && styles.contraste,
      ]}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>‹</Text>
      </TouchableOpacity>

      <Text
        style={[
          styles.titulo,
          textoMaior && styles.textoMaior,
        ]}
      >
        Acessibilidade
      </Text>

      <Text
        style={[
          styles.subtitulo,
          textoMaior && styles.textoMaiorPequeno,
        ]}
      >
        Personalize o aplicativo de acordo com suas necessidades.
      </Text>

      {/* TAMANHO DO TEXTO */}
      <View style={styles.opcao}>
        <View style={styles.textos}>
          <Text
            style={[
              styles.nome,
              textoMaior && styles.textoMaiorPequeno,
            ]}
          >
            Texto maior
          </Text>

          <Text style={styles.descricao}>
            Aumentar o tamanho dos textos do aplicativo
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.switch,
            textoMaior && styles.switchAtivo,
          ]}
          onPress={() => setTextoMaior(!textoMaior)}
        >
          <View
            style={[
              styles.bolinha,
              textoMaior && styles.bolinhaAtiva,
            ]}
          />
        </TouchableOpacity>
      </View>

      {/* ALTO CONTRASTE */}
      <View style={styles.opcao}>
        <View style={styles.textos}>
          <Text style={styles.nome}>
            Alto contraste
          </Text>

          <Text style={styles.descricao}>
            Aumentar o contraste das cores
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.switch,
            altoContraste && styles.switchAtivo,
          ]}
          onPress={() => setAltoContraste(!altoContraste)}
        >
          <View
            style={[
              styles.bolinha,
              altoContraste && styles.bolinhaAtiva,
            ]}
          />
        </TouchableOpacity>
      </View>

      {/* ANIMAÇÕES */}
      <View style={styles.opcao}>
        <View style={styles.textos}>
          <Text style={styles.nome}>
            Animações
          </Text>

          <Text style={styles.descricao}>
            Ativar animações do aplicativo
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.switch,
            animacoes && styles.switchAtivo,
          ]}
          onPress={() => setAnimacoes(!animacoes)}
        >
          <View
            style={[
              styles.bolinha,
              animacoes && styles.bolinhaAtiva,
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
    backgroundColor: '#FFFFFF',
  },

  contraste: {
    backgroundColor: '#000000',
  },

  voltar: {
    fontSize: 32,
    color: '#111111',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    color: '#222222',
  },

  subtitulo: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 25,
  },

  textoMaior: {
    fontSize: 32,
  },

  textoMaiorPequeno: {
    fontSize: 17,
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
    color: '#333333',
    marginBottom: 4,
  },

  descricao: {
    fontSize: 12,
    color: '#777777',
  },

  switch: {
    width: 45,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#DDDDDD',
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
    backgroundColor: '#FFFFFF',
  },

  bolinhaAtiva: {
    alignSelf: 'flex-end',
  },
});