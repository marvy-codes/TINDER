import React from 'react';
import Header from './Header.js'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
    return (
        <div className="app">
            {/* Header */}
            <Header />
                
            {/*  TinderCards */}
            <TinderCards />
            
            {/*  SwiperButtons */}
            <SwipeButtons />
        </div>
    );
}

export default App;