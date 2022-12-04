import { useState } from 'react'

function App () {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [result, setResult] = useState('')
  const [registers, setRegisters] = useState([])

  const handleChange = event => {
    if (event.target.name === 'number1') {
      setNumber1(event.target.value)
    } else if (event.target.name === 'number2') {
      setNumber2(event.target.value)
    }
  }

  const calculate = () => {
    let num1 = parseInt(number1, 2)
    let num2 = parseInt(number2, 2)

    let result = 0
    let registers = []

    while (num2 > 0) {
      if (num2 & 1) {
        result += num1
      }

      registers.push(result.toString(2))

      num1 <<= 1
      num2 >>= 1
    }

    setResult(result.toString(2))
    setRegisters(registers)
  }

  return (
    <div>
      <label>çarpılan:</label><br></br>
      <input
        type='text'
        name='number1'
        value={number1}
        onChange={handleChange}
        placeholder='Binary number 1'
      /><br></br>
      <label>çarpan:</label>
      <br></br>
      
      <input
        type='text'
        name='number2'
        value={number2}
        onChange={handleChange}
        placeholder='Binary number 2'
      />
      <button onClick={calculate}>Calculate</button>
      <p>Result: {result}</p>
      <p>
        her bir kaydırmada sonuç:{' '}
        {registers.map(register => (
          <span>{register},</span>
        ))}
      </p>
      <div>
        powered by Mehmet Ali Kuyucu with OpenAi ChatGPT
      </div>
    </div>
  )
}

export default App
