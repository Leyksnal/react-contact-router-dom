import React from 'react'
import styled, {keyframes} from 'styled-components'

export default function Home() {
  return (
    <Container>
        <Wrapper>
            <Title>Add PhoneBook</Title>
            <input type="text" placeholder='name' />
            <input type="text" placeholder='company' />
            <input type="number" placeholder='phone +234' />
            <Button>Confirm</Button>
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
    margin-top: 50px;
    
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 400px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
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
    }
`;
const Title = styled.div`
    font-size: 2rem;
    font-weight: 500;
`;
const Button = styled.button`
    width: 150px;
    height: 50px;
    display: inline-block;
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