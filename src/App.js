import './App.scss';
import MainRouter from './components/Router';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation />
      <MainRouter />
    </div>
  );
}

export default App;
