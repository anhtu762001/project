import './App.css';
import Contents from './Components/Contents/Contents';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
    </div>
  );
}

export default App;
