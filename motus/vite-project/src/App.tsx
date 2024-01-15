import './App.css'
import Cards from './components/cards'
import Keyboard from './components/keyboard';

function App() {
  const a = Array(6).fill(0).map((_, i) => i);
  return (
    <>
      {a.map((i) => 
        <div className="tab">
        <Cards />
        </div>
      )}
      <Keyboard />
    </>
  )
}

export default App
