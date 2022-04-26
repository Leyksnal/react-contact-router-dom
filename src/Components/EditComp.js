import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { doc, updateDoc } from 'firebase/firestore'
import { database } from './Base'

export default function EditComp() {
    const { id } = useParams();
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [number, setNumber] = useState("")

    const editContact = async()=>{
        await updateDoc(doc(database, "contacts", id), {
            name,
            company,
            number
        })
        navigate("/")
    }

  return (
    <Container>
        <Wrapper>
            <Title>Edit phoneBook here</Title>
            <input type="text" placeholder='name' value={name} onChange={(e) =>{
                setName(e.target.value)
            }} />
            <input type="text" placeholder='company' value={company} onChange={(e) =>{
                setCompany(e.target.value)
            }}/>
            <input type="number" placeholder='phone +234' value={number} onChange={(e) =>{
                setNumber(e.target.value)
            }}/>
            <Button onClick={editContact}>Update</Button>
        </Wrapper>
    </Container>
  )
}

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
        cursor: pointer;
        background-color: #3c67e3;
        transform: scale(1.08);
    }
`;