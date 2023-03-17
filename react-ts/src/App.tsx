import Todos from './components/Todos';
import './App.css';


function App() {
  return (
    <div>
      <Todos items={['React', 'TypeScript']} />
    </div>
  );
}

export default App;
