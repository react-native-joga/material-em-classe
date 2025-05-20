import { useState } from "react"
import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

// Pressable - Botão alternativo

export default function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTasks = () => {
    const novaTarefa = {
      id: Date.now().toString(),
      text: task,
    }

    setTasks([...tasks, novaTarefa])
    setTask("")
  }

  const removeTask = (id) => {
    const novaLista = tasks.filter((tarefa) => tarefa.id !== id)
    setTasks(novaLista)
  }

  return (
    <SafeAreaProvider style={styles.content}>
      <Text style={styles.title}>ToDo App</Text>
      <TextInput
        placeholder="Adicione uma tarefa"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <Button title="adicionar" onPress={addTasks} />

      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => removeTask(item.id)}
          >
            <Text>{item.text}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Nenhuma tarefa adicionada</Text>
        )}
      />
      <Text style={styles.hint}>Toque na tarefa para remover</Text>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    marginTop: 30,
    flex: 1,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  list: {
    marginTop: 20,
  },
  taskItem: {
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 6,
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    marginTop: 20,
  },
  hint: {
    textAlign: "center",
    color: "#666",
    marginTop: 10,
    fontStyle: "italic",
  },
})
