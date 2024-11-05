import Clear from "../img/clear.png";
import Cloud from "../img/cloud.png";
import Rain from "../img/rain.png";
import Snow from "../img/snow.png";
import Mist from "../img/mist.png";
import NotFound from "../img/404.png";
import { BiWater } from "react-icons/bi";
import { BiWind } from "react-icons/bi";
import { useState } from "react";
export default function Weather(props) {
  // const [img , setImg] = useState('')
  const tempreature = props.tempreature;
  const stat = props.main;
  const city = props.city;
  const country = props.country;
  const humidity = props.humidity;
  const description = props.description;
  const wind = props.wind;
  const error = props.error;
  const img =
    error === "" ? (
      props.main === "Clear" ? (
        <img src={Clear} alt="img" />
      ) : props.main === "Clouds" ? (
        <img src={Cloud} alt="img" />
      ) : props.main === "Rain" ? (
        <img src={Rain} alt="img" />
      ) : props.main === "Haze" ? (
        <img src={Snow} alt="img" />
      ) : props.main === "Mist" ? (
        <img src={Mist} alt="img" />
      ) : (
        <img src={Clear} alt="img" />
      )
    ) : (
      <img src={NotFound} alt="img" />
    );

  return (
    <div className="info-weather">
      <div className="weather">
        {img}
        {error === "" ? (
          <>
            <p className="temperature">
              {tempreature !== "" ? tempreature : 0} <span>C</span>
            </p>
            <p className="des">{description}</p>{" "}
          </>
        ) : (
          <p>Oop! not found this city</p>
        )}
      </div>
      {error === "" ? (
        <div className="weather-details">
          <div className="humidity">
            <BiWater />
            <div className="text">
              <div className="info-humidity">
                <span>{humidity !== "" ? humidity : 0}%</span>
              </div>
              <p>Humidity</p>
            </div>
          </div>
          <div className="wind">
            <BiWind />
            <div className="text">
              <div className="info-wind">
                <span>{wind !== "" ? wind : 0}Km/h</span>
              </div>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
