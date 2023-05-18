import { useState } from "react"

import { Button, CalculadoraContainer, Container, Input, SubTitle, Title } from "./styles.js"

function getMainInput()
{
  if (document.getElementById("mainInput") === null) { return null}
  return document.getElementById("mainInput").value ;
}


function performOperation(valor1, valor2, operacao)
{
  switch (operacao)
  {
    case "Soma": return (Number(valor1) + Number(valor2)) ;
    case "Subtracao": return Number(valor1) - Number(valor2) ;
    case "Multiplicacao": return Number(valor1) * Number(valor2) ;
    case "Divisao": return Number(valor1) / Number(valor2) ;
    default: return valor2 ;
  }
}

function Calculadora()
{
  const [valorAtual, setValorAtual] = useState("0")
  const [novoValor, setNovoValor] = useState("0")
  const [operacao, setOperacao] = useState("")
  const [recebendoInput, setRecebendoInput] = useState(true)
  const [inputTexto, setInputTexto] = useState(valorAtual)

  const updateInput = (recebendoInput, novoValor, inputText) => 
  {
    if (recebendoInput)
    {
      setInputTexto(inputText)
      setValorAtual(novoValor)
    }
    else
    {
      setInputTexto(novoValor)
    }
  }

  const Soma = () => {
    let resultado = recebendoInput ? getMainInput() : performOperation(valorAtual, getMainInput(), "Soma")
    //setNovoValor(resultado)
    updateInput(recebendoInput, resultado, "+")
    setRecebendoInput(!recebendoInput)
    setOperacao("Soma")
  }

  const Subtrai = () => {
    let resultado = recebendoInput ? getMainInput() : performOperation(valorAtual, getMainInput(), "Subtracao")
    //setNovoValor(resultado)
    updateInput(recebendoInput, resultado, "-")
    setRecebendoInput(!recebendoInput)
    setOperacao("Subtracao")
  }

  const Multiplica = () => {
    let resultado = recebendoInput ? getMainInput() : performOperation(valorAtual, getMainInput(), "Multiplicacao")
    //setNovoValor(resultado)
    updateInput(recebendoInput, resultado, "*")
    setRecebendoInput(!recebendoInput)
    setOperacao("Multiplicacao")
  }

  const Divide = () => {
    let resultado = recebendoInput ? getMainInput() : performOperation(valorAtual, getMainInput(), "Divisao")
    //setNovoValor(resultado)
    updateInput(recebendoInput, resultado, "/")
    setRecebendoInput(!recebendoInput)
    setOperacao("Divisao")
  }

  const Resultado = () => {
    let valor2 = novoValor
    if (novoValor === "0")
    {
      valor2 = getMainInput()
      setNovoValor(valor2)
    }
    const resultado = performOperation(valorAtual, valor2, operacao)
    setValorAtual(resultado)
    setInputTexto(resultado)
  }

  const limpaInput = () =>
  {
    setValorAtual(0)
    setInputTexto("0")
  }

  const AppendToInput = (value) =>
  {
    if (value === ".")
    {
      setInputTexto(inputTexto.toString().concat("."))
      return
    }
    if (inputTexto === "+" | inputTexto === "-" | inputTexto === "*" | inputTexto === "/")
    {
      setInputTexto(Number(value))
      return
    }
    setInputTexto(Number(inputTexto.toString().concat(value)))
  }
  
  return (
    <CalculadoraContainer>
      <Input id="mainInput" value={inputTexto} />
        <div>
          <Button onClick={Multiplica}>x</Button>
          <Button onClick={Divide}>/</Button>
          <Button onClick={limpaInput}>C</Button>
          <Button onClick={() => {AppendToInput(".")}}>.</Button>
        </div>
        <div>
          <Button onClick={() => {AppendToInput(7)}}>7</Button>
          <Button onClick={() => {AppendToInput(8)}}>8</Button>
          <Button onClick={() => {AppendToInput(9)}}>9</Button>
          <Button onClick={Subtrai}>-</Button>
        </div>
        <div>
          <Button onClick={() => {AppendToInput(4)}}>4</Button>
          <Button onClick={() => {AppendToInput(5)}}>5</Button>
          <Button onClick={() => {AppendToInput(6)}}>6</Button>
          <Button onClick={Soma}>+</Button>
        </div>
        <div>
          <Button onClick={() => {AppendToInput(1)}}>1</Button>
          <Button onClick={() => {AppendToInput(2)}}>2</Button>
          <Button onClick={() => {AppendToInput(3)}}>3</Button>
          <Button onClick={Resultado}>=</Button>
        </div>
    </CalculadoraContainer>

  )
}

export default function App() {
  return (
    <Container className="App">
      <header className="App-header"></header>
      <Title>Bem vinde à calculadora do Salevieno!</Title>
      <SubTitle>{"Faz tudo o que as outras fazem, só que essa é minha "}{"<3"}</SubTitle>
      <Calculadora />
    </Container>
  );
}
