import React from 'react'
import styled from 'styled-components'
import {IoIosContact} from 'react-icons/io'
import {TiLinkOutline} from 'react-icons/ti'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function View() {
  return (
    <Container>
        <Wrapper>
            <Cirle><span>B</span></Cirle>
            <Info>
                <User><IoIosContact size={'3rem'}/></User>
                <Name> <strong> <IoIosContact/> Name:</strong> <span>Bello Leke</span></Name>
                <Company><strong><TiLinkOutline/>Company:</strong> <span>SpaceHunt</span></Company>
                <Phone><strong><BsFillTelephoneFill/>Phone:</strong><span>08082858980</span></Phone>
            </Info>
        </Wrapper>
        <Button to='/'>Back</Button>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    font-family: 'poppins';
    flex-direction: column;
    min-height: 100vh;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 3px #4e00c2;
    background-color: #161B22;
    transition: all 450ms;
    border-radius: 10px;

    :hover{
        transform: scale(1.04);
        cursor: pointer;
    }

    @media screen and (max-width: 500px){
        width: 80%;
        display: flex;
        flex-direction: column;
    }
`;
const Cirle = styled.div`
    background-color: #5ddcff;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    margin-bottom: -50px;
    

    span{
        font-size: 2.5rem;
        font-weight: 600;
    }
`;
const Name = styled.div`
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    strong{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100px;
        font-weight: 400;
    }

    @media screen and (max-width: 500px){
        display: flex;
        justify-content: space-around;
    }
`;
const Company = styled.div`
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    strong{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 140px;
        font-weight: 400;
    }

    span{
        font-weight: 400;
        font-size: 1.3rem;
    }

    @media screen and (max-width: 500px){
        display: flex;
        justify-content: space-around;
    }
`;
const Phone = styled.div`
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
    width: 100%;

    strong{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100px;
        font-weight: 400;
    }

    span{
        font-weight: 400;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 500px){
        display: flex;
        justify-content: space-around;
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 350px;

    @media screen and (max-width: 500px){
        width: 100%;
        margin-top: 50px;
    }
`;

const User = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;

    /* @media screen and (max-width: 500px){
        display: none;
    } */
`;

const Button = styled(Link)`
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
    margin-top: 20px;

    :hover{
        cursor: pointer;
        background-color: #3c67e3;
        transform: scale(1.08);
    }
`;