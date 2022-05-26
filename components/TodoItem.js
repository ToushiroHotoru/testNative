import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          pressHandler(item.id);
        }}
      >
        <Text style={styles.listItem}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    marginTop: 10,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    width: 320,
  },
});
