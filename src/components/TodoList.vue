<template>
  <ul class="list">
    <li v-for="item in items" :key="item.id" class="list__item">
      <todo-item :item="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import { createComponent, inject } from '@vue/composition-api';
import TodoItem from '@/components/TodoItem.vue';
import { Todo } from '@/types/app';
import TodoContainer from '@/use/todos';

export default createComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },
  setup() {
    const { state } = TodoContainer.useContainer();
    return { items: state.items };
  },
});
</script>

<style lang="scss" scoped>
.list {
  &__item {
    display: block;
  }
}
</style>
