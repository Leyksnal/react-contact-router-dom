import React from 'react'
import styled from 'styled-components'
import {IoIosContact} from 'react-icons/io'
import {TiLinkOutline} from 'react-icons/ti'
import {BsFillTelephoneFill} from 'react-icons/bs'

export default function View() {
  return (
    <Container>
        <Wrapper>
            <Cirle><span>B</span></Cirle>
            <Info>
                <User><IoIosContact size={'3rem'}/></User>
                <Name> <strong> <IoIosContact/> Name:</strong> <span>Bello Leke</span></Name>
                <Company><strong><TiLinkOutline/>Company:</strong> <span>SpaceHunt.co</span></Company>
                <Phone><strong><BsFillTelephoneFill/>Phone:</strong><span>08082858980</span></Phone>
            </Info>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    font-family: 'poppins';
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 3px #4e00c2;
    background-color: #161B22;
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
        font-size: 1.3rem;
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 350px;
`;

const User = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;