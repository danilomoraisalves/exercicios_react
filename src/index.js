import React from 'react'
import ReactDom from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA, CompB} from './componentes/DoisComponentes'


const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        <CompA valor="Olá eu sou A"></CompA>
        <CompB valor="Olá eu sou B"></CompB>
        {/* <PrimeiroComponente valor="Bom dia"></PrimeiroComponente> */}
    </div>
,elemento)


// const elemento = document.getElementById('root')
// ReactDom.render(<h1>Ola React</h1>, elemento);