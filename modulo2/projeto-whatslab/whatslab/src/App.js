import React from "react";
import styled, { StyleSheetManager } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid black;
  box-shadow: 10px 5px 5px gray;
  height: 75vh;
  box-sizing: border-box;
  width: 50vw;
  margin: auto;
  margin-top: 10vh;
  background: rgba(0, 0, 0, 0.1);
`;

const MensagemContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: flex-end;
  flex-grow: 1;
`;

const NameInput = styled.input`
  width: 8vw;
  height: 3vh;
  border-radius: 5px;
`;
const InputContainer = styled.div`
  display: flex;
`;

const MensagemInput = styled.input`
  flex-grow: 1;
  border-radius: 5px;
`;

const MensagensPrint = styled.p`
  color: black;
  margin-left: 1vw;
`;

const Botao = styled.button`
  border-radius: 5px;
  background-color: white;
`;

class App extends React.Component {
  state = {
    valorUsuario: "",
    valorMensagem: "",
    mensagens: [],
  };

  onChangevalorUsuario = (event) => {
    this.setState({ valorUsuario: event.target.value });
  };

  onChangevalorMensagem = (event) => {
    this.setState({ valorMensagem: event.target.value });
  };

  enviarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorUsuario,
      texto: this.state.valorMensagem,
    };

    const mensagemNaTela = [novaMensagem, ...this.state.mensagens];
    this.setState({
      mensagens: mensagemNaTela,
      valorMensagem: "",
      valorUsuario: "",
    });
  };

  render() {
    return (
      <MainContainer>
        <MensagemContainer>
          {this.state.mensagens.map((mensagem) => {
            return (
              <MensagensPrint>
                <b>{mensagem.usuario}:</b> {mensagem.texto}
              </MensagensPrint>
            );
          })}
        </MensagemContainer>

        <InputContainer>
          <NameInput
            onChange={this.onChangevalorUsuario}
            value={this.state.valorUsuario}
            placeholder={"Nome"}
          />

          <MensagemInput
            onChange={this.onChangevalorMensagem}
            value={this.state.valorMensagem}
            placeholder={"Mensagem"}
          />

          <Botao onClick={this.enviarMensagem}>Enviar</Botao>
        </InputContainer>
      </MainContainer>
    );
  }
}

export default App;
