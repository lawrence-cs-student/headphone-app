import React from 'react'


export default function Card(props) {
    return (
        <div className="card">
            <div>
                <img src={props.source}></img>
            </div>
            
            <h1>{props.name}</h1>
            <p>{props.price}</p>
        </div>
    )
}