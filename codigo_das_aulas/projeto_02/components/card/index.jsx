import { Link } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./style"

export default function Card(props) {
  return (
    <SafeAreaView>
      <Link
        href={{ pathname: "/lesson/[id]", params: { id: `${props.id}` } }}
        asChild
      >
        <TouchableOpacity activeOpacity={0.8} style={styles.conteiner}>
          <View style={styles.conteinerDate}>
            <Text style={[styles.textDate, styles.text]}>{props.day}</Text>
            <Text style={styles.textDate}>{props.month}</Text>
          </View>
          <View style={styles.conteinerTitle}>
            <Text>{props.title}</Text>
          </View>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  )
}
