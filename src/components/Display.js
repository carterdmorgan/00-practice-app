import React, { useState } from 'react';
import Card from './Card';

export default function Display() {
  const [canines, setCanines] = useState([]);
  const [greeting, setGreeting] = useState('Hello, everyone!');

  function retrieveCanines() {
    setCanines([
      {
        name: 'Fido',
        description: 'The best boy',
        id: 1
      },
      {
        name: 'Sparky',
        description: 'Also a good boy',
        id: 2
      },
      {
        name: 'Bullseye',
        description: 'Maybe a horse?',
        id: 3
      }
    ]);
    setGreeting('I hope you adopt a dog!');
  }

  return (
    <div>
      {greeting}
      <button onClick={retrieveCanines}>Retrieve Canines</button>
      {
        canines.map(canine => {
          return (<Card name={canine.name} description={canine.description} id={canine.id}/>)
        })
      }
    </div>
  )
}