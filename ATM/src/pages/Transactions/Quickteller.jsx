import React from 'react'
import styled from 'styled-components'
import Button from '../../components/reusables/Button'

const Quickteller = () => {
  return (
    <Container>
        <Wrapper>
            <h3>Enter Beneficiary details</h3>

            <ButtonContainer>
                <Button ButtonText='Back' />
                <Button ButtonText='Send' />
            </ButtonContainer>
        </Wrapper>
    </Container>
  )
}

export default Quickteller

const Container = styled.div``

const Wrapper = styled.div``

const ButtonContainer = styled.div``