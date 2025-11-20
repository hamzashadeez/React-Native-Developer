import React, { useState, useEffect } from "react";
import { Platform } from "react-native";

import * as SecureStore from "expo-secure-store";

const STORAGE_KEY = "TodoItems";

export const getAllTasks = async () => {
  if (Platform.OS === "web") {
    // Web: Use localStorage
    try {
      const storedTodos = window.localStorage.getItem(STORAGE_KEY);
      console.log(`Web: Retrieved all tasks from localStorage.`);
      return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (e) {
      console.error("Web: Failed to get all tasks from localStorage", e);
      return [];
    }
  } else {
    // Native (iOS/Android): Use SecureStore
    try {
      const storedTodos = await SecureStore.getItemAsync(STORAGE_KEY);
      console.log(`Native: Retrieved all tasks from SecureStore.`);
      return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (e) {
      console.error("Native: Failed to get all tasks from SecureStore", e);
      return [];
    }
  }
};

async function saveItem(key: string, value: any) {
  if (Platform.OS === "web") {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      console.log(`Web: Saved item "${key}" to localStorage.`);
    } catch (e) {
      console.error("Web: Failed to save to localStorage", e);
    }
  } else {
    // Native (iOS/Android): Use SecureStore (encrypted)
    try {
      await SecureStore.setItemAsync(key, value);
      console.log(`Native: Saved item "${key}" securely to SecureStore.`);
    } catch (e) {
      console.error("Native: Failed to save to SecureStore", e);
    }
  }
}

async function getItem(key: string) {
  if (Platform.OS === "web") {
    // Web: Use localStorage
    try {
      const value = window.localStorage.getItem(key);
      console.log(`Web: Retrieved item "${key}" from localStorage.`);
      return value;
    } catch (e) {
      console.error("Web: Failed to get from localStorage", e);
      return null;
    }
  } else {
    // Native (iOS/Android): Use SecureStore
    try {
      const value = await SecureStore.getItemAsync(key);
      console.log(`Native: Retrieved item "${key}" from SecureStore.`);
      return value;
    } catch (e) {
      console.error("Native: Failed to get from SecureStore", e);
      return null;
    }
  }
}

async function deleteItem(key: string) {
  if (Platform.OS === "web") {
    // Web: Use localStorage
    try {
      window.localStorage.removeItem(key);
      console.log(`Web: Deleted item "${key}" from localStorage.`);
    } catch (e) {
      console.error("Web: Failed to delete from localStorage", e);
    }
  } else {
    // Native (iOS/Android): Use SecureStore
    try {
      await SecureStore.deleteItemAsync(key);
      console.log(`Native: Deleted item "${key}" from SecureStore.`);
    } catch (e) {
      console.error("Native: Failed to delete from SecureStore", e);
    }
  }
}

const addTask = (task: string) => {
  if (task.trim()) {
    const newTodo = {
      id: Date.now().toString(),
      text: task.trim(),
      completed: false,
    };
  }
};

const toggleTask = (id: any) => {
  // setTodos(
  //   todos.map((todo: any) =>
  //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //   )
  // );
};

const deleteTask = (id: string) => {
  // setTodos(todos.filter((todo) => todo.id !== id));
};

// export { addTask, toggleTask, deleteTask, saveItem, getItem, deleteItem, STORAGE_KEY };
