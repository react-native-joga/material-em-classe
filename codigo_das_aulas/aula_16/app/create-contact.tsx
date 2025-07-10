import * as ImagePicker from "expo-image-picker"
import type { SQLiteDatabase } from "expo-sqlite"
import React, { useEffect, useState } from "react"
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import { initDatabase, insertContact } from "../service/database/database"

export default function CreateContact() {
  const [db, setDb] = useState<SQLiteDatabase | null>(null)
  const [name, setName] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [photoUri, setPhotoUri] = useState("")

  useEffect(() => {
    ;(async () => {
      const database = await initDatabase()
      setDb(database)
    })()
  }, [])

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!permission.granted) {
      Alert.alert(
        "Permissão necessária",
        "Por favor, permita acesso à biblioteca de fotos."
      )
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    })

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri)
    }
  }

  const handleSubmit = async () => {
    if (!name || !birthDate || !phoneNumber) {
      Alert.alert("Campos ausentes", "Preencha todos os campos obrigatórios.")
      return
    }
    if (!db) {
      Alert.alert(
        "Banco de dados não inicializado",
        "Tente novamente mais tarde."
      )
      return
    }
    try {
      await insertContact(db, {
        name,
        birth_date: birthDate,
        photo_uri: photoUri,
        phone_number: phoneNumber,
      })

      Alert.alert("Sucesso", "Contato adicionado com sucesso.")
      setName("")
      setBirthDate("")
      setPhoneNumber("")
      setPhotoUri("")
    } catch (error) {
      console.error(error)
      Alert.alert("Erro", "Falha ao inserir contato.")
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome *</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Digite o nome"
      />

      <Text style={styles.label}>Data de Nascimento *</Text>
      <TextInput
        style={styles.input}
        value={birthDate}
        onChangeText={setBirthDate}
        placeholder="DD-MM-YYYY"
      />

      <Text style={styles.label}>Número de telefone *</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        placeholder="+55..."
      />

      <Text style={styles.label}>Foto</Text>
      <Button title="Escolha uma foto" onPress={pickImage} />

      {photoUri ? (
        <Image source={{ uri: photoUri }} style={styles.image} />
      ) : null}

      <View style={styles.submit}>
        <Button title="Salvar contato" onPress={handleSubmit} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  label: {
    fontWeight: "bold",
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 6,
    padding: 10,
  },
  image: {
    marginTop: 10,
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 8,
  },
  submit: {
    marginTop: 20,
  },
})
