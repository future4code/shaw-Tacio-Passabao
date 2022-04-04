import React from "react";
import styled from "styled-components";
let Div = styled.div`
  text-align: center;
`;

export default class Parte3 extends React.Component{
    render (){
        return <Div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input type="text"/>
            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option>Curso de inglês</option>
                <option>Curso técnico</option>
                <option>Não fiz um curso complementar</option>
            </select>
        </Div>
    }
}