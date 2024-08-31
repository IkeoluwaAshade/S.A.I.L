import React from 'react'
import styled from 'styled-components'


const NewUser = () => {
  return (
    <Container>
        <Wrapper>
          {/* <CTA> */}
            <p>Kindly create a 4-digit PIN and press ENTER to continue</p>

            <input type="number" placeholder='PIN' />

            <ErrorMsg>Please Enter Numbers only</ErrorMsg>
          {/* </CTA> */}
        </Wrapper>
    </Container>
  )
}

export default NewUser

const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  

  display: flex;
  justify-content: center;
  align-items: center;

`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  width: 50%;

  p {
    font-size: 3rem;
  }

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

// const CTA = styled.div``


const ErrorMsg = styled.span`
  color: red;
  font-size: 2rem;
  font-weight: 500;
`