<template>
  <h1>Todo List</h1>

  <input @keypress.enter="addTodo" type="text" v-model="toDoName" />
  <button @click="addTodo">Add</button>
  <hr />
  <ul>
    <li v-for="item in list" :key="item.id">
      {{ item.title }}
      <button @click="statusChange(item)">{{ item.status }}</button>
      <button @click="editTodo(item)">Edit</button>
      <button @click="deleteTodo(item)">Delete</button>
    </li>
  </ul>
  <hr />
  <h2>Incomplete</h2>
  <ul>
    <li v-for="todo in IncompleteTodo" :key="todo.id">{{ todo.title }}</li>
  </ul>
  <h2>Complete</h2>
  <ul>
    <li v-for="todo in completeTodo" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>

<script>
import { comState } from "../assets/comState";
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    let {
      toDoName,
      list,
      IncompleteTodo,
      completeTodo,
      isUpdate,
      currentUpdateItem,
    } = comState();
    const addTodo = () => {
      if (!isUpdate.value) {
        store.dispatch("addTodo", {
          title: toDoName.value,
          status: "todo",
        });
        toDoName.value = "";
      } else {
        store.dispatch("updateTodo", {
          ...currentUpdateItem.value,
          title: toDoName.value,
        });
        toDoName.value = "";
      }
    };
    onMounted(() => {
      getTodoList();
    });
    function getTodoList() {
      store.dispatch("getTodoList");
    }
    function statusChange(item) {
      if (item.status === "todo") {
        item.status = "complete";
      } else {
        item.status = "todo";
      }
      store.dispatch("changeStatus", item);
    }
    const editTodo = (item) => {
      isUpdate.value = true;
      toDoName.value = item.title;
      currentUpdateItem.value = item;
    };
    const deleteTodo = (item) => {
      store.dispatch("deleteTodo", item);
    };

    return {
      toDoName,
      addTodo,
      list,
      IncompleteTodo,
      completeTodo,
      statusChange,
      editTodo,
      deleteTodo,
    };
  },
};
</script>

<style></style>
