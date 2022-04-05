import React from "react";

export default class PaginaSearch extends React.Component {
    render() {   
           
        return <div>
            {this.props.usersComponents}
            <p> <b>Procurar usuário</b> </p>
           <input type="name" 
          
           placeholder="Nome exato para busca"
           />
           <button>Salvar edição</button>
        </div> 
    }
}