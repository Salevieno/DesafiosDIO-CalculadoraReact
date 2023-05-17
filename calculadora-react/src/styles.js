import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(220, 235, 250) ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const CalculadoraContainer = styled.div`
    padding: 10px ;
    background-color: rgb(0, 220, 255) ;
    border: solid black 2px;
    border-radius: 15px;
    box-shadow: 0px 3px 3px 5px rgb(0, 0, 0, 0.2);
    margin-top: 30px
`

export const Button = styled.button`
    min-width: 40px;
    min-height: 40px;
    width: 40px;
    height: 40px;
    background-color: rgb(0, 150, 255);
    border-radius: 8px;
    margin: 2px ;
    font-size: 1.1em;

    cursor: pointer;
`

export const Input = styled.input`
    min-width: 163px;
    width: 163px;
    border: solid black 2px;
    border-radius: 5px;
    padding 3px;
    margin: 12px 2px 10px 2px;
    box-shadow: 0px 1px 3px 1px rgb(0, 0, 0, 0.2);
`

export const Title = styled.h1`
    margin: 30px 0px ;
    text-shadow: 2px 2px 5px rgb(0, 0, 0, 0.2);
`

export const SubTitle = styled.h3`
    margin: 30px 0px ;
    color: rgb(130, 30, 130, 0.8);
    text-shadow: 2px 2px 5px rgb(0, 0, 0, 0.2);
`