import React from 'react';
import Form from './Form.jsx';
import Result from './Result.jsx';



class App extends React.Component {


    state = {
      value: "",
    };


    handleInputChange = () => {

    };

    
    render() {
        return (
            <div>
                <h1>WeatherApp</h1>
                <Form value={this.state.value}/>
                <Result/>
            </div>
        )
    }
}

export default App;