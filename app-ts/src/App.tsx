import Todos from './components/Todos';

import './App.css';

function App() {
  return (
    <div>
      <Todos items={["item one", "item two"]} />
    </div>
  );
}

export default App;
