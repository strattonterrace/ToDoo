import { Link } from 'expo-router';
import { Alert, Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTasks } from '../context/TaskContext';

export default function Home() {
  const { tasks, deleteTask } = useTasks();

  const handleDelete = (id: string, title: string) => {
    Alert.alert(
      'Delete Task',
      `Are you sure you want to delete "${title}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => deleteTask(id) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoo Tasks</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onLongPress={() => handleDelete(item.id, item.title)}
            style={({ pressed }) => [
              styles.task,
              pressed && { backgroundColor: '#eee' },
            ]}
          >
            <Text>{item.title}</Text>
          </Pressable>
        )}
        ListEmptyComponent={<Text>No tasks yet. Add one!</Text>}
      />

      <Link href="/add">
        <Button title="Add New Task" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  task: {
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,
    borderRadius: 6,
  },
});