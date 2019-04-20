import React from "react";


export default class Weather extends React.Component{
  constructor(){
    super();
    this.state = {}
  }


  componentDidMount(){
    this.getLocation();
  }

  // Asynchronous
  getLocation() {
    if(!navigator.geolocation) {
      this.setState({ status: "Geolocation is not supported by your browser"});
    } else {
      this.setState({ status: "Locating..."});
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log("Success!", pos)
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        // Make API call to get weather (asynchronous)
        $.ajax({
          url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=5a11a1d527b3b3ad4491592abcceb51d`,
          type: "GET",
          success: data => {
            this.setState({ city: data.name, weather: data.main.temp });
          },
          error: () => {
            this.setState({
              status: "Unable to retrieve weather info"
            });
          }
        });

      }, () => {
        this.setState({ status: "Unable to retrieve your location"});
      });
    }
  }

  render(){
    return (
      <aside className="widget weather">
        <h1>Weather Widget</h1>
        <ul>
          <li>
            <span>City:</span> <span>{this.state.city}</span>
          </li>
          <li>
            <span>Temp:</span> <span>{this.state.weather} Kelvin</span>
          </li>
        </ul>
      </aside>
    );
    
  };
}