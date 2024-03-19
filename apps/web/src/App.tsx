import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>yamcodes/my-turborepo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        This repository has 2 main websites:
        <ul>
          <li>
            <a href="https://yamcodes-worldwideweb.web.app/">www</a>
          </li>
          <li>
            <a href="https://yamcodes-worldwideweb2.web.app/">www2</a>
          </li>
        </ul>
      </p>
      <p>This is the best paragraph ever</p>
    </>
  );
}

export default App;
