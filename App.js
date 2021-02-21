import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import MenuIcon from "@material-ui/icons/Menu";
import InputTodo from "./src/InputTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.white}>XDos</Text>
        <MenuIcon style={{ color: "white" }} />
      </View>
      <View style={styles.content}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Text style={styles.contentText}>{item.value}</Text>
          )}
        />
      </View>
      <InputTodo todos={todos} setTodos={setTodos} style={styles.InputTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
  },
  header: {
    padding: "20px",
    height: "55px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#482880",
  },
  white: {
    color: "white",
    fontSize: "20px",
    fontFamily: "Karla",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: "1rem",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  contentText: {
    color: "#555",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Karla",
    borderBottomWidth: "2px",
    borderBottomColor: "#555",
    borderRadius: "5px",
    textIndent: "5px",
    height: "35px",
    marginTop: "1rem",
  },
});

export default App;
