import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `
    const Img = styled.img`
        width: 70px;
    margin-right: 10px;
    border-radius: 50%;`
    const H4 = styled.h4`
        margin-bottom: 15px;`

function CardGrande(props) {
    return (
        <Div className="bigcard-container">
            <Img src={ props.imagem } />
            <div>
                <H4>{ props.nome }</H4>
                <p>{ props.descricao }</p>
            </div>
        </Div>
    )
}

export default CardGrande;