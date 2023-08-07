import React from "react";
import Feature from './feature'
import features from './feature-details'



export default function Features() {
    return (
        <div id="features">
           {features.map((item) => (
            <Feature 
                source={item.icon}
                text={item.name}
                paragraph={item.sentence}
            />
           ))}
        </div>
    )
}