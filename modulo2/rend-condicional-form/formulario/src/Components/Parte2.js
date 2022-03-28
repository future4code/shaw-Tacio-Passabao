import React from "react";
import styled from "styled-components";
let Div = styled.div`
  text-align: center;
`;
export default class Parte2 extends React.Component {
  render() {
    return (
      <Div>
        <h1>ETAPA 2 - SOBRE O ENSINO SUPERIOR</h1>
        <p>5. Qual curso?</p>
        <input type="text" />
        <p>6. Qual a instituição de ensino?</p>
        <input type="text" />
      </Div>
    );
  }
}
