import React from 'react';



const Result = props => {


    const { data, city, sunrise, sunset, temp, pressure, wind, err} = props.weather;
    

    return (
        <div>
            <div>Pogoda dla: {city}</div>
            <div>Temperatura: {temp}</div>
            <div>Pogoda dla: {city}</div>
            <div>Pogoda dla: {city}</div>
            <div>Pogoda dla: {city}</div>
        </div>
    )
};

export default Result;