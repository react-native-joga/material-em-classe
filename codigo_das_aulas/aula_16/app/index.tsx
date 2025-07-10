import { FontAwesome } from "@expo/vector-icons"
import { Image } from "expo-image"
import { Link } from "expo-router"
import type { SQLiteDatabase } from "expo-sqlite"
import { useEffect, useState } from "react"
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { fetchAllContacts, initDatabase } from "../service/database/database"
import { Contact } from "../types/contact"

export default function Index() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [db, setDb] = useState<SQLiteDatabase | null>(null)

  useEffect(() => {
    ;(async () => {
      const database = await initDatabase()
      setDb(database)
      const data = await fetchAllContacts(database)
      setContacts(data)
    })()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link
            asChild
            href={{
              pathname: "/update-contact",
              params: { id: item.id },
            }}
          >
            <TouchableOpacity style={styles.item}>
              {item.photo_uri ? (
                <Image source={{ uri: item.photo_uri }} style={styles.photo} />
              ) : null}
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.phone}>{item.phone_number}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Não há contatos ainda.</Text>
        }
      />

      <Link asChild href={{ pathname: "/create-contact" }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <View style={styles.circle}>
            <FontAwesome color="#ffffff" size={20} name="plus" />
          </View>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: "11%",
    right: "10%",
    zIndex: 100,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007AFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  phone: {
    color: "#555",
    marginTop: 4,
  },
  empty: {
    padding: 20,
    textAlign: "center",
    color: "#666",
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc", // fallback
  },
})
