<template>
  <section class="mark__wrapper">
    <article class="left">
      <textarea :value="text" @input="update"></textarea>
    </article>
    <article class="right">
      <span v-html="markedText"></span>
      <span v-if="isLoading">Lodding...</span>
    </article>
  </section>
</template>

<script>
import { computed, ref } from "vue";
import marked from "marked";
export default {
  setup() {
    const text = ref("");
    const markedText = computed(() => {
      return marked(text.value);
    });
    let time = ref("");
    const isLoading = ref(false);

    const update = (e) => {
        // isLoading.value = false;
        clearTimeout(time.value);
        isLoading.value = true;
    time.value= setTimeout(() => {
        text.value = e.target.value;
      }, 1000);       
     
        
    };
    isLoading.value = false;

    return {
      text,
      update,
      markedText,
      isLoading,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.mark__wrapper {
  height: 100vh;
  display: flex;
}
article {
  width: 50%;
  height: 100%;
  padding: 10px;
  border: 2px solid rgb(70, 70, 70);
}
.right {
  background: #ddd;
}
textarea {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}
</style>
