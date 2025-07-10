import { View, Text, StyleSheet } from "react-native"

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Atividade do Curso de React Native</Text>
      <Text style={styles.text2}> Bem-vindo ao App de Aulas! </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 20,
    fontWeight: 500,
  },
  text2: {
    fontSize: 15,
    fontWeight: 300,
  },
})
