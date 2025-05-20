import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTasks = () => {
    setTasks([...tasks, {id: Date.now().toString(), text: task}]);
    setTask('');
  }

  return (
    <View style = {styles.content}>
      <Text style= {styles.title}>ToDo App</Text>
      <TextInput
      placeholder = 'Adicione uma tarefa'
      value = {task}
      onChangeText = {setTask}
      style = {styles.input}
      />
      <Button title = 'adicionar' onPress = {addTasks}/>
      
      <FlatList
        style = {styles.list}
        data = {tasks}
        keyExtractor = { (item) => item.id}
        renderItem = {({item}) => (
          <TouchableOpacity
          style = {styles.taskItem}
          >
            <Text>{item.text}</Text>
          </TouchableOpacity>
        )}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  content:{padding: 20,},
  title: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  
});