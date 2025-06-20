import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import { useTasks } from '../context/TaskContext';

export default function AddTask() {
  const [taskText, setTaskText] = useState('');
  const { addTask } = useTasks();
  const router = useRouter();

  const handleAdd = () => {
    if (!taskText.trim()) {
      Alert.alert('Task cannot be empty');
      return;
    }

    addTask(taskText);
    setTaskText('');
    router.back(); // Navigate back to Home
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your task"
        style={styles.input}
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  input: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});