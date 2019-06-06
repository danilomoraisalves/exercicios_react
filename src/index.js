import React from 'react'
import ReactDom from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
// import {CompA, CompB} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        <Familia sobrenome="Morais">
            <Membro nome="Danilo"></Membro>
            <Membro nome="Danilo1"></Membro>
        </Familia>
        {/* <FamiliaSilva/> */}
        {/* <MultiElementos/> */}
        {/* <CompA valor="Olá eu sou A"></CompA>
        <CompB valor="Olá eu sou B"></CompB> */}
        {/* <PrimeiroComponente valor="Bom dia"></PrimeiroComponente> */}
    </div>
,elemento)


// const elemento = document.getElementById('root')
// ReactDom.render(<h1>Ola React</h1>, elemento);