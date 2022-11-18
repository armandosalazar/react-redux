import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/counter'
import Other from './components/other'

function App() {

  return (
    <div>
      <Counter />
      <Other />
      <img src={reactLogo} alt="" srcset="" />
    </div>
  )
}

export default App
