import React, { useEffect } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { useRouter } from 'expo-router';

export default function Inicio() {
  const router = useRouter();

  useEffect(() => {
    const tempo = setTimeout(() => {
      router.replace('/login');
    }, 3000);

    return () => clearTimeout(tempo);
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.carregando}>
        Carregando...
      </Text>

      <View style={styles.conteudo}>

        {/* LOGO */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.subtitulo}>
          conectando mentes, construindo
        </Text>

        <Text style={styles.subtitulo}>
          possibilidades!
        </Text>

        {/* BOLINHAS DE CARREGAMENTO */}
        <View style={styles.carregamento}>

          <View style={[styles.bolinha, styles.bolinha1]} />
          <View style={[styles.bolinha, styles.bolinha2]} />
          <View style={[styles.bolinha, styles.bolinha3]} />

        </View>

        <Text style={styles.mensagem}>
          Aguarde um momento...
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2EAFE',
  },

  carregando: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 10,
    color: '#A67AD5',
  },

  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  logo: {
    width: 230,
    height: 130,
  },

  subtitulo: {
    fontSize: 8,
    color: '#555555',
    textAlign: 'center',
  },

  carregamento: {
    marginTop: 25,
    alignItems: 'center',
  },

  bolinha: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#C77BEA',
    marginVertical: 4,
  },

  bolinha1: {
    width: 8,
    height: 8,
  },

  bolinha2: {
    width: 12,
    height: 12,
  },

  bolinha3: {
    width: 16,
    height: 16,
  },

  mensagem: {
    marginTop: 10,
    fontSize: 11,
    color: '#8E62B7',
  },

});