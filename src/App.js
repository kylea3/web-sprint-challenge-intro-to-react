import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState();
 

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
        console.error(err);
      })
  }, []);
  
  const AccBody = styled.div`
    background-color: rgba(255,255,255,.5);
    width: 75%;
    margin: auto;
    padding: 15px 15px 1px 15px;
  `;
  const Header = styled.div`
    font-family: 'Russo One', sans-serif;
    font-size: 3rem;
  `;

console.log(data);
  return (
    <div className="App">
      <Header>React Wars   ></Header>
      <AccBody>
        { data && data.map((e, index) => {
          return (
          <Character key={index + e.created} name={e.name} gender={e.gender} height={e.height} mass={e.mass} birthYear={e.birth_year} eyeColor={e.eye_color} hairColor={e.hair_color} skinColor={e.skin_color} />
          )
        })}
      </AccBody>  
    </div>
  );
}

export default App;
