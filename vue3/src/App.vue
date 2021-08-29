<template>
  <section>
    <article>
      <textarea :value="text" @input="update"></textarea>
    </article>
    <article class="right" v-html="markedText"></article>
  </section>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      text: "",
      timeOut: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      let task=()=>{
        return this.text=e.target.value
      }
      this.recomponent(()=>{
      return task()
      },5000)
    },
    recomponent(cb,wait=1000){
      clearTimeout(this.timeOut)
      this.timeOut=setTimeout(()=>{
        cb()
      },wait)
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
section {
  display: flex;
  height: 100vh;
}
textarea {
  height: 100%;
  width: 100%;
  padding: 5px;
  outline: none;
}
article {
  width: 50%;
  border: 1px solid #ddd;
  padding: 5px;
}
.right {
  background: #ddd;
  padding-left: 10px;
}
</style>
