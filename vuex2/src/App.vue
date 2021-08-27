<template>
  <div>
    <Todo/>
    <ul>
<li><ejs-radiobutton label='Option 1' name='default'></ejs-radiobutton></li>
<li><ejs-radiobutton label='Option 2' name='default' checked=true></ejs-radiobutton></li>
</ul>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue"
import Vue from 'vue';
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);

export default {
  components:{Todo}
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>