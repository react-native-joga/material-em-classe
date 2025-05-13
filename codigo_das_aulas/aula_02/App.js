import { Text, SafeAreaView, StyleSheet, TextInput } from "react-native"

import { useState } from "react"

export default function App() {
  const [text, onChangeText] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Digite algo"
        ></TextInput>
        <Text style={styles.text}>{text}</Text>
      </SafeAreaView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
