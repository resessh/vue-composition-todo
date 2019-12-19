<template>
  <div id="app">
    <todo-register />
    <todo-list />
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, ref, provide } from '@vue/composition-api';
import TodoRegister from '@/components/TodoRegister.vue';
import TodoList from '@/components/TodoList.vue';
import TodoContainer from '@/use/todos';
import { Todo } from '@/types/app';

export default createComponent({
  name: 'App',
  components: {
    TodoRegister,
    TodoList,
  },
  setup() {
    const { state, addItem } = TodoContainer.Provide();

    return {
      items: state.items,
      addItem,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
