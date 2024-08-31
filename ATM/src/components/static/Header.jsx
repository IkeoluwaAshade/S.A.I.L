import React, { useState } from 'react'
import styled from 'styled-components'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from '../../globalTheme/ThemeContext'

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [toggle, setToggle] = useState(false);

    const today = new Date();

    const day = today.getDate();
    const daySuffix = (day) => {
        if(day > 3 && day < 21) return 'th'
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    const formattedDate = `${day}${daySuffix(day)} of ${today.toLocaleDateString('en-US', { month: 'long' })}, ${today.getFullYear()}.`;

    const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });

    const formattedTime = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });


  return (
    <Container>
        <Wrapper>
            <Logo>IkeMoney</Logo>

            <Mode onClick={toggleTheme}>
                {theme === 'light' ? <MdDarkMode size={25} /> : <MdOutlineLightMode size={25} />}
                <Tooltip>{theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}</Tooltip>
            </Mode>

            <CurrentDate>{`${formattedDate} (${weekday}) || ${formattedTime}`}.</CurrentDate>
        </Wrapper>
    </Container>
  )
}

export default Header

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

const Logo = styled.h2`
    font: 700 2.5rem Arial;
`

const Mode = styled.div`
    cursor: pointer;
`

const CurrentDate = styled.div`
    font: italic 600 1.3rem Georgia;
`

const Tooltip = styled.div`
  visibility: hidden;
  background-color: aqua;
  color: #000;
  text-align: center;
  font-size: small;
  font-weight: 500;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  top: 40px;
  width: max-content;
  opacity: 0;
  transition: opacity 0.3s;
  white-space: nowrap;

  &:hover {
    visibility: visible;
    opacity: 100;
  }
`