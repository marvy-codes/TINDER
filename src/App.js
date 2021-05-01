import React from 'react';
import Header from './Header.js'
import TinderCards from './TinderCards.js';

function App() {
    return (
        <div className="app">
            {/* Header */}
            <Header />
                
            {/*  TinderCards */}
            <TinderCards />
            
            {/*  SwiperButtons */}
        </div>
    );
}

export default App;