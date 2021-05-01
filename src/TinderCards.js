// eslint-disable
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
// import './Tindercards.css';

function TinderCards() {
    const [people] = useState([
        {
        name: 'ElonMusk',
        url:
            'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F36-364505_elon-musk-png-transparent-image-elon-musk-wallpaper.png&imgrefurl=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FhJRooT_elon-musk-png-transparent-image-elon-musk-wallpaper%2F&tbnid=jACBdddD61owbM&vet=12ahUKEwj2wrDXxZXwAhUG-hoKHfZlD6IQMygEegUIARC9AQ..i&docid=NNyo49rq4iWl8M&w=860&h=1067&q=free%20elon%20musk%20image&ved=2ahUKEwj2wrDXxZXwAhUG-hoKHfZlD6IQMygEegUIARC9AQ',
        },
        {
        name: 'jeff bezos',
        url:
            'https://www.google.com/search?q=jeff+bezos+portrait+picture&sa=X&biw=1222&bih=566&sxsrf=ALeKk01xopLNXVLyTSjF9m07qhBzIXFmKw:1619220953271&tbm=isch&source=iu&ictx=1&fir=0z_Ibebc0nQu-M%252CEI449RqrIgMR0M%252C_&vet=1&usg=AI4_-kQWcXZFmryjusoEWG9xFSPwVEG8xw&ved=2ahUKEwig2e2NxJXwAhU7DGMBHdNgAkQQ9QF6BAgIEAE#imgrc=0z_Ibebc0nQu-M',
        },
    ])

    return (
        <div className='tindercards'>
        <div className='tinderCards__cardsContainer'>
            {people.map((person) => {
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
            })}
        </div>
        </div>
    )
}

export default TinderCards
