import { TextInput } from "react-native"
import {styles} from "./style"

export default function Search(props) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Buscar..."
      value={props.value}
      onChangeText={props.changeText}
      autoCorrect={false}
      autoCapitalize="none"
      clearButtonMode="while-editing"
    />
  )
}
