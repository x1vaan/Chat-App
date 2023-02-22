import React from 'react';
import cssL from './Landing.module.css'

export default function Landing(): JSX.Element {
    return(
        <div className={cssL.container}>
        <h1>Start chatting with your friends</h1>
        <button>Get Started</button>
        </div>
    )
}