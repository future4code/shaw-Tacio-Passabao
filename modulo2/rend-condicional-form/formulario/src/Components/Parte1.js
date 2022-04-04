import React from "react";
import styled from "styled-components";

let Div = styled.div`
  text-align: center;
`;

export default class Parte1 extends React.Component {
  render() {
    return (
      <Div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>1. Qual o seu nome completo?</p>
        <input type="text" />
        <p>2. Qual a sua idade?</p>
        <input type="text" />
        <p>3. Qual o seu e-mail?</p>
        <input type="text" />
        <p>4. Qual a sua escolaridade?</p>
        <select name="select">
          <option>Ensino médio incompleto</option>
          <option>Ensino médio completo</option>
          <option>Ensino superior incompleto</option>
          <option>Ensino superior completo</option>
        </select>
      </Div>
    );
  }
}
