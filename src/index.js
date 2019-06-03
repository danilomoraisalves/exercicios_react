import React from 'react'
import ReactDom from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'


const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        <PrimeiroComponente></PrimeiroComponente>
    </div>
,elemento)


// const elemento = document.getElementById('root')
// ReactDom.render(<h1>Ola React</h1>, elemento);