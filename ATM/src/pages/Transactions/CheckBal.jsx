import React from 'react'
import styled from 'styled-components'
import Button from '../../components/reusables/Button'

const CheckBal = () => {
  return (
    <Container>
        <Wrapper>
            <h3>Your Available balance is</h3>

            <ButtonContainer>
                <Button ButtonText='Back' />
            </ButtonContainer>
        </Wrapper>
    </Container>
  )
}

export default CheckBal

const Container = styled.div``

const Wrapper = styled.div``

const ButtonContainer = styled.div``