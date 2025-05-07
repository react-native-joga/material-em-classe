import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native"

const Separator = () => <View style={styles.separator} />

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textHello}>Hello World!</Text>
      </View>
      <Separator />
      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} keyboardType="numeric" />
      </View>
      <Separator />
      <View>
        <Button
          title="pressione"
          onPress={() => Alert.alert("Aviso", "Botão simples pressionado")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: "center",
  },
  textHello: {
    textAlign: "center",
    fontSize: 40,
    textColor: "#000",
  },
  input: {
    height: 50,
    width: "50%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})
