import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const Todo = ({ setTodos, todos }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.createTodoContainer}>
      <TextInput
        style={styles.inputText}
        onChangeText={(txt) => setText(txt)}
        value={text}
      />
      <Button
        title="Create"
        style={styles.button}
        onPress={(e) => {
          setTodos([...todos, { value: text }]);
          setText("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  createTodoContainer: {
    width: "100%",
    height: "250px",
    flexDirection: "column",
    padding: "2rem",
    backgroundColor: "#f1f1f1",
  },
  inputText: {
    width: "100%",
    height: "40px",
    color: "#555",
    textIndent: "3px",
    borderWidth: "2px",
    borderColor: "#555",
    marginBottom: "2rem",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    color: "#555",
    padding: "8px 20px",
    borderWidth: "2px",
    borderColor: "#555",
  },
});

export default Todo;
