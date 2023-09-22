import React from 'react';
import Card from './card'

export default function TopProducts() {
    return (
        <div id="top-products">
            <Card 
                source="./images/soundwave.png"
                name="SoundWave Pro"
                price="149.99$"
            />
            <Card 
                source="./images/echozone.png"
                name="EchoZone Plus"
                price="79.99$"
            />
            <Card 
                source="./images/bassboost.png"
                name="BassBoost Elite"
                price="109.99$"
            /> 
        </div>
    )
}