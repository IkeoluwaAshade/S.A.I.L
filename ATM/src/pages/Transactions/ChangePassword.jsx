import React from 'react'
import styled from 'styled-components'
import Button from '../../components/reusables/Button'

const ChangePassword = () => {
  return (
    <Container>
        <Wrapper>
            <h3>Enter New Password</h3>

            <ButtonContainer>
                <Button ButtonText='Back' />
                <Button ButtonText='Enter' />
            </ButtonContainer>
        </Wrapper>
    </Container>
  )
}

export default ChangePassword

const Container = styled.div``

const Wrapper = styled.div``

const ButtonContainer = styled.div``