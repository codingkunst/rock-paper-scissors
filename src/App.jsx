import './App.css'
import Box from './components/Box'

function App() {

  return (
    <div>
      <div className='main'>
        <Box title="나" />
        <Box title="AI" />
      </div>

      <div className='main'>
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  )
}

export default App
