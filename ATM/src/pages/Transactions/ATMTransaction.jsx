// import React, { useState } from 'react';

// const ATM = () => {
//     const [balance, setBalance] = useState(1000); // Initial balance
//     const [amount, setAmount] = useState(''); // Input field for deposit/withdrawal

//     const handleInputChange = (e) => {
//         setAmount(e.target.value);
//     };

//     const checkBalance = () => {
//         alert(`Your current balance is $${balance}`);
//     };

//     const deposit = () => {
//         const depositAmount = parseFloat(amount);
//         if (depositAmount > 0) {
//             setBalance(balance + depositAmount);
//             alert(`You have deposited $${depositAmount}. Your new balance is $${balance + depositAmount}.`);
//         } else {
//             alert("Please enter a valid amount to deposit.");
//         }
//         setAmount(''); // Clear the input field
//     };

//     const withdraw = () => {
//         const withdrawAmount = parseFloat(amount);
//         if (withdrawAmount > balance) {
//             alert("Insufficient balance.");
//         } else if (withdrawAmount <= 0) {
//             alert("Please enter a valid amount to withdraw.");
//         } else {
//             setBalance(balance - withdrawAmount);
//             alert(`You have withdrawn $${withdrawAmount}. Your new balance is $${balance - withdrawAmount}.`);
//         }
//         setAmount(''); // Clear the input field
//     };

//     return (
//         <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
//             <h1>ATM Machine</h1>
//             <div style={{ marginBottom: '20px' }}>
//                 <button onClick={checkBalance}>Check Balance</button>
//             </div>
//             <div style={{ marginBottom: '10px' }}>
//                 <input
//                     type="number"
//                     value={amount}
//                     onChange={handleInputChange}
//                     placeholder="Enter amount"
//                     style={{ padding: '10px', width: '100%' }}
//                 />
//             </div>
//             <div style={{ marginBottom: '10px' }}>
//                 <button onClick={deposit}>Deposit Money</button>
//             </div>
//             <div>
//                 <button onClick={withdraw}>Withdraw Money</button>
//             </div>
//         </div>
//     );
// };

// export default ATM;



// import React from 'react'
// import styled from 'styled-components'
// import Footer from '../../components/static/Footer'
// import Button from '../../components/reusables/Button'

// const ATMTransaction = ({quickTransfer, cashWithdrawal, quickTeller, checkBalance, cashDeposit, changePassword}) => {
//   return (
//     <Container>
//       <Wrapper>
//         <TransactionBox>
//           <Display>
//             <h3>Choose a Transaction to continue</h3>
//             <p>press Exit All to end all transaction</p>
//           </Display>

//           <ButtonContainer><Left>
//             <QuickTransfer><Button ButtonText='Quick Transfer' />
//             </QuickTransfer>

//             <CashWithdrawal><Button ButtonText='Cash Withdrawal' />
//             </CashWithdrawal>

//             <QuickTeller><Button ButtonText='Quick Teller' />
//             </QuickTeller>
//           </Left>

//           <Right>
//             <CheckBalance><Button ButtonText='Check Balance' />
//             </CheckBalance>

//             <CashDeposit><Button ButtonText='cash Deposit' />
//             </CashDeposit>

//             <ChangePassword><Button ButtonText='Change Password' />
//             </ChangePassword>
//           </Right></ButtonContainer>
//         </TransactionBox>

//         <Footer 
//           firstButton='Home'
//           secondButton='Exit All' 
//         />
//       </Wrapper>
      
//     </Container>
//   )
// }

// export default ATMTransaction

// const Container = styled.div``

// const Wrapper = styled.div`
//  display: flex;
//  justify-content: center;
//  align-items: center;
// `

// const TransactionBox = styled.div`
//   background: ${(props) => props.theme.background};
//   color: ${(props) => props.theme.color};
//   width: 35%;
//   height: 300px;
//   border-radius: 7px;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `

// const Display = styled.div`
//   /* background-color: green; */
//   text-align: center;
//   line-height: 0.5;
//   margin-bottom: 12px;

//   h3 {
//     font-size: 1.5rem;
//   }

//   p {
//     font-size: 0.7rem;
//   }
// `

// const ButtonContainer = styled.div`
//   /* background-color: green; */
//   height: 200px;
//   width: 450px;
//   border-radius: 5px;

//   display: flex;
//   justify-content: space-between;
// `

// const Left = styled.div`
//   /* background-color: red; */
//   margin: 7px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `

// const QuickTransfer = styled.div``

// const CashWithdrawal = styled.div``

// const QuickTeller = styled.div``

// const Right = styled.div`
//   margin: 7px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `

// const CheckBalance = styled.div``

// const CashDeposit = styled.div``

// const ChangePassword = styled.div``









import React from 'react';
import { useLocation } from 'react-router-dom';

const ATMTransaction = () => {
  const location = useLocation();
  const { name, pin } = location.state || {};

  return (
    <div>
      <h1>Welcome to your ATM transaction page, {name || 'User'}!</h1>
      <p>Your session PIN: {pin}</p>
      {/* Implement transaction functionalities here */}
    </div>
  );
};

export default ATMTransaction;
