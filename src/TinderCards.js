// eslint-disable
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './Tindercards.css';
import axios from './axios'
// import cardpic from './jeff_marvy.JPG'

function TinderCards() {
    const [people, setPeople] = useState([]); 

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }
        fetchData(); 
    }, []);

    return (
        <div className='tindercards'>
            <div className='tinderCards__cardsContainer'>
                {people.map((person) => 
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        // onSwipe={(dir) => Swipe(dir, character.name)}
                        // onCardLeftScreen={() => outOfFrame(character.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                )}
            </div>
        </div>
    )
}

export default TinderCards
