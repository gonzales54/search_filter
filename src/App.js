import Main from './component/main';
import './App.css';
import DATA from './component/MOCK_DATA.json';

function App() {
  return (
    <div className="App">
      <Main data={DATA}/>
    </div>
  );
}

export default App;
