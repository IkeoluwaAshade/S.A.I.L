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


import React from 'react'
import styled from 'styled-components'

const ATM = () => {
  return (
    <Container>
        <Wrapper>
            
        </Wrapper>
    </Container>
  )
}

export default ATM

const Container = styled.div``

const Wrapper = styled.div``