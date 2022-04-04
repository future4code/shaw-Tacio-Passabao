import React from "react";
import styled from "styled-components";
import Parte1 from "./Components/Parte1";
import Parte2 from "./Components/Parte2";
import Parte3 from "./Components/Parte3";
import Parte4 from "./Components/Parte4";

let Botao = styled.button`
  margin-left: 47.5vw;
  margin-top: 20px;
`;

class App extends React.Component {
  state = {
    parte: 1,
  };

  renderParte = () => {
    switch (this.state.parte) {
      case 1:
        return <Parte1 />;

      case 2:
        return <Parte2 />;

      case 3:
        return <Parte3 />;

      case 4:
        return <Parte4 />;

      default:
        return <Parte1 />;
    }
  };

  proximaEtapa = () => {
    this.setState({ parte: this.state.parte + 1 });
  };
  render() {
    return (
      <div>
        {this.renderParte()}
        <br />
        {this.state.parte !== 4 && (
          <Botao onClick={this.proximaEtapa}>Próxima Parte</Botao>
        )}
      </div>
    );
  }
}

export default App;
