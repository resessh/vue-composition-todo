<template>
  <div class="todo">
    {{ item.title }}
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import { Todo } from '@/types/app';

export default createComponent({
  name: 'TodoItem',
  props: {
    item: {
      type: Object as () => Todo,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.todo {
  display: block;
}
</style>
