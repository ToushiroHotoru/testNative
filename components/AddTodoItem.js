import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function AddTodoItem({ pressHandler }) {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="it is just for test"
        onChangeText={(val) => {
          setName(val);
        }}
      />
      <Button
        title="add user"
        style={styles.btn}
        onPress={() => {
          pressHandler(name);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#777",
    width: 320,
    marginBottom: 15,
  },
});
