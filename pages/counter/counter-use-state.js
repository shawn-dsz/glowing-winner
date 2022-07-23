import { Children, useState } from 'react';

const Container = ({ children }) => {
  return <div>{children}</div>;
};

const AddOneButton = ({ setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Add one
      </button>
    </div>
  );
};

const Counter = ({ counter }) => {
  return <div>Counter: {counter}</div>;
};

export default function CounterUseSate() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Container>
        <AddOneButton setCounter={setCounter} />
      </Container>
      <Counter counter={counter} />
    </div>
  );
}
