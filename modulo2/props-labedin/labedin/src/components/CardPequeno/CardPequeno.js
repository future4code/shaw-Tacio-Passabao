import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 100px;
`;

const Img = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const H4 = styled.h4`
  margin-bottom: 15px;
`;

function CardPequeno(props) {
  return (
    <Div className="smallcard-container">
      <Img src={props.imagem} />
      <div>
        <h4>{props.email}</h4>
        <p>{props.endereco}</p>
      </div>
    </Div>
  );
}

export default CardPequeno;
