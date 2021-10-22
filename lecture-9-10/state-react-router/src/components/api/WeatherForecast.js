import React, { Component } from "react"
import { weatherAPI } from "./apis"
import axios from 'axios'


const dayOfWeek = (dayIndex) => {
    switch (dayIndex) {
      case "1": return "Tomorrow"
      case "2": return "Day after Tomorrow"
      case "3": return "Later"
      default: return "Today"
    }
}

const Forecast = (props) => {
    return (
        <div key={props.forecast.day}>
            <p>Temperature {dayOfWeek(props.forecast.day)}: {props.forecast.temperature}</p>
            <p>Wind {dayOfWeek(props.forecast.day)}: {props.forecast.wind}</p>
            <hr/>
        </div>
    )
}


class WeatherForecast extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weatherData: undefined
        }
    }

    componentWillMount = () => {
        axios.get(weatherAPI)
        .then(({ data }) => {
            this.setState({weatherData: data})
        })
        .catch(({ response }) => {

        })
    }

    render = () => {
        return (
            <div>
                {this.state.weatherData ?
                    <div>
                        <p>Temperature today: {this.state.weatherData.temperature}</p>
                        <p>Wind today: {this.state.weatherData.wind}</p>
                        <p>Weather Desciption today: {this.state.weatherData.description}</p>
                        <hr/>
                        {this.state.weatherData.forecast.map(forecast => (
                            <Forecast forecast={forecast} />
                        ))}
                    </div>
                    : <div>Loading...</div>
                }
            </div>
        )
    }
}

export default WeatherForecast
