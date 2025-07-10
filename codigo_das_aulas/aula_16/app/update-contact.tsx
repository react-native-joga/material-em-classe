import { Contact } from "@/types/contact"
import * as ImagePicker from "expo-image-picker"
import { useLocalSearchParams } from "expo-router"
import type { SQLiteDatabase } from "expo-sqlite"
import React, { useEffect, useState } from "react"
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import {
  firstContact,
  initDatabase,
  updateContact,
} from "../service/database/database"

export default function UpdateContact() {
  const [db, setDb] = useState<SQLiteDatabase | null>(null)
  const [name, setName] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [photoUri, setPhotoUri] = useState("")
  const [currentContact, setCurrentContact] = useState<Contact | null>(null)
  const { id } = useLocalSearchParams()

  useEffect(() => {
    ;(async () => {
      const database = await initDatabase()
      setDb(database)
      const contact = await firstContact(database, Number(id))
      if (contact) {
        setCurrentContact(contact)
      }
    })()
  }, [])

  const handleSubmit = async () => {
    if (!name || !birthDate || !phoneNumber) {
      Alert.alert("Campos ausentes", "Preencha todos os campos obrigatórios.")
      return
    }

    if (!db || !id) {
      Alert.alert("Erro", "Banco de dados ou ID não disponível.")
      return
    }

    try {
      await updateContact(db, {
        id: Number(id),
        name,
        birth_date: birthDate,
        phone_number: phoneNumber,
        photo_uri: photoUri,
      })

      Alert.alert("Sucesso", "Contato atualizado com sucesso.")
    } catch (error) {
      console.error(error)
      Alert.alert("Erro", "Falha ao atualizar contato.")
    }
  }

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

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome *</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder={currentContact?.name || "Digite o nome"}
      />

      <Text style={styles.label}>Data de Nascimento *</Text>
      <TextInput
        style={styles.input}
        value={birthDate}
        onChangeText={setBirthDate}
        placeholder={currentContact?.birth_date || "Digite o nome"}
      />

      <Text style={styles.label}>Telefone *</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        placeholder={currentContact?.phone_number || "+55..."}
      />

      <Text style={styles.label}>Foto</Text>
      <Button title="Escolher foto" onPress={pickImage} />
      {!photoUri ? (
        <Image
          source={{ uri: currentContact?.photo_uri }}
          style={styles.image}
        />
      ) : (
        <Image source={{ uri: photoUri }} style={styles.image} />
      )}

      <View style={styles.submit}>
        <Button title="Salvar alterações" onPress={handleSubmit} />
      </View>
    </View>
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
