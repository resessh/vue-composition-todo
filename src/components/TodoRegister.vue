<template>
  <form @submit.prevent="onSubmit" class="register">
    <input type="text" v-model="state.title" />
    <button type="submit">add</button>
  </form>
</template>

<script lang="ts">
import { createComponent, ref, reactive } from '@vue/composition-api';
import { Todo } from '@/types/app';

export default createComponent({
  name: 'TodoRegister',
  setup(_, ctx) {
    const state = reactive({
      title: '',
    });
    const onSubmit = () => {
      console.log('submit');
      ctx.emit('register', { title: state.title });
      state.title = '';
    };

    return {
      state,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.todo {
  display: block;
}
</style>
