import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'

const WebLayout = ({ children }) => {
  return (
    <PageContainer>
        {children}
        <Footer />
    </PageContainer>
  )
}

export default WebLayout

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const FooterContainer = styled(Footer)`
    margin-top: auto;
`