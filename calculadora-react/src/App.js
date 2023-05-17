import { useState } from "react"

import { Button, CalculadoraContainer, Container, Input, SubTitle, Title } from "./styles.js"

function setInputTo(value)
{
  document.getElementById("mainInput").value = value;
}

function getMainInput()
{
  if (document.getElementById("mainInput") === null) { return null}
  return document.getElementById("mainInput").value ;
}

function handleSubtracao(valor1, valor2)
{
  return Number(valor1) - Number(valor2) ;
}

function handleMultiplicacao(valor1, valor2)
{
  return Number(valor1) * Number(valor2) ;
}

function handleDivisao(valor1, valor2)
{
  return Number(valor1) / Number(valor2) ;
}

function handleResultado(valor1, valor2, operacao)
{
  return performOperation(valor1, valor2, operacao)
}

function performOperation(valor1, valor2, operacao)
{
  switch (operacao)
  {
    case "Soma": return (Number(valor1) + Number(valor2)) ;
    case "Subtracao": return handleSubtracao(valor1, valor2) ;
    case "Multiplicacao": return handleMultiplicacao(valor1, valor2) ;
    case "Divisao": return handleDivisao(valor1, valor2) ;
    default: return valor2 ;
  }
}

function limpaInput() { setInputTo("") ;}

function Calculadora()
{
  const [valorAtual, setValorAtual] = useState("0")
  const [operacao, setOperacao] = useState("")
  const [recebendoInput, setRecebendoInput] = useState(true)
  const [inputTexto, setInputTexto] = useState(valorAtual)

  const Soma = () => {
    let novoValor = recebendoInput ? 0 : performOperation(valorAtual, getMainInput(), "Soma")
    if (!recebendoInput) { setValorAtual(novoValor) }
    if (recebendoInput) { setInputTexto("+") } else { setInputTexto(valorAtual) }
    setRecebendoInput(!recebendoInput)
    setOperacao("Soma")
  }

  const Subtrai = () => {
    let novoValor = performOperation(valorAtual, getMainInput(), "Subtracao")
    setValorAtual(novoValor)
    setInputTo("-")
  }

  const Multiplica = () => {
    let novoValor = performOperation(valorAtual, getMainInput(), "Multiplicacao")
    setValorAtual(novoValor)
    setInputTo("x")
  }

  const Divide = () => {
    let novoValor = performOperation(valorAtual, getMainInput(), "Divisao")
    setValorAtual(novoValor)
    setInputTo("/")
  }

  const Resultado = () => {
    const resultado = handleResultado(valorAtual, getMainInput(), operacao) 
    setInputTexto(resultado)
  }

  const AppendToInput = (value) =>
  {
    setValorAtual(Number(valorAtual.toString().concat(value)))
    setInputTexto(Number(inputTexto.toString().concat(value)))
    //setInputTo(Number(valorAtual + value))
  }
  
  return (
    <CalculadoraContainer>
      <Input id="mainInput" value={inputTexto} />
        <div>
          <Button onClick={Multiplica}>x</Button>
          <Button onClick={Divide}>/</Button>
          <Button onClick={limpaInput}>C</Button>
          <Button>X</Button>
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
