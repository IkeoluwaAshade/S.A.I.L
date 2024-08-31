import React from 'react'
import styled from 'styled-components'
import Button from '../../components/reusables/Button'

const CashWithdrawal = () => {
  return (
    <Container>
        <Wrapper>
            <h3>Enter Withdrawal Amount</h3>

            <ButtonContainer>
                <Button ButtonText='Back' />
                <Button ButtonText='Withdraw' />
            </ButtonContainer>
        </Wrapper>
    </Container>
  )
}

export default CashWithdrawal

const Container = styled.div``

const Wrapper = styled.div``

const ButtonContainer = styled.div``