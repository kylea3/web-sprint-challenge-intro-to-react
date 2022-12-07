// Write your Character component here
import React, { useState } from "react";
import styled from 'styled-components';
// import Accordion from 'react-bootstrap/Accordion';

const Accordion = styled.div`
    
`;

const AccordionTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const Name = styled.div`
    font-family: 'Russo One', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 10px;
`;
const Dropdown = styled.button`
    background: #D3D3D3;
    color: purple;
    font-weight: bold;
    margin-right: 10px;
    height: 100%;
    border: 1px solid #D3D3D3; 
    border-radius: 10px;
    transform: skew(20deg);
     
`;

const AccordionItem = styled.div`
    border: 2px solid green;
    margin-bottom: 20px;
`;

const AccordionContent = styled.div`
    text-align: left;
    margin-left: 10px;
    font-weight: bold;
`;


const Character = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <Accordion>
            <AccordionItem>
            <AccordionTitle onClick={() => setIsActive(!isActive)}>
                <Name>{props.name}</Name>
                <Dropdown>{props.birthYear}</Dropdown>
            </AccordionTitle>
            {isActive && <AccordionContent>
                <p>gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
                <p>BirthYear: {props.birthYear}</p>
                <p>Eye Color: {props.eyeColor}</p>
                <p>Hair Color: {props.hairColor}</p>
                <p>Skin Color: {props.skinColor}</p>
            </AccordionContent>}
          </AccordionItem>
        </Accordion>
      );

}


export default Character;