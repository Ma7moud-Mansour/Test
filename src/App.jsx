import { useState } from 'react';
import InputScreen from './components/InputScreen';
import HeartScreen from './components/HeartScreen';

function App() {
  const [name, setName] = useState('');

  return (
    <>
      {!name ? (
        <InputScreen onNameSubmit={setName} />
      ) : (
        <HeartScreen name={name} />
      )}
    </>
  );
}

export default App;
