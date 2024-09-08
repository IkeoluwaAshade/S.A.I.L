// import React from 'react'
// import styled from 'styled-components'
// import Footer from '../../components/static/Footer'

// const ExistingUser = () => {
//   return (
//     <Container>
//         <Wrapper>
//             {/* <CTA> */}
//               <WelcomeMsg>Welcome back! Please ENTER your 4-digit PIN to continue</WelcomeMsg>
            
//               <input type="number" placeholder='PIN' />
//             {/* </CTA> */}

//             <Footer firstButton='Home' secondButton='Enter' />
//         </Wrapper>
//     </Container>
//   )
// }

// export default ExistingUser

// const Container = styled.div`
//   /* background-color: red; */
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 50%;

//   input {
//     background: ${(props => props.theme.background)};
//     color: ${(props => props.theme.color)};
//     text-align: center;
//     font-size: 1.2rem;
//     margin-bottom: 12px;
//     width: 400px;
//     padding: 15px;
//     border-radius: 15px;
//     border: 5px solid ${(props => props.theme.color)};
//   }
// `

// // const CTA = styled.div``

// const WelcomeMsg = styled.p`
//   font-size: 3rem;
// `





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import Footer from '../../components/static/Footer';

// const ExistingUser = () => {
//   const [pin, setPin] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handlePinSubmit = () => {
//     if (/^\d{4}$/.test(pin)) {
//       navigate('/transaction', { state: { pin } });
//     } else {
//       setError('Please enter a valid 4-digit PIN');
//     }
//   };

//   const handleHomeClick = () => {
//     navigate('/');
//   };

//   return (
//     <Container>
//       <Wrapper>
//         <WelcomeMsg>Welcome back! Please ENTER your 4-digit PIN to continue</WelcomeMsg>
//         <input
//           type="number"
//           placeholder="PIN"
//           value={pin}
//           onChange={(e) => setPin(e.target.value)}
//         />
//         {error && <ErrorMsg>{error}</ErrorMsg>}
//         <Footer firstButton="Home" secondButton="Enter" onFirstButtonClick={handleHomeClick} onSecondButtonClick={handlePinSubmit} />
//       </Wrapper>
//     </Container>
//   );
// };

// export default ExistingUser;

// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 50%;

//   input {
//     text-align: center;
//     font-size: 1.2rem;
//     margin-bottom: 12px;
//     width: 400px;
//     padding: 15px;
//     border-radius: 15px;
//     border: 5px solid #123;
//   }
// `;

// const WelcomeMsg = styled.p`
//   font-size: 3rem;
// `;

// const ErrorMsg = styled.span`
//   color: red;
//   font-size: 2rem;
//   font-weight: 500;
// `;







import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../components/static/Footer'

const ExistingUser = () => {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleEnter = () => {
    if (/^\d{4}$/.test(pin)) {
      navigate('/transaction', { state: { userPin: pin } })
    } else {
      setError('Please enter a valid 4-digit PIN')
    }
  }

  return (
    <Container>
        <Wrapper>
            <WelcomeMsg>Welcome back! Please ENTER your 4-digit PIN to continue</WelcomeMsg>
            <input 
              type="number" 
              placeholder='PIN' 
              value={pin} 
              onChange={(e) => setPin(e.target.value)} 
            />
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <Footer firstButton='Home' secondButton='Enter' secondButtonAction={handleEnter} />
        </Wrapper>
    </Container>
  )
}

export default ExistingUser

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  input {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 12px;
    width: 400px;
    padding: 15px;
    border-radius: 15px;
    border: 5px solid #123;
  }
`;

const WelcomeMsg = styled.p`
  font-size: 3rem;
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: 2rem;
  font-weight: 500;
`;

