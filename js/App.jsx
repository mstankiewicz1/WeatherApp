import React from 'react';
import Form from './Form.jsx';
import Result from './Result.jsx';


const APIkey = '0a8eaf040f6695b55b59f51d06d46254';

class App extends React.Component {


    state = {
      value: '',
      data: '',
      city: '',
      sunrise: '',
      sunset: '',
      temp: '',
      pressure: '',
      wind: '',
      err: '',
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
            .then(data => console.log(data))


            .catch(err => console.log(err))

    };


    render() {
        return (
            <div>
                <h1>WeatherApp</h1>
                <Form
                    value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleCitySubmit}
                />
                <Result/>
            </div>
        )
    }
}

export default App;