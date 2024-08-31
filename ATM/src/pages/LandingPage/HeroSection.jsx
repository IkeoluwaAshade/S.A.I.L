import React from 'react'
import styled from 'styled-components'
import hero from '../../assets/hero.png'


const HeroSection = () => {
  return (
    <Container>
        <Wrapper>
            <CTA>
                <h3>Welcome to <br/>IkeMoney Bank</h3>
                
                <p>If you are a new user, kindly enter your name below and click on the corresponding button</p>

                <input type="text" placeholder='Enter Name' />

            </CTA>


            <ImageHold><img src={hero} alt="" /></ImageHold>

        </Wrapper>
    </Container>
  )
}

export default HeroSection

const Container = styled.div`
    background: ${(props => props.theme.background)};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    color: ${(props => props.theme.color)};
    width: 85%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CTA = styled.div`
    width: 500px;

    h3 {
         font: normal small-caps 600 3rem Arial;
    }
    
    p {
        font-size: 1.2rem;
        margin-top: 5px;
    }
    
    input {
        background: ${(props => props.theme.background)};
        color: ${(props => props.theme.color)};
        text-align: center;
        font-size: 1.2rem;
        width: 400px;
        padding: 15px;
        border-radius: 15px;
        border: 5px solid ${(props => props.theme.color)};
     }
`

const ImageHold = styled.div`

    img {
        width: 400px;
    }
`