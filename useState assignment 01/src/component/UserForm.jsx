import React, { useState } from 'react'
import styled from 'styled-components'

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

  return (
    <Container>
        <Title>User Information</Title>

        <Form>
            <InputContainer>
                <Label htmlFor='name'>Name:</Label>

                <Input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor='email'>Email:</Label>
                <Input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email'
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor='address'>Address:</Label>
                <Input
                    type='text'
                    id='address'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    placeholder='Enter your address'
                />
            </InputContainer>

            <button onClick={handleToggle}>Submit</button>
            {toggle ? <DataContainer>
            <h3>Enter Information:</h3>
            <Data><strong>Name:</strong> {formData.name}</Data>
            <Data><strong>Email:</strong> {formData.email}</Data>
            <Data><strong>Address:</strong> {formData.address}</Data>
        </DataContainer> : null}
        </Form>

        {/* <DataContainer>
            <h3>Enter Information:</h3>
            <Data><strong>Name:</strong> {formData.name}</Data>
            <Data><strong>Email:</strong> {formData.email}</Data>
            <Data><strong>Address:</strong> {formData.address}</Data>
        </DataContainer> */}
    </Container>
  )
}

export default UserForm

const Container = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const InputContainer = styled.div`
    margin-bottom: 15px;
`

const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
`

const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1ox solid #ccc;
    box-sizing: border-box;
`

const DataContainer = styled.div`
    margin-top: 20px;
`

const Data = styled.p`
    margin: 5px 0;
    font-size: 16px;
`