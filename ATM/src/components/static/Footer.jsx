import React from 'react'
import styled from 'styled-components'
import Button from '../reusables/Button'
import { Link } from 'react-router-dom'

const Footer = ({ firstButton, secondButton }) => {
  return (
    <Container>
        <Wrapper>
            <ButtonHold>
                <ButtonDiv>
                    <StyledLink to='/newUser'><Button ButtonText={firstButton || 'New User'} /></StyledLink>
                    <StyledLink to='/existingUser'><Button ButtonText={secondButton || 'Existing User'} /></StyledLink>
                    <StyledLink to='/transaction'><Button ButtonText={secondButton || 'Existing User'} /></StyledLink>
                </ButtonDiv>
            </ButtonHold>

            <Author>
                <Ike>
                    &copy; {new Date().getFullYear()} Ikeoluwa Ashade <br /> 
                </Ike>

                <BuiltWith>
                    Built with <a href='https://legacy.reactjs.org/' target='_blank' rel="noopener noreferrer">React</a>, <a href="https://styled-components.com/" target='_blank' rel="noopener noreferrer">Styled-Component</a>. 
                    Hosted on <a href="http://vercel.com/" target='_blank' rel="noopener noreferrer">Vercel</a>
                </BuiltWith>
            </Author>
        </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    background-color: #000;
    width: 100%;
    height: 150px;
    bottom: 0;
    position: fixed;
`

const Wrapper = styled.div`
    color: #fff;
    /* background-color: purple;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
`

const ButtonHold = styled.div`
    /* background-color: aqua; */
    margin-top: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const ButtonDiv = styled.div`
    /* background-color: aqua; */
    width: 85%;
    display: flex;
    /* justify-content: center; */
    align-items: center;

    Button {
        /* background-color: orange; */
        margin-right: 4em;
    }
`

const StyledLink = styled(Link)``

const Author = styled.div`
    /* background-color: orange; */
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Ike = styled.div``

const BuiltWith = styled.div`
    /* margin-top: 20px; */
    /* bottom: 0; */
    /* position: bottom; */
    

    a {
        color:  skyblue;
        text-decoration: none;
    }
`
