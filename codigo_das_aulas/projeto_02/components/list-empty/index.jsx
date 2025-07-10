import { View, Text } from "react-native"
import { styles } from "./style"

export default function ListEmpty() {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Nenhuma lição encontrada.</Text>
      <Text style={styles.hintText}>Tente outro termo de busca.</Text>
    </View>
  )
}
