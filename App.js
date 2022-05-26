import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodoItem from "./components/AddTodoItem";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState([
    { name: "zero", id: 1 },
    { name: "lero", id: 2 },
    { name: "mero", id: 3 },
    { name: "doro", id: 4 },
    { name: "sora", id: 5 },
    { name: "vivi", id: 6 },
    { name: "zena", id: 7 },
    { name: "rola", id: 8 },
    { name: "olya", id: 9 },
    { name: "vera", id: 10 },
  ]);

  const onPressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      console.log(prevPeople);
      return prevPeople.filter((item) => {
        console.log(item.id, id, item.id != id);
        return item.id != id;
      });
    });
  };

  const addUserHandler = (name) => {
    if (name.length > 3) {
      setPeople((prevPeople) => {
        return [
          {
            name: name,
            id: Math.random().toString(),
          },
          ...prevPeople,
        ];
      });
    } else {
      Alert.alert("OOPS", "the note must be at least 4 character long");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodoItem pressHandler={addUserHandler} />
        <View style={styles.list}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={people}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={onPressHandler} />
            )}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    marginBottom: 8,
  },

  list: {
    marginTop: 10,
    flex: 1,
    alignItems: "center",
    width: 320,
  },
});
