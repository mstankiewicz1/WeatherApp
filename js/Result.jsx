import React from 'react';



const Result = props => {


    const { date, city, sunrise, sunset, temp, pressure, wind, err} = props.weather;

    let content = null;

    if (!err && city){

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        const tempCelciusz = Math.round(temp - 273.15).toFixed(2);

        content = (
            <table>
                    <tr>
                        <td>Wyniki wyszukiwania dla:</td>
                        <td><strong>{city}</strong></td>
                    </tr>
                    <tr>
                        <td>Dane dla dnia i godziny:</td>
                        <td>{date}</td>
                    </tr>
                    <tr>
                        <td>Aktualna temperatura:</td>
                        <td>{tempCelciusz} &#176;C</td>
                    </tr>
                    <tr>
                        <td>Wschód słońca o:</td>
                        <td>{sunriseTime}</td>
                    </tr>
                    <tr>
                        <td>Zachód słońca o:</td>
                        <td>{sunsetTime}</td>
                    </tr>
                    <tr>
                        <td>Aktualna sila wiatru:</td>
                        <td>{wind} m/s</td>
                    </tr>
                    <tr>
                        <td>Aktualne ciśnienie:</td>
                        <td>{pressure} hPa</td>
                    </tr>
            </table>
        )
    }


    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>
    )
};

export default Result;