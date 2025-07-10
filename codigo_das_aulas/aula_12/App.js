// Importa componentes do React Native e Expo para UI e status bar
import { StatusBar } from "expo-status-bar"
import { Text, View, ActivityIndicator, ScrollView, Button } from "react-native"
// Importa a instância do axios configurada para requisições HTTP
import { instance as api } from "./services/instance.js"
// Importa hooks do React para controle de estado e efeitos colaterais
import { useEffect, useState } from "react"
// Importa funções para métodos HTTP personalizados
import { patch, del, post, put } from "./services/endpoint/methodsHttp.js"
// Importa estilos customizados
import { styles } from "./styles/app/styles.js"

export default function App() {
  // Estado para armazenar os dados recebidos da API
  const [data, setData] = useState(null)
  // Estado para controlar o carregamento dos dados
  const [loading, setLoading] = useState(true)

  // Efeito para buscar dados da API ao montar o componente
  useEffect(() => {
    // Função assíncrona para buscar dados do endpoint
    const fetchData = async () => {
      try {
        // Faz requisição GET para obter o post de id 1
        const response = await api.get("post/1")
        setData(response.data) // Atualiza o estado com os dados recebidos
      } catch (error) {
        // Exibe erro caso a requisição falhe
        console.error("GET error:", error)
      } finally {
        // Finaliza o carregamento
        setLoading(false)
      }
    }

    fetchData() // Chama a função de busca de dados
  }, [])

  // Objeto de exemplo para PATCH
  const jsonPatch = {
    title: "Atualizado via PATCH",
  }

  // Objeto de exemplo para POST
  const jsonPost = {
    title: "Novo post",
    body: "Conteúdo do post",
    userId: 1,
  }

  // Objeto de exemplo para PUT
  const jsonPut = {
    title: "PUT atualizado",
    body: "Texto novo",
    userId: 1,
  }

  return (
    // ScrollView para permitir rolagem do conteúdo
    <ScrollView contentContainerStyle={styles.container}>
      {/* Exibe indicador de carregamento enquanto busca os dados */}
      {loading ? (
        <ActivityIndicator size="large" />
      ) : data ? (
        // Exibe os dados recebidos da API
        <View style={styles.dataContainer}>
          <Text style={styles.dataTitle}>{data.title}</Text>
          <Text style={styles.dataBody}>{data.body}</Text>
        </View>
      ) : (
        // Exibe mensagem de erro caso não haja dados
        <Text>Erro ao carregar dados.</Text>
      )}
      {/* Grupo de botões para testar métodos HTTP */}
      <View style={styles.buttonGroup}>
        {/* Botão PATCH - Atualiza parcialmente o recurso */}
        <Button title="PATCH" onPress={() => patch(1, jsonPatch)} />
        {/* Botão POST - Cria um novo recurso */}
        <Button title="POST" onPress={() => post(jsonPost)} />
        {/* Botão PUT - Atualiza completamente o recurso */}
        <Button title="PUT" onPress={() => put(1, jsonPut)} />
        {/* Botão DELETE - Remove o recurso */}
        <Button title="DELETE" onPress={() => del(1)} />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  )
}
