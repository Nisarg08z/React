
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Nisarg",
    age: 19
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Nisarg" btnText="click me" />
      <Card username="Hemang" />
    </>
  )
}

export default App