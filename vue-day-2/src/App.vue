<template>
  <button @click="tab = 'node'">Node</button>
  <button @click="tab = 'php'">PHP</button>
  <button @click="tab = 'vue'">Vue</button>
  <component :is="tab"></component>
</template>

<script>
import Node from "./components/Node.vue";
import Php from "./components/Php.vue";
import Vue from "./components/Vue.vue";
export default {
  components: {
    Node,
    Php,
    Vue,
  },
  data() {
    return {
      tab: "",
    };
  },
};
</script>

<style></style>
