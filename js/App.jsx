import React from 'react';
import Form from './Form.jsx';
import Result from './Result.jsx';


const APIkey = '0a8eaf040f6695b55b59f51d06d46254';

class App extends React.Component {


    state = {
      value: '',
      date: '',
      city: '',
      sunrise: '',
      sunset: '',
      temp: '',
      pressure: '',
      wind: '',
      err: false,
    };


    handleInputChange = e => {
        this.setState({
            value: e.target.value,
        })
    };

    handleCitySubmit = e => {
        e.preventDefault();

        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}`;

        fetch(API)
            .then(response => {
                if (response.ok){
                    return response;
                }
                throw Error('Nie udało się pobrać danych');
            })
            .then(response => response.json())
            .then(data => {

                const time = new Date().toLocaleString();

                this.setState({
                    err: false,
                    date: time,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    city: this.state.value,
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    err: true,
                    city: this.state.value,
                })
            })
        };



    render() {
        return (
            <div className="app">
                <h1>WeatherApp</h1>
                <Form
                    value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleCitySubmit}
                />
                <Result weather={this.state}/>
            </div>
        )
    }
}

export default App;