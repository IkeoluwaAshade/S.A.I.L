// import React from 'react'
// import styled from 'styled-components'
// import Button from '../reusables/Button'
// import background from '../../assets/background.jpg'
// import hero from '../../assets/hero.png'

// const LandingPage = () => {

//     const today = new Date();

//     const day = today.getDate();
//     const daySuffix = (day) => {
//         if(day > 3 && day < 21) return 'th'
//         switch (day % 10) {
//             case 1: return 'st';
//             case 2: return 'nd';
//             case 3: return 'rd';
//             default: return 'th';
//         }
//     }

//     const formattedDate = `${day}${daySuffix(day)} of ${today.toLocaleDateString('en-US', { month: 'long' })}, ${today.getFullYear()}.`;

//     const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });

//     const formattedTime = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        

//   return (

//     <BackgroundContainer>
//         <Overlay />
//         <Container>
//             <Wrapper>
//                 <HeaderContainer>
//                     <Logo>IkeMoney</Logo>

//                     <CurrentDate>{`${formattedDate} (${weekday}) || ${formattedTime}`}.</CurrentDate>
//                 </HeaderContainer>

//                 <HeroSection>
//                     <WelcomeMessage>
//                         <h3>Welcome to IkeMoney Bank</h3>
//                         <p>Thank you for choosing IkeMoney Bank! We couldn't have wished to have a better customer other than you.</p>
//                         <p>If you are a new user, kindly enter your name below and click on the corresponding button</p>

//                         <input type="text" placeholder='Enter Name' />

//                         <ButtonDiv>
//                             {/* <button>New User</button>
//                             <button>Existing User</button> */}
//                             <Button ButtonText='New User'/>
//                             <Button ButtonText='Existing User'/>
//                         </ButtonDiv>
//                     </WelcomeMessage>

//                     <ImageHold><img src={hero} alt="" /></ImageHold>
//                 </HeroSection>
//             </Wrapper>
//         </Container>
//     </BackgroundContainer>
//   )
// }

// export default LandingPage

// const BackgroundContainer = styled.div`
//     background-image: url(${background});
//     background-size: cover;
//     background-position: center;
//     /* height: 100%; */
// `

// const Overlay = styled.div`
//     position: absolute;
//     /* height: 900px; */
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(18, 35, 51, 0.6);  /* #123 with 60% opacity */
//     backdrop-filter: blur(10px);  /* Apply blur effect */
//     z-index: 1;  /* Ensure the overlay is above the background image but below the content */
// `;

// const Container = styled.div`
//     /* background-color: red; */
//     color: #fff;
//     /* backdrop-filter: blur(10px); */
//     /* width: 100%; */
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 2;
// `

// const Wrapper = styled.div`
//     /* background-color: green; */
//      width: 100%;

//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
   
// `

// const HeaderContainer = styled.div`
//     /* background-color: red; */
//     width: 85%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `

// const Logo = styled.h2`
//     font: 700 2.5rem Arial;
// `

// const CurrentDate = styled.div`
//     font: italic 600 1.5rem Georgia;
// `

// const HeroSection = styled.div`
//     /* background-color: green; */
//     width: 85%;
//     margin-top: 0.7em;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `

// const WelcomeMessage = styled.div`
//     /* background-color: purple; */
//     width: 500px;

//     h3 {
//         font: normal small-caps 600 3rem/1.2 Arial;
//     }

//     p {
//         font: normal 400 1rem;
//     }
    
//     input {
//         background-color: #123;
//         color: #fff;
//         text-align: center;
//         font-size: 1.2rem;
//         width: 400px;
//         padding: 15px;
//         border-radius: 15px;
//         border: 5px solid #fff;
//     }
// `

// const ButtonDiv = styled.div`
//     /* background-color: green; */
//     width: 430px;
//     margin-top: 20px;
//     display: flex;
//     justify-content: space-between;

//     button {
//         color: #123;
//         padding: 12px;
//         width: 180px;
//         border-radius: 10px;
//         font-size: 1rem;
//         cursor: pointer;

//         &:hover {
//             background-color: aqua;
//             color: #fff;
//         }
//     }
// `

// const ImageHold = styled.div`

//     img {
//         width: 400px;
//     }
// `

import React from 'react'
import styled from 'styled-components'
import Header from '../../components/static/Header'
import Footer from '../../components/static/Footer'
import HeroSection from './HeroSection'

const LandingPage = () => {
  return (
    <Container>
        <Wrapper>
            <HeroSection />  
            <Footer />
        </Wrapper>
    </Container>
  )
}

export default LandingPage

const Container = styled.div``
const Wrapper = styled.div``