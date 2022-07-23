import { useContext, useState, createContext } from 'react';
const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useState(0)}>
      {children}
    </CounterContext.Provider>
  );
};
const Container = () => {
  return (
    <div>
      <AddOneButton />
    </div>
  );
};

const AddOneButton = () => {
  const [, setCounter] = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Add one
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
