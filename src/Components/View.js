import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {IoIosContact} from 'react-icons/io'
import {MdDelete} from 'react-icons/md'
import {BiEditAlt} from 'react-icons/bi'
import {TiLinkOutline} from 'react-icons/ti'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { collection, onSnapshot } from 'firebase/firestore'
import { database } from './Base'

export default function View() {

    const [base, setBase] = useState([])

    const catchData = async () =>{
        const data = collection(database, "contacts")
        onSnapshot(data, (snapshot) =>{
            const r = []
            snapshot.forEach((doc) =>{
                r.push({...doc.data(), id: doc.id})
            })
            setBase(r)
        })
    }

    useEffect(() =>{
        catchData()
    }, [])

  return (
      <Wall>
        <Container>
            {base?.map((props) =>{
                return (
                    <Wrapper key={props.id}>
                        <Cirle><span>B</span></Cirle>
                        <Info>
                            <User>
                                <IoIosContact size={'2.7rem'}/>
                            </User>
                            <Name> <strong> <IoIosContact/> Name:</strong> <span>{props.name}</span></Name>
                            <Company><strong><TiLinkOutline/>Company:</strong> <span>{props.company}</span></Company>
                            <Phone><strong><BsFillTelephoneFill/>Phone:</strong><span>{props.number}</span></Phone>
                            <Edit>
                                <Boder to={`/:id${props.id}`}><BiEditAlt color='#7dff00' size={'2rem'}/></Boder>
                                <Boder2><MdDelete color='#ff3300' size={'2rem'}/></Boder2>
                            </Edit>
                        </Info>
                    </Wrapper>  
                )
            })}
        </Container>
        <Button to='/'>Back</Button>
      </Wall>
  )
}

const Wall = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

const Container = styled.div`
    margin-top: 50px;
    font-family: 'poppins';
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 20px;
    width: 90%;

    @media screen and (max-width: 500px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
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
        transform: scale(1.02);
    }

    @media screen and (max-width: 500px){
        display: flex;
        flex-direction: column;
    }
`;
const Cirle = styled.div`
    background-color: #5ddcff;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    margin-bottom: -2px;
    

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

    @media screen and (max-width: 500px){
        margin-top: -10px;
    }
`;

const Boder = styled(Link)`
    text-decoration: none;
    transition: all 350ms;
        :hover{
        cursor: pointer;
        transform: scale(0.9);
    }
`;


const Boder2 = styled.div`
    text-decoration: none;
    transition: all 350ms;
        :hover{
        cursor: pointer;
        transform: scale(0.9);
    }
`;


const Edit = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
`;

const Button = styled(Link)`
    text-decoration: none;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 10px;
    border: 3px solid #3c67e3;
    background-color: transparent;
    color: #fff;
    transition: all 300ms;
    margin: 20px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    font-weight: 'poppins';

    :hover{
        cursor: pointer;
        background-color: #3c67e3;
        transform: scale(1.08);
    }
`;