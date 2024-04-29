import React, { useState } from 'react';

const GameComponent = () => {
    
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John"
        }
    });

    
    const onClick = () => {
        
        setGame(prevState => ({
            ...prevState,
            player: {
                ...prevState.player,
                name: "Jane" 
            }
        }));
    }

    return (
        <div>
            <h1>Game ID: {game.id}</h1>
            <h2>John: {game.player.name}</h2>
            <button onClick={onClick}>Jane</button>
        </div>
    );
}

export default GameComponent;