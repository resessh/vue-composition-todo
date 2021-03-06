import { provide, inject } from '@vue/composition-api';

export type ContainerProviderProps<State = void> = {
  initialState?: State;
};

export type Container<Value, State = void> = {
  Provide: (props?: ContainerProviderProps<State>) => Value;
  useContainer: () => Value;
};

export function createContainer<Value, State = void>(
  useHook: (initialState?: State) => Value
): Container<Value, State> {
  let providerSymbol: Symbol;

  function Provide(props?: ContainerProviderProps<State>): Value {
    providerSymbol = Symbol();
    const value = useHook(props && props.initialState);
    provide<Value>(providerSymbol, value);

    return value;
  }

  function useContainer(): Value {
    const value = inject<Value>(providerSymbol);
    if (!value) {
      throw new Error('Container must be used in provided Component.');
    }
    return value;
  }

  return { Provide, useContainer };
}
