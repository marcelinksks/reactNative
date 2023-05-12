import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const addTodo = () => {
    if (todoInput.length > 0) {
      setTodoList([...todoList, todoInput]);
      setTodoInput('');
    }
  };

  const removeTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>-------------------Lista-------------------</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={todoInput}
          onChangeText={text => setTodoInput(text)}
          placeholder="Adicionar tarefa..."
          placeholderTextColor='#fff'
        />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.todoContainer}>
        {todoList.map((todo, index) => (
          <View key={index} style={styles.todoItem}>
            <Text style={styles.todoText}>{todo}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeTodo(index)}>
              <Text style={styles.removeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#000000',
    paddingTop: 40,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#FF6347'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
    color: '#fff'
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#fff',
    borderWidth: 2
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  todoContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 10,
    marginBottom: 10,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
  },
  todoText: {
    fontSize: 18,
    color: '#fff'
  },
  removeButton: {
    backgroundColor: '#000000',
    borderRadius: 50,
    padding: 5,
    borderColor: '#fff',
    borderWidth: 2,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TodoList;
