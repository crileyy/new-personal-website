import React from 'react';
import './Music.css';

export const Music = () => {
    return <div className="music">
        <span className="music-text">Guitar player <span role="img" aria-label="jsx-a11y/accessible-emoji">🎸⚡</span> and music lover <span role="img" aria-label="jsx-a11y/accessible-emoji">🎵</span></span>
        <iframe title="spotify" src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>;
};