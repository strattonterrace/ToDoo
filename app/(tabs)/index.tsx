import { Link } from 'expo-router';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useTasks } from '../context/TaskContext';

export default function Home() {
  const { tasks } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoo Tasks</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.task}>{item.title}</Text>
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
  task: { padding: 10, borderBottomWidth: 1 },
});