import React from 'react';
import Form from './Form.jsx';
import Result from './Result.jsx';



class App extends React.Component {




    render() {
        return (
            <div>
                <h1>WeatherApp</h1>
                <Form/>
                <Result/>
            </div>
        )
    }
}

export default App;