import React from 'react'
import styled from 'styled-components'
import Button from '../../components/reusables/Button'

const QuickTransfer = () => {
  return (
    <Container>
        <Wrapper>
            <h3>Enter Transfer Details Below</h3>

            <ButtonContainer>
                <Button ButtonText='Back' />
                <Button ButtonText='Send' />
            </ButtonContainer>
        </Wrapper>
    </Container>
  )
}

export default QuickTransfer

const Container = styled.div``

const Wrapper = styled.div``

const ButtonContainer = styled.div``