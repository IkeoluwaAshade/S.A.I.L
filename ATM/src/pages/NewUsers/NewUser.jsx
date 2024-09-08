// import React from 'react'
// import styled from 'styled-components'
// import Footer from '../../components/static/Footer'


// const NewUser = () => {
//   return (
//     <Container>
//         <Wrapper>
//           {/* <CTA> */}
//             <p>Kindly create a 4-digit PIN and press ENTER to continue</p>

//             <input type="number" placeholder='PIN' />

//             <ErrorMsg>Please Enter Numbers only</ErrorMsg>
//           {/* </CTA> */}
//           <Footer 
//             firstButton='Home' secondButton='Enter' />
//         </Wrapper>
//     </Container>
//   )
// }

// export default NewUser

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
//   /* background-color: green; */
//   width: 50%;

//   p {
//     font-size: 3rem;
//   }

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


// const ErrorMsg = styled.span`
//   color: red;
//   font-size: 2rem;
//   font-weight: 500;
// `











// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import Footer from '../../components/static/Footer';

// const NewUser = () => {
//   const [pin, setPin] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { name } = location.state || {};

//   const handlePinSubmit = () => {
//     if (/^\d{4}$/.test(pin)) {
//       navigate('/transaction', { state: { name, pin } });
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
//         <p>Welcome {name}, create a 4-digit PIN and press ENTER to continue</p>
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

// export default NewUser;

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

//   p {
//     font-size: 3rem;
//   }

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

// const ErrorMsg = styled.span`
//   color: red;
//   font-size: 2rem;
//   font-weight: 500;
// `;




// import React, { useState } from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'
// import styled from 'styled-components'
// import Footer from '../../components/static/Footer'

// const NewUser = () => {
//   const [pin, setPin] = useState('')
//   const [error, setError] = useState('')
//   const navigate = useNavigate()
//   const location = useLocation()
//   const userName = location.state?.userName || 'User'

//   const handleEnter = () => {
//     if (/^\d{4}$/.test(pin)) {
//       navigate('/transaction', { state: { userName, userPin: pin } })
//     } else {
//       setError('Please enter a valid 4-digit PIN')
//     }
//   }

//   return (
//     <Container>
//         <Wrapper>
//             <p>Kindly create a 4-digit PIN and press ENTER to continue</p>
//             <input 
//               type="number" 
//               placeholder='PIN' 
//               value={pin} 
//               onChange={(e) => setPin(e.target.value)} 
//             />
//             {error && <ErrorMsg>{error}</ErrorMsg>}
//             <Footer firstButton='Home' secondButton='Enter' secondButtonAction={handleEnter} />
//         </Wrapper>
//     </Container>
//   )
// }

// export default NewUser

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

//   p {
//     font-size: 3rem;
//   }

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

// const ErrorMsg = styled.span`
//   color: red;
//   font-size: 2rem;
//   font-weight: 500;
// `;




// NewUser.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/static/Footer';
import { useUser } from '../../globalTheme/UserContext';

const NewUser = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { name, setName, pin, setPin } = useUser();

  const handleEnter = () => {
    if (/^\d{4}$/.test(pin)) {
      navigate('/transaction');
    } else {
      setError('Please enter a valid 4-digit PIN');
    }
  };

  return (
    <Container>
      <Wrapper>
        <p>Kindly create a 4-digit PIN and press ENTER to continue</p>
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
  );
};

export default NewUser;

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

  p {
    font-size: 3rem;
  }

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

const ErrorMsg = styled.span`
  color: red;
  font-size: 2rem;
  font-weight: 500;
`;
