import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <ButtonContainer>
        <Wrapper>
            <button>{props.ButtonText}</button>
        </Wrapper>
    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`

const Wrapper = styled.div`

    button {
        color: #123;
        padding: 12px;
        width: 180px;
        border-radius: 10px;
        font-size: 1rem;
        cursor: pointer;
        border: 3px solid #123;

        &:hover {
            background-color: aqua;
            color: #fff;
        }
    }
`