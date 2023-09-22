import React from 'react';


export default function Feature(props) {
    return (
        <div className="feature">
            {props.source}
            <h1>{props.text}</h1>
            <p>{props.paragraph}</p>
        </div>
    )
}