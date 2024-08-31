import React from 'react'
import styled from 'styled-components'

const ExistingUser = () => {
  return (
    <Container>
        <Wrapper>
            <WelcomeMsg>Welcome back! Please ENTER your 4-digit PIN to continue</WelcomeMsg>
            
            <input type="number" placeholder='PIN' />
        </Wrapper>
    </Container>
  )
}

export default ExistingUser

const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  /* background-color: green; */
  width: 50%;

  input {
    background: ${(props => props.theme.background)};
    color: ${(props => props.theme.color)};
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 12px;
    width: 400px;
    padding: 15px;
    border-radius: 15px;
    border: 5px solid ${(props => props.theme.color)};
  }
`

const WelcomeMsg = styled.p`
  font-size: 3rem;
`