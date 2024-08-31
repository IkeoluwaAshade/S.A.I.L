import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import background from '../assets/welcomeBg.jpg'

const LandingPage = () => {
  const location = useLocation();
  const { name } = location.state || { name: 'Guest' };

  return (
    <WelcomeContainer>
      <Overlay>
        <h1>Welcome, {name}!</h1>
      </Overlay>
    </WelcomeContainer>
  );
};

export default LandingPage;

const WelcomeContainer = styled.div`
  background-image: url(${background});
  color: #f0f0f0;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Overlay = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.5);
  margin-bottom: 220px;
`

