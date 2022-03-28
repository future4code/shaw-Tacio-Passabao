import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CriarPostagem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  margin-bottom: 20px;
  margin-top: 20px;
`;



class App extends React.Component {
  state = {
    id: "",
    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: "",
    posts: [
      {
        id: "1",
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/51/50",
        fotoPost: "https://picsum.photos/203/50",
      },
      {
        id: "2",
        nomeUsuario: "mina",
        fotoUsuario: "https://picsum.photos/52/50",
        fotoPost: "https://picsum.photos/201/150",
      },
      {
        id: "3",
        nomeUsuario: "chijo",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/202/150",
      },
    ],
  };

  onChangeNome = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  onChangeImagem = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  onChangeFoto = (event) => {
    this.setState({ fotoPost: event.target.value });
  };

  onChangeId = (event) => {
    this.setState({ id: event.target.value });
  };

  onClickPost = () => {
    let novoPost = {
      id: this.state.id,
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    };

    let novaPostagem = [...this.state.posts];
    novaPostagem.push(novoPost);

    this.setState({ posts: novaPostagem });
  };

  deletePost = (post) => {
    const removePost = this.state.posts.filter((posts) => {
      return posts.id !== post;
    });
    this.setState({ posts: removePost });
  };

  render() {
    const postagemNoFeed = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          id={post.id}
          valorNome={post.nomeUsuario}
          valorFoto={post.fotoUsuario}
          valorFotoPost={post.fotoPost}
          removerPost={this.deletePost}
        />
      );
    });

    return (
      <MainContainer>
        <CriarPostagem>
          <input
            onChange={this.onChangeNome}
            value={this.state.nomeUsuario}
            placeholder={"Nome de Usuário"}
          />
          <br />
          <input
            onChange={this.onChangeImagem}
            value={this.state.fotoUsuario}
            placeholder={"Foto de Usuário"}
          />
          <br />
          <input
            onChange={this.onChangeFoto}
            value={this.state.fotoPost}
            placeholder={"Imagem do Post"}
          />
          <br />
          <input
            onChange={this.onChangeId}
            value={this.state.id}
            placeholder={"ID do Post"}
          />
          <br />
          <button onClick={this.onClickPost}>Criar um Post</button>
        </CriarPostagem>
        {postagemNoFeed}
      </MainContainer>
    );
  }
}

export default App;
