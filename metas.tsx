import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Metas() {
  const router = useRouter();

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [meta, setMeta] = useState('');

  const [metas, setMetas] = useState<string[]>([]);

  function adicionarMeta() {
    if (!meta.trim()) {
      return;
    }

    setMetas([...metas, meta]);
    setMeta('');
    setMostrarFormulario(false);
  }

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
        <Text style={styles.titulo}>🎯 Minhas Metas</Text>

        <Text style={styles.subtitulo}>
          Organize seus objetivos e acompanhe seu progresso.
        </Text>

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={() => setMostrarFormulario(!mostrarFormulario)}
        >
          <Text style={styles.botaoAdicionarTexto}>
            + Adicionar nova meta
          </Text>
        </TouchableOpacity>

        {mostrarFormulario && (
          <View style={styles.formulario}>
            <Text style={styles.label}>Qual é a sua meta?</Text>

            <TextInput
              style={styles.input}
              placeholder="Ex: Aprender a cozinhar"
              value={meta}
              onChangeText={setMeta}
            />

            <TouchableOpacity
              style={styles.botaoSalvar}
              onPress={adicionarMeta}
            >
              <Text style={styles.botaoSalvarTexto}>
                Salvar meta
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {metas.length === 0 ? (
          <View style={styles.vazio}>
            <Text style={styles.vazioEmoji}>🌱</Text>

            <Text style={styles.vazioTitulo}>
              Você ainda não possui metas
            </Text>

            <Text style={styles.vazioTexto}>
              Adicione uma meta para começar a acompanhar seus objetivos.
            </Text>
          </View>
        ) : (
          metas.map((item, index) => (
            <View style={styles.metaCard} key={index}>
              <View style={styles.metaIcone}>
                <Text>🎯</Text>
              </View>

              <View style={styles.metaTextos}>
                <Text style={styles.metaTitulo}>{item}</Text>

                <Text style={styles.metaStatus}>
                  Em andamento
                </Text>
              </View>
            </View>
          ))
        )}
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
    marginBottom: 22,
  },

  botaoAdicionar: {
    backgroundColor: '#A66DD4',
    borderRadius: 13,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  botaoAdicionarTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  formulario: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0D2EF',
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6F4A91',
    marginBottom: 8,
  },

  input: {
    height: 50,
    backgroundColor: '#F8F5FC',
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E0D2EF',
    fontSize: 14,
  },

  botaoSalvar: {
    backgroundColor: '#8E62B7',
    borderRadius: 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },

  botaoSalvarTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  vazio: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E0D2EF',
  },

  vazioEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },

  vazioTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6F4A91',
    textAlign: 'center',
    marginBottom: 7,
  },

  vazioTexto: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
    lineHeight: 19,
  },

  metaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0D2EF',
  },

  metaIcone: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#F2EAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  metaTextos: {
    marginLeft: 13,
    flex: 1,
  },

  metaTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6F4A91',
    marginBottom: 4,
  },

  metaStatus: {
    fontSize: 12,
    color: '#8E62B7',
  },
});