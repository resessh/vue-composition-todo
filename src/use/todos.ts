import { createContainer } from '@/libs/vue-unstated';
import { Todo } from '@/types/app';
import { reactive } from '@vue/composition-api';

export type UnregisteredTodo = {
  title: Todo['title'];
};

type TodoState = {
  items: Todo[];
  latestId: number;
};
export const useTodos = (
  initialState: TodoState = { items: [], latestId: 0 }
) => {
  const state = reactive<TodoState>(initialState);

  const addItem = (item: UnregisteredTodo) => {
    state.latestId++;
    state.items.push({
      id: state.latestId,
      title: item.title,
    });
  };

  return { state, addItem };
};

export default createContainer(useTodos);
