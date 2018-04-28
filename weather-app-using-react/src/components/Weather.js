import React from "react";

//for stateless
const Weather = (props) =>{
    return(
        <div>
                        {
                            props.city && props.country && <p className="weather__key">  Location:
                            <span>{props.city}, Country:{props.country}</span></p>
                        }
        
                       {
                           props.temperature && <p className="weather__key">Temperature: 
                               <span> {props.temperature}</span></p>
                       }
                     
                       {
                           props.humidity && <p className="weather__key"> Humidity:
                               <span> {props.humidity}</span></p>
                       }
                       {
                           props.description && <p className="weather__key"> Conditions:
                               <span>  {props.description}</span></p>
                       }
                         {
                             props.error && <p className="weather__error">{props.error}</p>
                         }
       </div>
    );
}





// class Weather extends React.Component{
//     render()
//     {
//         return(

//             <div>
//                 {this.props.city && this.props.country && <p>  Location:{this.props.city}, Country:{this.props.country}</p>}

//               {this.props.temperature && <p>Temperature:  {this.props.temperature}</p>}
             
//               {this.props.humidity && <p> Humidity: {this.props.humidity}</p>}
//               {this.props.description && <p> Conditions:  {this.props.description}</p>}
//                 {this.props.error && <p>{this.props.error}</p>}
//                  </div>
//         );
//     }
// };

export default Weather;