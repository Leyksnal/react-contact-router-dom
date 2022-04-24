import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components'
import { addDoc, collection } from 'firebase/firestore'
import { database } from './Base'

export default function Home() {

    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [number, setNumber] = useState("")

    const postContact = ()=>{
        addDoc(collection(database, "contacts"), {
            name,
            company,
            number
        })

        setName("")
        setCompany("")
        setNumber("")
    }

  return (
    <Container>
        <Action to='/phonebook'>All Contacts</Action>
        <Wrapper>
            <Title>Add PhoneBook</Title>
            <input type="text" placeholder='name' value={name} onChange={(e) =>{
                setName(e.target.value)
            }} />
            <input type="text" placeholder='company' value={company} onChange={(e) =>{
                setCompany(e.target.value)
            }}/>
            <input type="number" placeholder='phone +234' value={number} onChange={(e) =>{
                setNumber(e.target.value)
            }}/>
            <Button onClick={postContact}>Confirm</Button>
        </Wrapper>
    </Container>
  )
}

const pulsate = keyframes`
    0%{
        box-shadow: 0 0 25px #5ddcff, 0 0 25 #4e00c2;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    font-family: 'poppins';
    flex-direction: column;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 400px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    width: 450px;
    border-radius: 20px;

    input{
        width: 300px;
        height: 50px;
        border-radius: 30px;
        font-size: 1.2rem;
        outline: none;
        border: none;
        padding-left: 15px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -20px;
        font-weight: 500;
        font-family: 'poppins';
    }

    @media screen and (max-width: 500px){
        width: 90%;
    }
`;
const Title = styled.div`
    font-size: 1.7rem;
    font-weight: 500;
`;

const Action = styled(Link)`
    text-decoration: none;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 10px;
    border: 3px solid #3c67e3;
    background-color: transparent;
    color: #fff;
    transition: all 500ms;

    :hover{
        animation: ${pulsate} 1s ease-in-out;
        cursor: pointer;
        background-color: #3c67e3;
        transform: scale(1.08);
    }
`;

const Button = styled.button`
    text-decoration: none;
    width: 150px;
    height: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 10px;
    border: 3px solid #3c67e3;
    background-color: transparent;
    color: #fff;
    transition: all 500ms;

    :hover{
        animation: ${pulsate} 1s ease-in-out;
        cursor: pointer;
        background-color: #3c67e3;
        transform: scale(1.08);
    }
`;