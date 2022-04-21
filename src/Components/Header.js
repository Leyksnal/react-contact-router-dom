import React from 'react'
import styled from 'styled-components'
import {IoIosContacts} from 'react-icons/io'

export default function Header() {
  return (
    <Container>
        <Wrapper>
            <IoIosContacts size={'3rem'}/>
            <Span>CodeLab Set 05 PhoneBook</Span>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3c67e3;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 116px;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: center;
`;
const Span = styled.div`
    font-size: 2rem;
    font-family: 'Lobster';
    margin-left: 10px;
    text-decoration: none;
    color: #fff;
`;