import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "c79fcadc61f299e6ca078c0709a87519";
//initializing a component
class App extends React.Component{

//state is an object that contains jkey value pairs
  state={
    temperature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined



  }
 getWeather = async(e)=>{
   e.preventDefault();
   const city=e.target.elements.city.value;
   const country=e.target.elements.country.value;
const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
const data=await api_call.json();
if(city && country)
{
  console.log(data);
  
  
  this.setState({
    temperature:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error:""
  });
}
else{
 
  
  this.setState({
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:"Please enter the values"
  });
}
 }
  render(){
    return(
      <div>
       <div className="wrapper">
         <div className="main">
           <div className="container">
             <div className="row">
             
             <div className=".col-xs-5 title-container">
             <Titles/>
               </div>
               <div className=".col-xs-7 form-container">
               <Form getWeather={this.getWeather}/>
       <Weather 
       temperature={this.state.temperature}
       city={this.state.city}
       country={this.state.country}
       description={this.state.description}
       humidity={this.state.humidity}
       error={this.state.error}
       />


</div>
             </div>
             </div>
             </div>
             </div>

      </div>
    );
  }
}

export default App;