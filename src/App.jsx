import { useState } from 'react';
import MainComp from './components/pages/MainComp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MainComp />
      </div>
    </>
  );
}

export default App;
