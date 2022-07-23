import { useContext, useReducer, createContext } from 'react';
const CounterContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'subtract':
      return state - 1;
    default:
      return state;
  }
};

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
      {children}
    </CounterContext.Provider>
  );
};
const Container = () => {
  return (
    <div>
      <AddOneButton />
      <SubtractOneButton />
    </div>
  );
};

const AddOneButton = () => {
  const [, dispatch] = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'add' })}>Add one</button>
    </div>
  );
};

const SubtractOneButton = () => {
  const [, dispatch] = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'subtract' })}>
        subtract one
      </button>
    </div>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <div>Counter: {counter}</div>;
};

function CounterUseSate() {
  return (
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  );
}

export default function CounterUseStatePage() {
  return (
    <>
      <CounterUseSate />;
      <CounterUseSate />;
      <CounterUseSate />;
      <CounterUseSate />;
    </>
  );
}
